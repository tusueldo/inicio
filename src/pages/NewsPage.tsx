import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/posts";
import { countries, CountryTaxData } from "../data/countries";
import { BookOpen, Clock, Filter, Tag, ArrowRight } from "lucide-react";

const categories = [...new Set(posts.map((p) => p.category))];

/** Returns a human-readable elapsed-time string, capped at +7 días */
function formatElapsed(publishTime: number, now: number): string {
  const diffMs = now - publishTime;
  if (diffMs < 0) return "ahora mismo";

  const diffMin = Math.floor(diffMs / 60_000);
  const MAX_MINS = 7 * 24 * 60; // 7 days

  if (diffMin >= MAX_MINS) return "+7 días";
  if (diffMin < 1) return "ahora mismo";
  if (diffMin === 1) return "hace 1 minuto";
  if (diffMin < 60) return `hace ${diffMin} minutos`;

  const diffHours = Math.floor(diffMin / 60);
  if (diffHours === 1) return "hace 1 hora";
  if (diffHours < 24) return `hace ${diffHours} horas`;

  const diffDays = Math.floor(diffHours / 24);
  if (diffDays === 1) return "hace 1 día";
  return `hace ${diffDays} días`;
}

export default function NewsPage() {
  const [countryFilter, setCountryFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [now, setNow] = useState(Date.now());

  // Update "now" every 30 seconds for real-time elapsed display
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 30_000);
    return () => clearInterval(timer);
  }, []);

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      if (countryFilter !== "all" && p.country !== countryFilter) return false;
      if (categoryFilter !== "all" && p.category !== categoryFilter) return false;
      return true;
    });
  }, [countryFilter, categoryFilter]);

  const getCountry = (code: string): CountryTaxData | undefined =>
    countries.find((c) => c.code === code);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Información económica
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Noticias{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              Económicas
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Novedades fiscales, legislativas y económicas de los países hispanohablantes
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-4">
        <div className="flex flex-wrap gap-3 items-center">
          <Filter className="w-4 h-4 text-slate-500" />
          <div className="relative">
            <select
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
              className="appearance-none pl-3 pr-8 py-2 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 cursor-pointer"
            >
              <option value="all">Todos los países</option>
              {countries.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flagSvg} {c.name}
                </option>
              ))}
            </select>
            <ChevronIcon />
          </div>

          <div className="relative">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="appearance-none pl-3 pr-8 py-2 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 cursor-pointer"
            >
              <option value="all">Todas las categorías</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <ChevronIcon />
          </div>

          {(countryFilter !== "all" || categoryFilter !== "all") && (
            <button
              onClick={() => {
                setCountryFilter("all");
                setCategoryFilter("all");
              }}
              className="px-3 py-2 text-sm text-teal-400 hover:text-teal-300 transition-colors"
            >
              Limpiar filtros
            </button>
          )}
        </div>
      </section>

      {/* Posts */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">
              No se encontraron artículos con los filtros seleccionados
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {filtered.map((post) => {
              const country = getCountry(post.country);
              const elapsed = formatElapsed(post.publishTime, now);
              return (
                <Link
                  key={post.id}
                  to={`/noticias/${post.id}`}
                  className="group bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 flex flex-col"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">{country?.flagSvg}</span>
                      <span className="text-xs text-slate-500">
                        {country?.name}
                      </span>
                      <span className="text-slate-700 mx-1">|</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-teal-500/10 text-teal-400 text-xs rounded-full">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-white font-semibold mb-2 group-hover:text-teal-300 transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-3 line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-800 rounded-full text-slate-400">
                          <Clock className="w-3 h-3 text-teal-500" />
                          {elapsed}
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          {post.readTime} min lectura
                        </span>
                      </div>
                      <span className="text-teal-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Leer más
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

function ChevronIcon() {
  return (
    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}
