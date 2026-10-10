export default function InventoryGrid({ items }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-8">
      {items.map((item, i) => (
        <div
          key={i}
          className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-300/20 hover:bg-sky-300/[0.035] bg-center bg-no-repeat bg-contain"
          style={{
            backgroundImage:
              "url(https://community.fastly.steamstatic.com/economy/image/" +
              item.icon_url +
              ")",
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
            {"value"}
          </div>
          {/* <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">
            {positive && (
              <ArrowUpRight size={14} className="text-emerald-400" />
            )}
            {change}
          </div> */}
        </div>
      ))}
    </div>
  );
}
