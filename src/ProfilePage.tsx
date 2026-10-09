import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const API_URL = import.meta.env.VITE_BACKEND_URL;

type SteamProfile = {
  steamId: string;
  username: string;
  avatar: string | null;
  profileUrl?: string;
};

type InventoryItem = {
  id: string;
  name: string;
  image: string | null;
  amount?: number;
};

export default function ProfilePage() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState<SteamProfile | null>(null);
  const [items, setItems] = useState<InventoryItem[]>([]);
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
          const inventoryResponse = await fetch(
            `${API_URL}/users/me/inventory`,
            { credentials: "include" },
          );

          if (!inventoryResponse.ok) {
            throw new Error("Не удалось загрузить инвентарь");
          }

          const inventory: InventoryItem[] = await inventoryResponse.json();

          if (!cancelled) setItems(inventory);
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
      <section className="profile-header">
        {profile.avatar && (
          <img src={profile.avatar} alt="" width={96} height={96} />
        )}

        <div>
          <h1>{profile.username}</h1>
          <p>Steam ID: {profile.steamId}</p>

          {profile.profileUrl && (
            <a href={profile.profileUrl} target="_blank" rel="noreferrer">
              Открыть профиль Steam
            </a>
          )}
        </div>
      </section>

      <section className="inventory">
        <h2>Инвентарь</h2>

        {inventoryError ? (
          <p role="alert">{inventoryError}</p>
        ) : items.length === 0 ? (
          <p>Инвентарь пуст.</p>
        ) : (
          <div className="inventory-grid">
            {items.map((item) => (
              <article key={item.id} className="inventory-item">
                {item.image && <img src={item.image} alt={item.name} />}
                <h3>{item.name}</h3>
                {item.amount != null && <p>Количество: {item.amount}</p>}
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
