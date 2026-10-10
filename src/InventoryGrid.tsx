type ItemCategory = {
  category: string;
  internal_name: string;
  localized_category_name: string;
  localized_tag_name: string;
  color?: string;
};

type InventoryItem = {
  name: string;
  icon_url: string;
  tags: ItemCategory[];
};

type InventoryGridProps = {
  items: InventoryItem[];
};

const rarityOrder: Record<string, number> = {
  Rarity_Common: 1,
  Rarity_Common_Weapon: 1,
  Rarity_Uncommon: 2,
  Rarity_Uncommon_Weapon: 2,
  Rarity_Rare: 3,
  Rarity_Rare_Weapon: 3,
  Rarity_Rare_Character: 3,
  Rarity_Mythical: 4,
  Rarity_Mythical_Weapon: 4,
  Rarity_Mythical_Character: 4,
  Rarity_Legendary: 5,
  Rarity_Legendary_Weapon: 5,
  Rarity_Ancient: 6,
  Rarity_Ancient_Weapon: 6,
  Rarity_Immortal: 7,
  Rarity_Immortal_Weapon: 7,
};

export default function InventoryGrid({ items }: InventoryGridProps) {
  const sortedItems = [...items]
    .sort((a, b) => {
      const rarityA = a.tags.find(
        (tag) => tag.category === "Rarity",
      )?.internal_name;
      const rarityB = b.tags.find(
        (tag) => tag.category === "Rarity",
      )?.internal_name;

      return (
        (rarityOrder[rarityB ?? ""] ?? 0) - (rarityOrder[rarityA ?? ""] ?? 0)
      );
    })
    .filter(
      (item) =>
        item.tags.find((tag) => tag.category === "Type")?.internal_name !==
        "CSGO_Type_Collectible",
    );

  console.log(sortedItems);
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {sortedItems.map((item, i) => {
        const rarity = item.tags.find((tag) => tag.category === "Rarity");
        const exterior = item.tags.find((tag) => tag.category === "Exterior");
        const quality = item.tags.find((tag) => tag.category === "Quality");
        const color = "#" + (rarity?.color ?? "6b7280");

        const wear = {
          "Factory New": "FN",
          "Minimal Wear": "MW",
          "Field-Tested": "FT",
          "Well-Worn": "WW",
          "Battle-Scarred": "BS",
        }[exterior?.localized_tag_name ?? ""];

        const isSpecial =
          quality?.localized_tag_name === "StatTrak™" ||
          quality?.localized_tag_name === "Souvenir";

        const [weapon, ...rest] = item.name
          .replace(/^(StatTrak™|Souvenir)\s*/, "")
          .split(" | ");
        const skin = rest.join(" | ");

        return (
          <div
            key={i}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0b1018] transition duration-300 hover:-translate-y-1"
            style={{ "--rc": color } as React.CSSProperties}
          >
            {/* свечение редкости */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-3/5 opacity-30 transition-opacity duration-300 group-hover:opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 55%, var(--rc) 0%, transparent 65%)",
              }}
            />
            {/* рамка при ховере */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ boxShadow: "inset 0 0 0 1px var(--rc)" }}
            />

            {/* бейджи */}
            <div className="relative z-10 flex items-start justify-between p-3">
              {isSpecial ? (
                <span
                  className={
                    "rounded-md px-1.5 py-0.5 text-[11px] font-semibold " +
                    (quality?.localized_tag_name === "Souvenir"
                      ? "bg-yellow-400/15 text-yellow-300"
                      : "bg-orange-500/15 text-orange-300")
                  }
                >
                  {quality?.localized_tag_name}
                </span>
              ) : (
                <span />
              )}
              {wear && (
                <span
                  title={exterior?.localized_tag_name}
                  className="rounded-md bg-white/[0.06] px-1.5 py-0.5 text-[11px] font-medium text-slate-300"
                >
                  {wear}
                </span>
              )}
            </div>

            {/* картинка */}
            <div className="relative z-10 -mt-1 px-4">
              <img
                src={
                  "https://community.fastly.steamstatic.com/economy/image/" +
                  item.icon_url +
                  "/360fx360f"
                }
                alt={item.name}
                loading="lazy"
                className="aspect-[4/3] w-full object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* текст */}
            <div className="relative z-10 mt-auto px-4 pb-4 pt-3">
              <p className="truncate text-xs text-slate-400">{weapon}</p>
              <h3
                className="truncate text-base font-semibold tracking-tight text-slate-100"
                title={item.name}
              >
                {skin || weapon}
              </h3>
              {rarity && (
                <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: "var(--rc)" }}
                  />
                  {rarity.localized_tag_name}
                </div>
              )}
            </div>

            {/* полоска редкости */}
            <div
              aria-hidden
              className="h-[3px] w-full"
              style={{ background: "var(--rc)" }}
            />
          </div>
        );
      })}
    </div>
  );
}
