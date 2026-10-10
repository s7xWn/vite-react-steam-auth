import { useState } from "react";
import {
  Activity,
  ArrowUpRight,
  Bell,
  ChevronRight,
  CircleHelp,
  Command,
  Cpu,
  ExternalLink,
  Gamepad2,
  LayoutDashboard,
  Menu,
  Package,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const navigation = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Products", icon: Package },
  { label: "System status", icon: Activity },
];

const products = [
  {
    name: "Frost",
    description: "Minimal. Precise. Powerful.",
    tag: "POPULAR",
    gradient: "from-sky-400/25 via-blue-500/10 to-transparent",
    icon: "❄",
  },
  {
    name: "Phantom",
    description: "Built for your next level.",
    tag: "NEW",
    gradient: "from-indigo-400/25 via-violet-500/10 to-transparent",
    icon: "◈",
  },
  {
    name: "Aurora",
    description: "A different perspective.",
    tag: "UPDATED",
    gradient: "from-cyan-300/20 via-teal-500/10 to-transparent",
    icon: "✳",
  },
];

const updates = [
  {
    title: "Platform update",
    description: "Interface improvements and optimizations",
    time: "2 hours ago",
    color: "bg-sky-400",
  },
  {
    title: "System operational",
    description: "All services are running normally",
    time: "5 hours ago",
    color: "bg-emerald-400",
  },
  {
    title: "New release",
    description: "Discover what's new in the latest version",
    time: "Yesterday",
    color: "bg-violet-400",
  },
];

