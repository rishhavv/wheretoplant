import Link from "next/link";

const BOT_URL = "https://t.me/seedsagebot";

export function GridMark({ size = 22 }: { size?: number }) {
  // 3x3 tile grid; center cell lit = the predicted "you are here" tile
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" aria-hidden>
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => {
          const lit = r === 1 && c === 1;
          return (
            <rect
              key={`${r}-${c}`}
              x={1 + c * 7}
              y={1 + r * 7}
              width={6}
              height={6}
              rx={1.4}
              fill={lit ? "var(--hi)" : "transparent"}
              stroke={lit ? "var(--hi)" : "var(--line-2)"}
              strokeWidth={1}
            />
          );
        })
      )}
    </svg>
  );
}

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link href="/" className="flex items-center gap-2.5">
          <GridMark />
          <span className="font-mono text-sm tracking-tight text-fg">
            where<span className="text-hi">to</span>plant
          </span>
        </Link>

        <div className="hidden items-center gap-7 font-mono text-[0.8rem] text-muted md:flex">
          <Link href="/#how" className="transition-colors hover:text-fg">how it works</Link>
          <Link href="/#species" className="transition-colors hover:text-fg">species</Link>
          <Link href="/#focus" className="transition-colors hover:text-fg">focus</Link>
          <Link href="/#impact" className="transition-colors hover:text-fg">impact</Link>
          <Link href="/contact" className="transition-colors hover:text-fg">contact</Link>
        </div>

        <a href={BOT_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Try @seedsagebot
        </a>
      </nav>
    </header>
  );
}
