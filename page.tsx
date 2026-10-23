import { site } from "@/lib/site";
import { BeforeAfter, ContactForm, Faq, Nav } from "@/components/Interactive";

const links: [string, string][] = [["Services", "#services"], ["About", "#about"], ["Results", "#results"], ["Reviews", "#reviews"], ["FAQ", "#faq"], ["Contact", "#contact"]];

const services = [
  ["Dumpster rental", "Roll-off dumpsters delivered, placed exactly where you need them and picked up when you are done.", "Placed for you"],
  ["Junk removal and cleanouts", "House and garage cleanouts, furniture, appliances, electronics and everyday trash.", "Same-day possible"],
  ["Construction and yard debris", "Job-site debris, brush and yard waste cleared by a crew that cleans up after itself.", "Clean-up crew"],
  ["Hauling", "Vehicles, storage buildings and other large items taken off your property.", "Ask for a quote"],
  ["Hazardous and electronic waste", "Removal and disposal of hazardous waste and electronics. Call first so we can confirm your items.", "Call first"],
];

const reviews = [
  ["Wonderful experience from start to finish, including dumpster scheduling, placement, down to the clean up crew.", "Callie Robinson", "Google review"],
  ["Charlie was amazing! Contacted him on a Saturday and he came out same day. Got our storage building moved in no time!", "Morgan Chelette", "Google review"],
  ["I've used Charlie Cabler's service a number of times for quick and efficient trash removal. Not only is he fast but he does a thorough job.", "Ashton Anne", "Google review"],
];

const faqs: [string, string][] = [
  ["How fast can you come?", "Customers have reached out on a Saturday and had help the same day. Send a request or call and we will give you the earliest time."],
  ["Where do you place the dumpster?", "Exactly where you need it. Tell us where it should go when you book and the driver will put it there."],
  ["What can I put in it?", "Household junk, furniture, appliances, construction debris and yard waste. Hazardous waste and electronics are handled separately, so call before you load them."],
  ["Do you clean up?", "Yes. Our crew clears the job and leaves the area tidy."],
  ["How do I get a price?", "Send the form or call. Tell us what needs to go and where it is, and we will quote you before any work starts."],
];