export default function App() {
  const [active, setActive] = useState("Overview");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
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
          className={`fixed inset-y-0 left-0 z-50 flex w-[260px] flex-col border-r border-white/[0.07] bg-[#0A0F1B]/95 px-5 py-6 backdrop-blur-2xl transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-2">
            <a href="#" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-300 to-blue-600 text-slate-950 shadow-lg shadow-sky-500/20">
                <Command size={21} strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-[15px] font-bold tracking-[0.2em]">
                  NEXUS
                </div>
                <div className="mt-0.5 text-[10px] tracking-[0.25em] text-slate-500">
                  GAMING PLATFORM
                </div>
              </div>
            </a>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-slate-400 lg:hidden"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mt-12 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
            Workspace
          </div>

          <nav className="mt-4 space-y-1.5">
            {navigation.map(({ label, icon: Icon }) => (
              <button
                key={label}
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
              </button>
            ))}
          </nav>

          <div className="mt-10 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
            Preferences
          </div>

          <button
            onClick={() => setActive("Settings")}
            className={`mt-4 flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm transition hover:bg-white/[0.04] hover:text-white ${
              active === "Settings" ? "text-sky-200" : "text-slate-400"
            }`}
          >
            <Settings2 size={18} />
            Settings
          </button>

          <button
            onClick={() => setActive("Help center")}
            className={`flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm transition hover:bg-white/[0.04] hover:text-white ${
              active === "Help center" ? "text-sky-200" : "text-slate-400"
            }`}
          >
            <CircleHelp size={18} />
            Help center
          </button>

          <div className="mt-auto">
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
          </div>
        </aside>

        {/* Main content */}
        <main className="min-w-0 flex-1">
          {/* Topbar */}
          <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-white/[0.06] bg-[#080C15]/75 px-5 backdrop-blur-xl sm:px-8 lg:px-10">
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
          </header>

          <div className="mx-auto max-w-[1500px] px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
            {/* Hero */}
            <section className="relative overflow-hidden rounded-3xl border border-sky-200/[0.12] bg-[#101B2B]">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-300/[0.17] via-blue-500/[0.07] to-transparent" />
              <div className="absolute -right-10 -top-32 h-80 w-80 rounded-full bg-sky-400/15 blur-[90px]" />
              <div className="absolute bottom-[-100px] right-[25%] h-48 w-48 rounded-full bg-blue-500/10 blur-[80px]" />

              <div className="relative grid items-center gap-8 p-6 sm:p-9 lg:grid-cols-[1fr_300px] lg:p-12">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-200">
                    <Sparkles size={13} />
                    The next generation
                  </div>

                  <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl xl:text-6xl">
                    Your game.
                    <br />
                    <span className="bg-gradient-to-r from-sky-200 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                      Your advantage.
                    </span>
                  </h1>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                    Welcome to your personal hub. Discover products, track
                    platform updates, and manage everything in one place.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <button
                      onClick={() => setActive("Products")}
                      className="group flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-sky-300 to-blue-500 px-5 py-3 text-sm font-semibold text-[#07111F] shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:shadow-sky-500/30"
                    >
                      Explore products
                      <ChevronRight
                        size={16}
                        className="transition group-hover:translate-x-0.5"
                      />
                    </button>
                    <button
                      onClick={() => setActive("System status")}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/[0.07]"
                    >
                      <Activity size={16} />
                      System status
                    </button>
                  </div>
                </div>

                <div className="relative hidden h-64 items-center justify-center lg:flex">
                  <div className="absolute h-60 w-60 rounded-full border border-sky-300/[0.08]" />
                  <div className="absolute h-44 w-44 rounded-full border border-sky-300/[0.12]" />
                  <div className="absolute h-32 w-32 rounded-full bg-sky-400/10 blur-2xl" />
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-[30px] border border-sky-200/20 bg-gradient-to-br from-sky-300/20 via-blue-500/10 to-slate-900/80 shadow-[0_0_80px_rgba(56,189,248,0.12)]">
                    <Gamepad2
                      size={52}
                      strokeWidth={1.2}
                      className="text-sky-200"
                    />
                  </div>
                  <div className="absolute right-3 top-10 rounded-xl border border-white/10 bg-[#101B2B]/90 p-3 shadow-xl backdrop-blur-xl">
                    <ShieldCheck size={21} className="text-emerald-300" />
                  </div>
                  <div className="absolute bottom-8 left-1 rounded-xl border border-white/10 bg-[#101B2B]/90 p-3 shadow-xl backdrop-blur-xl">
                    <Zap size={21} className="text-sky-300" />
                  </div>
                </div>
              </div>
            </section>

            {/* Section heading */}
            <div className="mb-5 mt-10 flex items-end justify-between gap-4">
              <div>
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-sky-300/80">
                  At a glance
                </div>
                <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                  Dashboard overview
                </h2>
              </div>
              <span className="hidden text-xs text-slate-500 sm:block">
                Your workspace at a glance
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-8">
              {[
                {
                  label: "Active products",
                  value: "03",
                  change: "+1 this month",
                  icon: Package,
                  positive: true,
                },
                {
                  label: "System uptime",
                  value: "99.9%",
                  change: "Last 30 days",
                  icon: Activity,
                  positive: true,
                },
                {
                  label: "Latest version",
                  value: "v2.4.0",
                  change: "Up to date",
                  icon: Cpu,
                  positive: true,
                },
                {
                  label: "Performance",
                  value: "Optimal",
                  change: "All systems normal",
                  icon: Zap,
                  positive: true,
                },
                {
                  label: "Performance",
                  value: "Optimal",
                  change: "All systems normal",
                  icon: Zap,
                  positive: true,
                },
                {
                  label: "Performance",
                  value: "Optimal",
                  change: "All systems normal",
                  icon: Zap,
                  positive: true,
                },
                {
                  label: "Performance",
                  value: "Optimal",
                  change: "All systems normal",
                  icon: Zap,
                  positive: true,
                },
                {
                  label: "Performance",
                  value: "Optimal",
                  change: "All systems normal",
                  icon: Zap,
                  positive: true,
                },
                {
                  label: "Performance",
                  value: "Optimal",
                  change: "All systems normal",
                  icon: Zap,
                  positive: true,
                },
                {
                  label: "Performance",
                  value: "Optimal",
                  change: "All systems normal",
                  icon: Zap,
                  positive: true,
                },
              ].map(({ label, value, change, icon: Icon, positive }) => (
                <div
                  key={label}
                  className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-300/20 hover:bg-sky-300/[0.035]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">{label}</span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-sky-300/10 bg-sky-300/[0.07] text-sky-300">
                      <Icon size={17} />
                    </div>
                  </div>
                  <div className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {value}
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">
                    {positive && (
                      <ArrowUpRight size={14} className="text-emerald-400" />
                    )}
                    {change}
                  </div>
                </div>
              ))}
            </div>

            {/* Products + Updates */}
            <div className="mt-10 grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
              <section>
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold">Featured products</h2>
                    <p className="mt-1 text-xs text-slate-500">
                      Explore what the platform has to offer
                    </p>
                  </div>
                  <button
                    onClick={() => setActive("Products")}
                    className="flex items-center gap-1.5 text-xs font-medium text-sky-300 transition hover:text-white"
                  >
                    View all <ExternalLink size={13} />
                  </button>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <article
                      key={product.name}
                      className="group relative flex min-h-[220px] flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0D1421] p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-300/25"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-70 transition group-hover:opacity-100`}
                      />
                      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-400/[0.07] blur-3xl transition group-hover:bg-sky-400/[0.14]" />

                      <div className="relative flex items-start justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-2xl text-sky-200">
                          {product.icon}
                        </div>
                        <span className="rounded-md border border-white/[0.08] bg-black/10 px-2 py-1 text-[9px] font-semibold tracking-[0.13em] text-slate-400">
                          {product.tag}
                        </span>
                      </div>

                      <div className="relative mt-auto pt-8">
                        <h3 className="text-base font-semibold">
                          {product.name}
                        </h3>
                        <p className="mt-1.5 text-xs leading-5 text-slate-400">
                          {product.description}
                        </p>
                        <button
                          onClick={() => setActive("Products")}
                          className="mt-4 flex items-center gap-1.5 text-xs font-medium text-sky-300 transition group-hover:gap-2.5 group-hover:text-sky-200"
                        >
                          Discover <ChevronRight size={14} />
                        </button>
                      </div>
                    </article>
                  ))}
                  {filteredProducts.length === 0 && (
                    <div className="col-span-full rounded-2xl border border-white/[0.07] p-8 text-center text-sm text-slate-500">
                      No products found.
                    </div>
                  )}
                </div>
              </section>

              {/* Activity */}
              <section className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold">Recent activity</h2>
                    <p className="mt-1 text-xs text-slate-500">
                      Latest platform events
                    </p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-slate-400">
                    <Activity size={17} />
                  </div>
                </div>

                <div className="mt-7">
                  {updates.map((item, index) => (
                    <div key={item.title} className="flex gap-3.5">
                      <div className="flex flex-col items-center">
                        <div
                          className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${item.color} shadow-[0_0_10px_rgba(125,211,252,0.18)]`}
                        />
                        {index !== updates.length - 1 && (
                          <div className="my-2 w-px flex-1 bg-white/[0.08]" />
                        )}
                      </div>
                      <div
                        className={`min-w-0 flex-1 ${
                          index !== updates.length - 1 ? "pb-7" : ""
                        }`}
                      >
                        <div className="text-sm font-medium">{item.title}</div>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {item.description}
                        </p>
                        <div className="mt-2 text-[10px] text-slate-600">
                          {item.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setActive("System status")}
                  className="mt-3 flex w-full items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 text-xs font-medium text-slate-300 transition hover:border-sky-300/20 hover:bg-sky-300/[0.04]"
                >
                  View system status
                  <ChevronRight size={15} className="text-sky-300" />
                </button>
              </section>
            </div>

            {/* Footer */}
            <footer className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] py-6 text-[11px] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <span className="font-semibold tracking-[0.16em] text-slate-400">
                  NEXUS
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
    </>
  );
}
