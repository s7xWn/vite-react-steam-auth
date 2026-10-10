import { useState } from "react";
import { Link, Outlet } from "react-router";
import { CircleHelp, LayoutDashboard, Settings2, X } from "lucide-react";

const navigation = [{ label: "Кейсы", icon: LayoutDashboard }];

// const products = [
//   {
//     name: "Frost",
//     description: "Minimal. Precise. Powerful.",
//     tag: "POPULAR",
//     gradient: "from-sky-400/25 via-blue-500/10 to-transparent",
//     icon: "❄",
//   },
//   {
//     name: "Phantom",
//     description: "Built for your next level.",
//     tag: "NEW",
//     gradient: "from-indigo-400/25 via-violet-500/10 to-transparent",
//     icon: "◈",
//   },
//   {
//     name: "Aurora",
//     description: "A different perspective.",
//     tag: "UPDATED",
//     gradient: "from-cyan-300/20 via-teal-500/10 to-transparent",
//     icon: "✳",
//   },
// ];

// const updates = [
//   {
//     title: "Platform update",
//     description: "Interface improvements and optimizations",
//     time: "2 hours ago",
//     color: "bg-sky-400",
//   },
//   {
//     title: "System operational",
//     description: "All services are running normally",
//     time: "5 hours ago",
//     color: "bg-emerald-400",
//   },
//   {
//     title: "New release",
//     description: "Discover what's new in the latest version",
//     time: "Yesterday",
//     color: "bg-violet-400",
//   },
// ];

