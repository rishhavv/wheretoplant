import { Mail, ArrowUpRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Nav />
      <main className="relative overflow-hidden">
        <div className="tilefield mask-radial pointer-events-none absolute inset-0 opacity-50" aria-hidden />
        <section className="relative mx-auto max-w-3xl px-5 py-24">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 font-display text-5xl text-fg md:text-6xl">Get in touch.</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Have questions or want to collaborate? Reach out.
          </p>

          <div className="card card-hover mt-12 max-w-md p-8">
            <h3 className="font-display text-2xl text-fg">Rishav Katoch</h3>
            <p className="mt-1 font-mono text-sm text-hi">Co-founder</p>
            <div className="mt-6 space-y-3 font-mono text-sm">
              <a
                href="mailto:rishav.katoch17300@gmail.com"
                className="flex items-center gap-3 text-muted transition-colors hover:text-fg"
              >
                <Mail size={15} className="flex-shrink-0 text-data" />
                <span className="break-all">rishav.katoch17300@gmail.com</span>
              </a>
              <a
                href="https://www.rishavkatoch.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted transition-colors hover:text-fg"
              >
                <ArrowUpRight size={15} className="flex-shrink-0 text-data" />
                <span>rishavkatoch.me</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
