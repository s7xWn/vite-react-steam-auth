import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import InventoryGrid from "./InventoryGrid";

const API_URL = import.meta.env.VITE_BACKEND_URL;

type SteamProfile = {
  steamId: string;
  username: string;
  avatar: string | null;
  profileUrl?: string;
};

export default function ProfilePage() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState<SteamProfile | null>(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inventoryError, setInventoryError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadProfile() {
      try {
        const response = await fetch(`${API_URL}/auth/me`, {
          credentials: "include",
        });

        if (response.status === 401) {
          navigate("/login", { replace: true });
          return;
        }

        if (!response.ok) {
          throw new Error("Не удалось загрузить профиль");
        }

        const user: SteamProfile = await response.json();

        if (cancelled) return;
        setProfile(user);

        try {
          const inventoryResponse = await fetch(`${API_URL}/me/inventory`, {
            credentials: "include",
          });

          if (!inventoryResponse.ok) {
            throw new Error("Не удалось загрузить инвентарь");
          }

          const inventory = await inventoryResponse.json();

          console.log(inventory.descriptions);

          if (!cancelled) setItems(inventory.descriptions);
        } catch {
          if (!cancelled) {
            setInventoryError(
              "Инвентарь недоступен. Возможно, он скрыт настройками Steam.",
            );
          }
        }
      } catch (error) {
        if (!cancelled) {
          console.error(error);
          setInventoryError(
            "Не удалось подключиться к серверу. Попробуй обновить страницу.",
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void loadProfile();

    return () => {
      cancelled = true;
    };
  }, [navigate]);

  if (loading) {
    return <main>Загрузка профиля...</main>;
  }

  if (!profile) {
    return <main>Не удалось загрузить профиль.</main>;
  }

  return (
    <main className="profile">
      <div className="mb-5 mt-10 flex items-end justify-between gap-4">
        <div>
          <div className="text-2xl font-medium uppercase tracking-[0.18em] text-sky-300/80">
            {profile.username ?? "Тут должен быть никнейм"}
            {profile.avatar && (
              <img src={profile.avatar} alt="" width={96} height={96} />
            )}
          </div>
          <p className="text-xs sm:text-xs text-slate-500">{profile.steamId}</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-xl">
            Инвентарь
          </h2>
        </div>
        <span className="hidden text-xs text-slate-500 sm:block">
          Your workspace at a glance
        </span>
      </div>

      <section className="inventory">
        {inventoryError ? (
          <p role="alert">{inventoryError}</p>
        ) : items.length === 0 ? (
          <p>Инвентарь пуст.</p>
        ) : (
          <InventoryGrid items={items}></InventoryGrid>
        )}
      </section>
    </main>
  );
}