export default function Home() {
  return (
    <>
      <Nav brand={site.short} links={links} phone={site.phone} phoneDisplay={site.phoneDisplay} />
      <main id="top">
        {/* Hero */}
        <section className="relative flex min-h-screen items-center overflow-hidden bg-ink pb-16 pt-28 text-paper">
          <div aria-hidden className="absolute -right-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-leaf/30 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="rise mb-5 inline-block rounded-full border border-hivis/50 px-4 py-1 text-sm text-hivis" style={{ "--i": 0 } as React.CSSProperties}>5.0 stars from 230 Google reviews</p>
              <h1 className="rise font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl" style={{ "--i": 1 } as React.CSSProperties}>
                Dumpsters delivered.<br />Junk gone for good.
              </h1>
              <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-paper/75" style={{ "--i": 2 } as React.CSSProperties}>
                Roll-off dumpster rental, junk removal, cleanouts and hauling. Quick replies, fair prices and a crew that cleans up after itself.
              </p>
              <div className="rise mt-9 flex flex-wrap gap-4" style={{ "--i": 3 } as React.CSSProperties}>
                <a href="#contact" className="rounded-full bg-hivis px-8 py-4 font-semibold text-ink transition hover:brightness-110">Get a free quote</a>
                <a href={`tel:${site.phone}`} className="rounded-full border border-paper/30 px-8 py-4 font-semibold transition hover:border-hivis hover:text-hivis">Call {site.phoneDisplay}</a>
              </div>
            </div>
            <aside className="rise rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur" style={{ "--i": 4 } as React.CSSProperties} aria-label="Most requested services">
              <h2 className="font-display text-xl font-semibold">Most requested</h2>
              <ul className="mt-4 divide-y divide-white/10">
                {[["Dumpster", "Dumpster rental", "Placed for you"], ["Junk", "Junk removal", "Same-day possible"], ["Cleanout", "House and garage", "Free quote"]].map(([b, s, n]) => (
                  <li key={b} className="flex items-center justify-between gap-3 py-3.5">
                    <span className="flex items-center gap-4"><b className="grid h-10 min-w-[5rem] place-items-center rounded-lg bg-hivis px-2 font-display text-sm text-ink">{b}</b>{s}</span>
                    <span className="hidden text-sm text-paper/60 sm:block">{n}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-4 block rounded-full bg-paper py-3 text-center font-semibold text-ink transition hover:bg-hivis">Request a quote</a>
            </aside>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-5 py-24">
          <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">Four ways we take the load off</h2>
          <div className="mt-12 border-t border-ink/15">
            {services.map(([t, d, p]) => (
              <div key={t} className="group grid gap-3 border-b border-ink/15 py-8 transition-colors hover:bg-mist/50 md:grid-cols-[1fr_1.2fr_auto] md:items-center md:gap-10 md:px-4">
                <h3 className="font-display text-2xl font-semibold">{t}</h3>
                <p className="leading-relaxed text-ink/70">{d}</p>
                <p className="font-semibold text-leaf">{p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-mist/60 py-24">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Work directly with Charlie</h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
                Customers keep saying the same things: fast replies, fair prices and a crew that cleans up. We run the business around exactly that.
              </p>
            </div>
            <ul className="space-y-5 self-center">
              {["Fast replies, often the same day", "Dumpsters placed exactly where you need them", "A clean-up crew that leaves the site tidy", "Rated 5.0 across 230 Google reviews"].map((x) => (
                <li key={x} className="flex gap-4 text-lg"><span aria-hidden className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-leaf text-sm text-paper">&#10003;</span>{x}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Gallery */}
        <section id="results" className="mx-auto max-w-6xl px-5 py-24">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">See the difference</h2>
          <p className="mt-4 text-ink/70">Drag the slider on each job to compare before and after.</p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <BeforeAfter id="garage" title="House and garage cleanout" note="" />
            <BeforeAfter id="yard" title="Yard debris removal" note="" />
            <BeforeAfter id="alley" title="Construction debris" note="" />
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-ink py-24 text-paper">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1.3fr_1fr]">
            <blockquote>
              <p className="font-display text-3xl font-semibold leading-snug sm:text-4xl">&ldquo;{reviews[0][0]}&rdquo;</p>
              <footer className="mt-6 text-paper/65"><b className="text-hivis">{reviews[0][1]}</b>, {reviews[0][2]}</footer>
            </blockquote>
            <div className="space-y-8">
              {reviews.slice(1).map(([q, n, r]) => (
                <blockquote key={n} className="border-l-2 border-hivis pl-6">
                  <p className="leading-relaxed text-paper/85">&ldquo;{q}&rdquo;</p>
                  <footer className="mt-3 text-sm text-paper/60"><b>{n}</b>, {r}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-[1fr_1.5fr]">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Questions we hear most</h2>
          <Faq items={faqs} />
        </section>

        {/* Contact */}
        <section id="contact" className="bg-mist/60 py-24">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Get your free quote</h2>
              <p className="mt-5 text-lg text-ink/75">Tell us what needs to go. We reply within one business day.</p>
              <dl className="mt-8 space-y-4">
                <div><dt className="text-sm text-ink/60">Call</dt><dd><a className="text-xl font-semibold" href={`tel:${site.phone}`}>{site.phoneDisplay}</a></dd></div>
                <div><dt className="text-sm text-ink/60">Email</dt><dd><a className="text-xl font-semibold" href={`mailto:${site.email}`}>{site.email}</a></dd></div>
                <div><dt className="text-sm text-ink/60">Google rating</dt><dd className="text-xl font-semibold">5.0 from 230 reviews</dd></div>
              </dl>
            </div>
            <ContactForm services={["Dumpster rental", "Junk removal and cleanouts", "Construction and yard debris", "Hauling", "Hazardous or electronic waste"]} />
          </div>
        </section>
      </main>

      <footer className="bg-ink py-12 text-paper/70">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-5 sm:flex-row">
          <div><p className="font-display text-xl font-bold text-paper">{site.name}</p><p className="mt-1 text-sm">Locally owned and operated.</p></div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">{links.map(([l, h]) => <li key={h}><a href={h} className="hover:text-hivis">{l}</a></li>)}</ul>
        </div>
        <p className="mx-auto mt-8 max-w-6xl px-5 text-xs">&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </footer>
    </>
  );
}
