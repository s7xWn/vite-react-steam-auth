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
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-8">
      {sortedItems.map((item, i) => {
        const rarity = item.tags.find((tag) => tag.category === "Rarity");
        return (
          <div
            key={i}
            className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-300/20 hover:bg-sky-300/[0.035] bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage:
                "url(https://community.fastly.steamstatic.com/economy/image/" +
                item.icon_url +
                ")",
              borderColor: "#" + rarity.color,
            }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">{item.name}</span>
              {/* <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-sky-300/10 bg-sky-300/[0.07] text-sky-300">
              <img
                src={
                  "https://community.fastly.steamstatic.com/economy/image/" +
                  item.icon_url
                }
                className="mask-b-from-20% mask-b-to-80%  aspect-square object-cover rounded-lg"
              />
            </div> */}
            </div>
            <div className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
              {i}
            </div>
            {/* <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">
            {positive && (
              <ArrowUpRight size={14} className="text-emerald-400" />
            )}
            {change}
          </div> */}
          </div>
        );
      })}
    </div>
  );
}
