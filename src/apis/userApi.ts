const apiUrl = "http://localhost:3000";

export type ApiResult<T> = {
  success: boolean;
  message: string;
  data?: T;
};

export type ApiError = {
  code: string;
  message: string;
  detail?: string;
};

export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export const getUserData = async () => {
  try {
    const res = await fetch(`${apiUrl}/fetch-user-data`);
    const json = await res.json();
    return json as Promise<ApiResult<User>>;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateUserData = async (data: Partial<User>) => {
  try {
    const res = await fetch(`${apiUrl}/update-user-data`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer demo",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    const json = await res.json();
    return json as Promise<ApiResult<{}>>;
  } catch (error) {
    return Promise.reject(error);
  }
};
