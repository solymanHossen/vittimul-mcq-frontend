export class ApiError extends Error {
  statusCode: number
  response?: {
    data?: unknown
    status: number
  }

  constructor(message: string, statusCode: number, data?: unknown) {
    super(message)
    this.name = "ApiError"
    this.statusCode = statusCode
    this.response = {
      data,
      status: statusCode,
    }
  }
}

function resolveApiUrl(path: string): string {
  const envUrl =
    process.env.NEXT_PUBLIC_API_URL ??
    process.env.API_URL ??
    "http://localhost:3000/api/v1"
  let baseUrl = envUrl.trim().replace(/\/+$/, "")

  // If the user specified http://localhost:3000 without /api or /api/v1, ensure /api/v1 is included
  if (!baseUrl.includes("/api/v1") && !baseUrl.endsWith("/api")) {
    baseUrl = `${baseUrl}/api/v1`
  } else if (baseUrl.endsWith("/api")) {
    baseUrl = `${baseUrl}/v1`
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`
  return `${baseUrl}${cleanPath}`
}

function extractErrorMessage(data: unknown, fallback: string): string {
  if (!data || typeof data !== "object") return fallback

  const record = data as Record<string, unknown>

  if (typeof record.message === "string" && record.message.trim().length > 0) {
    return record.message
  }

  if (Array.isArray(record.message) && record.message.length > 0) {
    return record.message.filter(Boolean).join(". ")
  }

  if (typeof record.error === "string") {
    return record.error
  }

  return fallback
}

interface RequestOptions extends RequestInit {
  token?: string
}

async function request<T>(
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  path: string,
  body?: unknown,
  options?: RequestOptions
): Promise<{ data: T; message?: string }> {
  const url = resolveApiUrl(path)

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...(options?.headers as Record<string, string> | undefined),
  }

  if (options?.token) {
    headers["Authorization"] = `Bearer ${options.token}`
  }

  const response = await fetch(url, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
    cache: options?.cache ?? "no-store",
    credentials: "include",
  })

  const json = await response.json().catch(() => null)

  if (!response.ok) {
    const errorMsg = extractErrorMessage(json, `HTTP Error ${response.status}`)
    throw new ApiError(errorMsg, response.status, json)
  }

  // Handle NestJS TransformInterceptor envelope: { success: true, message: string, data: T }
  if (json && typeof json === "object" && "data" in json) {
    return {
      data: json.data as T,
      message: typeof json.message === "string" ? json.message : undefined,
    }
  }

  return { data: json as T }
}

export const api = {
  get: <T>(path: string, options?: RequestOptions) =>
    request<T>("GET", path, undefined, options),

  post: <T>(path: string, body?: unknown, options?: RequestOptions) =>
    request<T>("POST", path, body, options),

  put: <T>(path: string, body?: unknown, options?: RequestOptions) =>
    request<T>("PUT", path, body, options),

  patch: <T>(path: string, body?: unknown, options?: RequestOptions) =>
    request<T>("PATCH", path, body, options),

  delete: <T>(path: string, options?: RequestOptions) =>
    request<T>("DELETE", path, undefined, options),
}

export default api
