import Link from "next/link";
import { GridMark } from "./Nav";

const BOT_URL = "https://t.me/seedsagebot";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg2">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <GridMark />
              <span className="font-mono text-sm text-fg">
                where<span className="text-hi">to</span>plant
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Machine-learning plantation site &amp; species selection for forest
              restoration in Himachal Pradesh.
            </p>
          </div>

          <div className="flex gap-14">
            <div>
              <p className="eyebrow mb-3">Explore</p>
              <ul className="space-y-2 font-mono text-[0.82rem] text-muted">
                <li><Link href="/#how" className="hover:text-fg">How it works</Link></li>
                <li><Link href="/#species" className="hover:text-fg">Species selection</Link></li>
                <li><Link href="/#focus" className="hover:text-fg">Himachal Pradesh</Link></li>
                <li><Link href="/#roadmap" className="hover:text-fg">Roadmap</Link></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-3">Connect</p>
              <ul className="space-y-2 font-mono text-[0.82rem] text-muted">
                <li>
                  <a href={BOT_URL} target="_blank" rel="noopener noreferrer" className="hover:text-hi">
                    @seedsagebot ↗
                  </a>
                </li>
                <li><Link href="/contact" className="hover:text-fg">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 font-mono text-xs text-faint md:flex-row md:items-center">
          <span>© 2025 wheretoplant. All rights reserved.</span>
          <span>Revolutionizing forest restoration through ML-powered site selection.</span>
        </div>
      </div>
    </footer>
  );
}
