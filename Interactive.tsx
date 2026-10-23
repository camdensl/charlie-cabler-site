"use client";
import { useState } from "react";

export function Nav({ brand, links, phone, phoneDisplay }: { brand: string; links: [string, string][]; phone: string; phoneDisplay: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-md">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-3 font-display text-xl font-bold text-paper"><img src="/logo-mark.svg" alt="" width={36} height={36} />{brand}</a>
        <ul className="hidden items-center gap-8 text-sm text-paper/80 md:flex">
          {links.map(([label, href]) => (
            <li key={href}><a href={href} className="transition hover:text-hivis">{label}</a></li>
          ))}
        </ul>
        <a href={`tel:${phone}`} className="hidden rounded-full bg-hivis px-5 py-2 text-sm font-semibold text-ink transition hover:brightness-110 md:block">
          Call {phoneDisplay}
        </a>
        <button aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)} className="p-2 text-paper md:hidden">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>
      {open && (
        <ul className="space-y-1 border-t border-white/10 px-5 py-4 text-paper md:hidden">
          {links.map(([label, href]) => (
            <li key={href}><a href={href} onClick={() => setOpen(false)} className="block py-2 text-lg">{label}</a></li>
          ))}
          <li><a href={`tel:${phone}`} className="mt-2 block rounded-full bg-hivis py-3 text-center font-semibold text-ink">Call {phoneDisplay}</a></li>
        </ul>
      )}
    </header>
  );
}

export function BeforeAfter({ id, title, note }: { id: string; title: string; note: string }) {
  const [pos, setPos] = useState(50);
  // Drop /public/gallery/<id>-before.jpg and <id>-after.jpg to replace the placeholder scenes.
  const before = `url(/gallery/${id}-before.jpg), linear-gradient(135deg,#5b4b3a,#2a2622 60%,#6d5f4d)`;
  const after = `url(/gallery/${id}-after.jpg), linear-gradient(135deg,#dfeee5,#b9d6c5 60%,#eef4ef)`;
  return (
    <figure>
      <div className="relative aspect-[4/3] select-none overflow-hidden rounded-xl bg-mist">
        <div className="absolute inset-0 bg-cover bg-center" style={{ background: after, backgroundSize: "cover" }} />
        <div className="absolute inset-0" style={{ background: before, backgroundSize: "cover", clipPath: `inset(0 ${100 - pos}% 0 0)` }} />
        <span className="absolute left-3 top-3 rounded bg-ink/80 px-2 py-1 text-xs font-medium text-paper">Before</span>
        <span className="absolute right-3 top-3 rounded bg-hivis px-2 py-1 text-xs font-semibold text-ink">After</span>
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 -ml-4 -mt-4 grid h-8 w-8 place-items-center rounded-full bg-white text-xs text-ink shadow-lg">&#8596;</div>
        </div>
        <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(+e.target.value)}
          aria-label={`Compare before and after: ${title}`} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
      </div>
      <figcaption className="mt-3"><p className="font-display text-lg font-semibold">{title}</p><p className="text-sm text-ink/65">{note}</p></figcaption>
    </figure>
  );
}

export function Faq({ items }: { items: [string, string][] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-ink/15 border-y border-ink/15">
      {items.map(([q, a], i) => (
        <div key={q}>
          <h3>
            <button aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-5 text-left font-display text-lg font-semibold">
              {q}
              <span aria-hidden className={`text-2xl transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>+</span>
            </button>
          </h3>
          <div id={`faq-${i}`} role="region" className={`grid transition-[grid-template-rows] duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
            <p className="overflow-hidden pr-10 leading-relaxed text-ink/75"><span className="block pb-5">{a}</span></p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ContactForm({ services }: { services: string[] }) {
  const [state, setState] = useState<"idle" | "sending" | "done" | string>("idle");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json();
      setState(res.ok ? "done" : json.error ?? "Something went wrong. Please call us instead.");
    } catch { setState("We could not send that. Check your connection or call us."); }
  }
  if (state === "done")
    return <p role="status" className="rounded-xl bg-leaf p-8 text-lg text-paper">Thanks, we have your request. We will be in touch shortly with your quote.</p>;
  const field = "w-full rounded-lg border border-ink/20 bg-white px-4 py-3 outline-none transition focus:border-leaf focus:ring-2 focus:ring-leaf/30";
  return (
    <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2" noValidate>
      <label className="text-sm font-medium">Name<input name="name" required autoComplete="name" className={`${field} mt-1`} /></label>
      <label className="text-sm font-medium">Email<input name="email" type="email" required autoComplete="email" className={`${field} mt-1`} /></label>
      <label className="text-sm font-medium">Phone (optional)<input name="phone" type="tel" autoComplete="tel" className={`${field} mt-1`} /></label>
      <label className="text-sm font-medium">What do you need?
        <select name="service" className={`${field} mt-1`}>{services.map((s) => <option key={s}>{s}</option>)}</select>
      </label>
      <label className="text-sm font-medium sm:col-span-2">Tell us what needs to go
        <textarea name="message" required rows={4} className={`${field} mt-1`} placeholder="Items, rough volume and where they are" />
      </label>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <div className="sm:col-span-2">
        <button disabled={state === "sending"} className="rounded-full bg-ink px-8 py-3.5 font-semibold text-paper transition hover:bg-leaf disabled:opacity-60">
          {state === "sending" ? "Sending..." : "Get my free quote"}
        </button>
        {state !== "idle" && state !== "sending" && <p role="alert" className="mt-3 text-sm text-red-700">{state}</p>}
      </div>
    </form>
  );
}