export default function Layout() {
  const [active, setActive] = useState("Overview");
  const [mobileOpen, setMobileOpen] = useState(false);
  //   const [query, setQuery] = useState("");
  //   const filteredProducts = products.filter((product) =>
  //     product.name.toLowerCase().includes(query.toLowerCase()),
  //   );
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#080C15] text-slate-100 selection:bg-sky-400/30 ">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-64 left-[15%] h-[550px] w-[550px] rounded-full bg-sky-500/10 blur-[140px]" />
        <div className="absolute right-[-180px] top-[20%] h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute bottom-[-250px] left-[35%] h-[450px] w-[450px] rounded-full bg-indigo-500/[0.07] blur-[150px]" />
      </div>
      <div className="relative flex min-h-screen">
        {/* Mobile overlay */}
        {mobileOpen && (
          <button
            aria-label="Close navigation"
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed 
            inset-y-0 
            left-0 
            z-50 
            flex w-[260px] flex-col border-r border-white/[0.07] 
            bg-[#0A0F1B]/95 px-5 py-6 backdrop-blur-2xl 
            transition-transform duration-300 
            lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
              mobileOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="flex items-center justify-between px-2">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-300 to-blue-600 text-slate-950 shadow-lg shadow-sky-500/20">
                s7x
              </div>
              <div>
                <div className="text-[15px] font-bold tracking-[0.2em]">
                  Casino
                </div>
                <div className="mt-0.5 text-[10px] tracking-[0.25em] text-slate-500">
                  Gamble
                </div>
              </div>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-slate-400 lg:hidden"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mt-12 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
            Заголовок
          </div>

          <nav className="mt-4 space-y-1.5">
            {navigation.map(({ label, icon: Icon }) => (
              <Link
                key={label}
                to="/"
                onClick={() => {
                  setActive(label);
                  setMobileOpen(false);
                }}
                className={`group flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm transition-all ${
                  active === label
                    ? "border border-sky-300/10 bg-gradient-to-r from-sky-400/15 to-blue-500/[0.04] text-sky-200 shadow-[inset_2px_0_0_#7dd3fc]"
                    : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <Icon size={18} />
                <span className="flex-1 text-left">{label}</span>
                {active === label && (
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_10px_#7dd3fc]" />
                )}
              </Link>
            ))}
          </nav>

          <div className="mt-10 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
            Персональные настройки
          </div>

          <button
            onClick={() => setActive("Settings")}
            className={`mt-4 flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm transition hover:bg-white/[0.04] hover:text-white ${
              active === "Settings" ? "text-sky-200" : "text-slate-400"
            }`}
          >
            <Settings2 size={18} />
            Настройки
          </button>

          <button
            onClick={() => setActive("Help center")}
            className={`flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm transition hover:bg-white/[0.04] hover:text-white ${
              active === "Help center" ? "text-sky-200" : "text-slate-400"
            }`}
          >
            <CircleHelp size={18} />
            Помощь
          </button>
          {/* {Красивый блок} */}
          {/* <div className="mt-auto">
            <div className="relative overflow-hidden rounded-2xl border border-sky-300/10 bg-gradient-to-br from-sky-400/10 via-blue-500/[0.04] to-transparent p-4">
              <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-sky-400/10 blur-2xl" />
              <Sparkles size={20} className="relative text-sky-300" />
              <div className="relative mt-4 text-sm font-semibold">
                Stay ahead.
              </div>
              <p className="relative mt-1.5 text-xs leading-5 text-slate-400">
                Explore the latest platform updates and features.
              </p>
              <button
                onClick={() => setActive("Products")}
                className="relative mt-4 flex items-center gap-2 text-xs font-semibold text-sky-300 transition hover:text-white"
              >
                Explore features <ChevronRight size={14} />
              </button>
            </div>

            <div className="mt-5 flex items-center gap-3 border-t border-white/[0.07] pt-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-slate-700 to-slate-900 text-sm font-bold text-sky-200">
                G
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-medium">Guest user</div>
                <div className="mt-0.5 text-xs text-slate-500">
                  Personal workspace
                </div>
              </div>
              <button
                onClick={() => setActive("Settings")}
                aria-label="Profile settings"
                className="text-slate-500 transition hover:text-sky-300"
              >
                <Settings2 size={17} />
              </button>
            </div>
          </div> */}
        </aside>

        {/* Main content */}
        <main className="min-w-0 flex-1">
          {/* Topbar */}
          {/* <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-white/[0.06] bg-[#080C15]/75 px-5 backdrop-blur-xl sm:px-8 lg:px-10">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMobileOpen(true)}
                className="rounded-lg border border-white/10 p-2 text-slate-300 lg:hidden"
                aria-label="Open menu"
              >
                <Menu size={19} />
              </button>
              <div className="hidden items-center gap-2 text-xs text-slate-500 sm:flex">
                Workspace
                <ChevronRight size={13} />
                <span className="text-slate-200">{active}</span>
              </div>
              <div className="text-sm font-medium sm:hidden">{active}</div>
            </div>

            <div className="flex items-center gap-3">
              <label className="hidden h-10 w-56 items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3.5 transition focus-within:border-sky-400/30 md:flex">
                <Search size={16} className="text-slate-500" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search products..."
                  className="w-full bg-transparent text-xs text-white outline-none placeholder:text-slate-600"
                />
                <span className="text-[10px] text-slate-600">/</span>
              </label>

              <button
                aria-label="Notifications"
                className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-slate-400 transition hover:border-sky-300/20 hover:text-sky-200"
              >
                <Bell size={17} />
                <span className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-sky-300 ring-2 ring-[#080C15]" />
              </button>

              <div className="hidden h-8 w-px bg-white/10 sm:block" />

              <div className="hidden items-center gap-2 sm:flex">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                <span className="text-xs text-slate-400">All systems up</span>
              </div>
            </div>
          </header> */}

          <div className="mx-auto max-w-[1500px] px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
            {/* Hero */}
            {/* <section className="relative overflow-hidden rounded-3xl border border-sky-200/[0.12] bg-[#101B2B]">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-300/[0.17] via-blue-500/[0.07] to-transparent" />
              <div className="absolute -right-10 -top-32 h-80 w-80 rounded-full bg-sky-400/15 blur-[90px]" />
              <div className="absolute bottom-[-100px] right-[25%] h-48 w-48 rounded-full bg-blue-500/10 blur-[80px]" />
            </section> */}

            <Outlet />

            {/* Footer */}
            <footer className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] py-6 text-[11px] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <span className="font-semibold tracking-[0.16em] text-slate-400">
                  s7xWn web platform
                </span>
                <span>© 2026 All rights reserved.</span>
              </div>
              <div className="flex items-center gap-5">
                <a href="#" className="transition hover:text-slate-300">
                  Privacy
                </a>
                <a href="#" className="transition hover:text-slate-300">
                  Terms
                </a>
                <a href="#" className="transition hover:text-slate-300">
                  Support
                </a>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
