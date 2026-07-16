import Image from "next/image";
import {
  ArrowUpRight, MapPin, TrendingUp, Languages, Zap, Sprout,
  Clock, Layers, Users, Target, ScatterChart,
} from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const BOT_URL = "https://t.me/seedsagebot";

/* deterministic tile field for the hero "prediction" panel
   h=high(green) m=medium(amber) l=low(red) o=off  H=you-are-here */
const TILES =
  "hhmhhlmh" +
  "hmhhlmhh" +
  "mhhHhmhl" +
  "hlmhhhmh" +
  "lmhhmhho" +
  "hhomhlhh";
const TILE_CLR: Record<string, string> = {
  h: "bg-hi/70", m: "bg-med/70", l: "bg-low/70", o: "bg-line/40",
};

function StatTile({ n, label }: { n: string; label: string }) {
  return (
    <div className="card card-hover p-5">
      <div className="font-mono text-3xl font-semibold text-fg md:text-4xl">{n}</div>
      <p className="mt-2 text-sm leading-relaxed text-muted">{label}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Nav />

      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden border-b border-line">
        {/* backdrop grid */}
        <div className="tilefield mask-radial pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
          style={{ background: "radial-gradient(circle, var(--hi), transparent 70%)" }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
          <div>
            <p className="eyebrow reveal d1">ML · Forest restoration · Himachal Pradesh</p>
            <h1 className="reveal d2 mt-5 font-display text-5xl leading-[1.02] tracking-tight text-fg md:text-6xl">
              Plant where trees
              <br />
              <span className="text-hi">actually survive.</span>
            </h1>
            <p className="reveal d3 mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Revolutionizing forest restoration through machine-learning powered
              plantation site selection — now with native-species recommendations,
              in Hindi and English.
            </p>
            <div className="reveal d4 mt-8 flex flex-wrap items-center gap-3">
              <a href={BOT_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Try @seedsagebot <ArrowUpRight size={16} />
              </a>
              <a href="#how" className="btn btn-ghost">How it works</a>
            </div>
            <p className="reveal d5 mt-6 font-mono text-xs text-faint">
              A Telegram bot · share a location · get a prediction in seconds
            </p>
          </div>

          {/* prediction instrument */}
          <div className="reveal d5">
            <div className="scan card relative overflow-hidden p-5">
              <div className="flex items-center justify-between font-mono text-[0.7rem] text-faint">
                <span>PLANTATION VIABILITY</span>
                <span>32.10°N 76.53°E</span>
              </div>
              <div className="relative mt-4 grid grid-cols-8 gap-1.5">
                {TILES.split("").map((t, i) => {
                  const here = t === "H";
                  return (
                    <div
                      key={i}
                      className={`relative aspect-square rounded-[3px] ${here ? "bg-data" : TILE_CLR[t]}`}
                    >
                      {here && <span className="ping absolute inset-0 rounded-[3px]" aria-hidden />}
                    </div>
                  );
                })}
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                <div>
                  <div className="font-mono text-2xl font-semibold text-fg">82%</div>
                  <div className="font-mono text-[0.7rem] text-faint">survival likelihood</div>
                </div>
                <div className="flex flex-wrap justify-end gap-1.5">
                  <span className="chip chip-hi">Shisham · High</span>
                  <span className="chip chip-hi">Khair · High</span>
                  <span className="chip chip-med">Siras · Med</span>
                </div>
              </div>
            </div>
            <p className="mt-3 text-center font-mono text-[0.7rem] text-faint">
              Illustrative output · one ~7-hectare tile
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- PROBLEM ---------------- */}
      <section id="problem" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow" style={{ color: "var(--low)" }}>The challenge</p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-fg md:text-5xl">
                Billions wasted on ineffective tree planting.
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
                Most tree planting initiatives fail by choosing unsuitable sites,
                squandering resources and hindering successful restoration.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
              <StatTile n="60%" label="of annual restoration budget is wasted on doomed sites" />
              <StatTile n="80%" label="of trees die in poorly selected locations" />
              <StatTile n="$800M+" label="spent annually in India on forest restoration and conservation" />
            </div>
          </div>

          <div className="card mt-14 p-8">
            <h3 className="font-mono text-sm uppercase tracking-widest text-data">Why reforestation efforts fail</h3>
            <div className="mt-7 grid gap-x-10 gap-y-6 md:grid-cols-2">
              {[
                ["Inadequate site analysis", "Planting without considering crucial data like soil health, climate patterns, and land history."],
                ["Mismatched species", "Selecting tree species that are not suited to the local micro-environment."],
                ["Ignoring social factors", "Overlooking land tenure issues and community needs, which undermines long-term success."],
                ["Wasted resources", "Pouring funds and effort into locations doomed from the start, eroding trust and slowing progress."],
              ].map(([t, d]) => (
                <div key={t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-low" />
                  <p className="text-[0.95rem] leading-relaxed text-muted">
                    <strong className="font-semibold text-fg">{t}:</strong> {d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- HOW IT WORKS ---------------- */}
      <section id="how" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow">The pipeline</p>
          <h2 className="mt-4 font-display text-4xl text-fg md:text-5xl">ML meets conservation.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            WhereToPlant (<span className="font-mono text-fg">@seedsagebot</span>) is a
            data-driven Telegram bot that transforms how we approach forest restoration.
          </p>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
            {[
              ["01", "Share location", "Open Telegram, find @seedsagebot, and share your geographic coordinates."],
              ["02", "Model analysis", "The machine-learning model processes environmental data, climate patterns, soil and elevation."],
              ["03", "Visual report", "A color-coded viability map with survival predictions and star ratings."],
              ["04", "What to plant", "Native-species recommendations for the site, graded by confidence — then decide."],
            ].map(([n, t, d]) => (
              <div key={n} className="bg-surface p-6">
                <div className="font-mono text-sm text-hi">{n}</div>
                <h3 className="mt-4 text-lg font-semibold text-fg">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
              </div>
            ))}
          </div>

          {/* feature strip */}
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              [MapPin, "Location intelligence", "Analyzes soil composition, climate patterns, elevation, and historical vegetation data."],
              [TrendingUp, "Success prediction", "Precise percentage-based survival predictions and star ratings."],
              [Languages, "Bilingual access", "Operates in both Hindi and English for diverse communities across India."],
              [Zap, "Instant results", "Comprehensive analysis within seconds via Telegram's familiar interface."],
            ].map(([Icon, t, d]) => {
              const I = Icon as typeof MapPin;
              return (
                <div key={t as string} className="card card-hover p-5">
                  <I size={18} className="text-hi" />
                  <h3 className="mt-3 text-[0.95rem] font-semibold text-fg">{t as string}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{d as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- SPECIES SELECTION (now live) ---------------- */}
      <section id="species" className="relative overflow-hidden border-b border-line bg-bg2">
        <div className="tilefield-sm mask-b pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 md:grid-cols-2">
          <div>
            <span className="chip chip-hi">Now live</span>
            <h2 className="mt-5 font-display text-4xl leading-tight text-fg md:text-5xl">
              What to plant, not just where.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Share a location and the bot now recommends the native tree species suited
              to that specific site — each graded <span className="text-hi">High</span>,{" "}
              <span className="text-med">Medium</span>, or <span className="text-low">Low</span>{" "}
              confidence, in Hindi and English.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Native species matched to the tile's climate, soil and terrain",
                "Confidence-graded — the bot only speaks when the signal is there",
                "Risk-framed guidance to consider, never a command",
                "Bilingual output for field officers and communities",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[0.95rem] text-muted">
                  <Sprout size={17} className="mt-0.5 flex-shrink-0 text-hi" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* example species card — mirrors the bot's message */}
          <div className="card overflow-hidden">
            <div className="flex items-center justify-between border-b border-line px-5 py-3 font-mono text-[0.72rem] text-faint">
              <span className="flex items-center gap-2"><MapPin size={13} className="text-data" /> shared location</span>
              <span>survival 82% · Fair</span>
            </div>
            <div className="p-5">
              <p className="font-mono text-[0.72rem] uppercase tracking-widest text-data">Species suited to this area</p>
              <ul className="mt-4 space-y-2.5">
                {[
                  ["Shisham", "hi", "High"],
                  ["Khair", "hi", "High"],
                  ["Siras", "med", "Medium"],
                  ["Bargad", "med", "Medium"],
                  ["Mango", "low", "Low"],
                ].map(([name, band, label], i) => (
                  <li key={name} className="flex items-center justify-between">
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-faint">{i + 1}</span>
                      <span className="text-fg">{name}</span>
                    </span>
                    <span className={`chip chip-${band}`}>{label}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-faint">
                Guidance to consider, not a directive — local conditions matter.
                <span className="mt-1 block">यह केवल सुझाव है, आदेश नहीं।</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FOCUS: HIMACHAL PRADESH ---------------- */}
      <section id="focus" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow">Current focus</p>
          <h2 className="mt-4 font-display text-4xl text-fg md:text-5xl">Himachal Pradesh.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            The bot currently specializes in Himachal Pradesh, a state of critical
            ecological importance in the Indian Himalayas.
          </p>
          <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
            <div className="card overflow-hidden p-3">
              <Image
                src="/Himachal_Pradesh_Map.png"
                alt="Map of Himachal Pradesh"
                width={620}
                height={452}
                className="h-auto w-full rounded-lg opacity-90"
                priority
              />
            </div>
            <div className="space-y-4">
              {[
                [Layers, "Altitude variations", "From 350m to 7,000m elevation, requiring species-specific planning."],
                [ScatterChart, "Climate diversity", "Subtropical to alpine conditions within the same state."],
                [MapPin, "Soil complexity", "Varied geological formations affecting plantation success."],
              ].map(([Icon, t, d]) => {
                const I = Icon as typeof MapPin;
                return (
                  <div key={t as string} className="card card-hover flex gap-4 p-5">
                    <I size={20} className="mt-0.5 flex-shrink-0 text-data" />
                    <div>
                      <h3 className="font-semibold text-fg">{t as string}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{d as string}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- IMPACT ---------------- */}
      <section id="impact" className="border-b border-line bg-bg2">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow">Impact &amp; vision</p>
          <h2 className="mt-4 font-display text-4xl text-fg md:text-5xl">Fewer wasted saplings.</h2>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [TrendingUp, "Resource optimization", "Directs limited funds, labor, and saplings to locations with the highest success probability."],
              [Zap, "Waste reduction", "Prevents costly mistakes by identifying unsuitable sites — a potential $63M–$100M saved in HP over 10 years."],
              [Users, "Community empowerment", "Gives local citizens and organizations scientific tools for conservation decision-making."],
              [Target, "Data-driven policy", "Evidence-based insights for government and NGO restoration strategies."],
            ].map(([Icon, t, d]) => {
              const I = Icon as typeof MapPin;
              return (
                <div key={t as string} className="card card-hover p-6">
                  <I size={18} className="text-hi" />
                  <h3 className="mt-4 font-semibold text-fg">{t as string}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{d as string}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {[
              ["350M+ ha", "of land targeted for restoration globally — a massive opportunity for impact."],
              ["$10B+", "in potential annual global waste if restoration is poorly targeted."],
              ["Global goals", "Aligns with the SDGs, Bonn Challenge, and national commitments (NDCs)."],
            ].map(([n, d]) => (
              <div key={n} className="bg-surface p-7">
                <div className="font-mono text-2xl font-semibold text-data md:text-3xl">{n}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- ROADMAP ---------------- */}
      <section id="roadmap" className="border-b border-line">
        <div className="mx-auto max-w-4xl px-5 py-20">
          <p className="eyebrow">Roadmap</p>
          <h2 className="mt-4 font-display text-4xl text-fg md:text-5xl">What&apos;s next.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Site selection and species recommendation are live. The rest of a
            comprehensive restoration ecosystem is next.
          </p>
          <div className="mt-12 space-y-3">
            <div className="card flex items-center gap-4 border-hi/40 p-5" style={{ borderColor: "color-mix(in oklab, var(--hi) 40%, var(--line))" }}>
              <Sprout size={20} className="flex-shrink-0 text-hi" />
              <div className="flex-1">
                <h3 className="font-semibold text-fg">Species recommendation</h3>
                <p className="mt-1 text-sm text-muted">&ldquo;What to plant&rdquo; for a location.</p>
              </div>
              <span className="chip chip-hi">Shipped</span>
            </div>
            {[
              [Clock, "Optimal timing", "Predictions for “when to plant” for maximum success."],
              [Target, "State expansion & integration", "Additional Indian states and integration with government restoration programs."],
              [Users, "Community & advanced analytics", "Community monitoring, feedback systems, and enhanced data visualization."],
            ].map(([Icon, t, d]) => {
              const I = Icon as typeof MapPin;
              return (
                <div key={t as string} className="card flex items-center gap-4 p-5">
                  <I size={20} className="flex-shrink-0 text-faint" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-fg">{t as string}</h3>
                    <p className="mt-1 text-sm text-muted">{d as string}</p>
                  </div>
                  <span className="font-mono text-[0.7rem] uppercase tracking-widest text-faint">Planned</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- DEMO ---------------- */}
      <section id="demo" className="border-b border-line bg-bg2">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center">
          <p className="eyebrow">Demo</p>
          <h2 className="mt-4 font-display text-4xl text-fg md:text-5xl">See it in action.</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
            A short walkthrough of how WhereToPlant helps you make smarter,
            data-driven restoration decisions.
          </p>
          <div className="mx-auto mt-10 aspect-[9/16] w-full max-w-xs overflow-hidden rounded-2xl border border-line">
            <iframe
              src="https://www.youtube.com/embed/ld3vUOwQRJ4"
              title="WhereToPlant demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="relative overflow-hidden">
        <div className="tilefield mask-radial pointer-events-none absolute inset-0 opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center">
          <h2 className="font-display text-4xl leading-tight text-fg md:text-5xl">
            Ready to plant with confidence?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Whether you&apos;re a conservationist, researcher, or someone who cares about
            our environment — WhereToPlant is your gateway to smarter restoration decisions.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href={BOT_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Try @seedsagebot now <ArrowUpRight size={16} />
            </a>
            <a href="#how" className="btn btn-ghost">Learn more</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
