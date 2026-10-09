import { useEffect, useState } from "react";
import { getCurrentUser, type User } from "./api/auth";
import { Link } from "react-router";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export function SteamLoginButton() {
  const login = () => {
    window.location.assign(`${API_URL}/auth/steam`);
  };

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then(setUser)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Проверяем авторизацию...</p>;
  }
  if (!user) {
    return (
      <button
        className="
  group relative inline-flex items-center justify-center gap-3
  rounded-md border border-pink-400/80
  bg-[#211923]
  px-7 py-3.5
  text-sm font-bold text-white
  shadow-[0_5px_0_#9d356d,0_8px_18px_rgba(236,72,153,0.15),inset_0_1px_0_rgba(255,255,255,0.12)]
  transition-all duration-200 ease-out
  hover:border-pink-200
  hover:bg-pink-500
  hover:shadow-[0_5px_0_#9d174d,0_8px_28px_rgba(236,72,153,0.4),inset_0_1px_0_rgba(255,255,255,0.3)]
  hover:-translate-y-0.5
  active:translate-y-1
  active:shadow-[0_1px_0_#9d174d,0_3px_10px_rgba(236,72,153,0.25)]
  focus-visible:outline-none
  focus-visible:ring-2 focus-visible:ring-pink-300
  focus-visible:ring-offset-4 focus-visible:ring-offset-[#17151e]
"
        onClick={login}
      >
        Войти через Steam
      </button>
    );
  } else {
    return (
      <Link
        to={"/profile"}
        className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
      >
        Профиль
      </Link>
    );
  }
}
