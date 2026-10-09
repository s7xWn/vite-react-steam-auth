const API_URL = import.meta.env.VITE_BACKEND_URL;

export interface User {
  id: string;
  steamId: string;
  createdAt: string;
  updatedAt: string;
}

export async function getCurrentUser(): Promise<User | null> {
  try {
    const response = await fetch(`${API_URL}/auth/me`, {
      credentials: "include",
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as User;
  } catch (error) {
    console.error("Failed to fetch current user:", error);
    return null;
  }
}
