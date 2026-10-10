import { useEffect, useState } from "react";
import { getCurrentUser, type User } from "./api/auth";
import { Link } from "react-router";
import { FaSteam } from "react-icons/fa";

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
        onClick={login}
        className="
    group relative isolate inline-flex items-center justify-center gap-3 leading-none
    overflow-hidden rounded-xl
    border border-sky-300/25
    bg-[#0D1726]
    px-7 py-3.5
    text-sm font-semibold tracking-wide text-sky-100

    shadow-[0_0_20px_rgba(56,189,248,0.06),inset_0_1px_0_rgba(255,255,255,0.06)]
    transition-all duration-300 ease-out

    before:pointer-events-none before:absolute before:inset-0 before:-z-10
    before:bg-gradient-to-r before:from-sky-400/15 before:via-blue-500/10 before:to-indigo-400/15
    before:opacity-70 before:transition-opacity before:duration-300

    after:pointer-events-none after:absolute after:inset-y-0 after:-left-1/2
    after:w-1/3 after:skew-x-[-20deg]
    after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent
    after:transition-all after:duration-700

    hover:-translate-y-0.5
    hover:border-sky-300/50
    hover:text-white
    hover:shadow-[0_0_30px_rgba(56,189,248,0.16),0_0_60px_rgba(59,130,246,0.08),inset_0_1px_0_rgba(255,255,255,0.1)]
    hover:before:opacity-100
    hover:after:left-[140%]

    active:translate-y-0
    active:scale-[0.98]

    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-sky-300/70
    focus-visible:ring-offset-2 focus-visible:ring-offset-[#080C15]
  "
      >
        <FaSteam size={24} />
        <span>Войти через Steam</span>

        <svg
          viewBox="0 0 20 20"
          fill="none"
          className="h-4 w-4 text-sky-400/60 transition-all duration-300 group-hover:translate-x-1 group-hover:text-sky-200"
          aria-hidden="true"
        >
          <path
            d="M4 10h12m-5-5 5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  } else {
    return (
      <Link
        to={"/profile"}
        className="underline bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent text-5xl font-bold tracking-tight"
      >
        Профиль
      </Link>
    );
  }
}
