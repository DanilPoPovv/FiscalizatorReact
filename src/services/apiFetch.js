import { getBaseHeaders } from "./baseHeaderProvider";

export default async function apiFetch(url, options = {}) {
  try {
    const response = await fetch(url, {
      method: options.method,
      headers: {
        ...getBaseHeaders(),
        ...(options.headers || {})
      },
      body: options.body ? JSON.stringify(options.body) : undefined
    });

    if (response.status === 204) {
      return null;
    }

    if (!response.ok) {
      let errorData;

      try {
        errorData = await response.json();
      } catch {
        errorData = { message: "Unknown error" };
      }

      throw {
        status: response.status,
        message: errorData.message ?? "Ошибка запроса",
        data: errorData
      };
    }

    return await response.json();

  } catch (error) {
    if (!error.status) {
      throw {
        status: 0,
        message: "Сервер недоступен"
      };
    }

    throw error;
  }
}