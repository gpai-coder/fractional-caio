import {
  closing,
  contact,
  credibility,
  engagement,
  faq,
  footer,
  fractionalCaio,
  hero,
  services,
  servicesIntro,
  site,
  whoItsFor,
} from "@/content";
import { BookCallLink } from "@/components/BookCallLink";

function Section({
  id,
  title,
  lead,
  children,
}: {
  id?: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-t border-border/60 py-16 sm:py-20"
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <h2
          id={id ? `${id}-heading` : undefined}
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {title}
        </h2>
        {lead ? (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {lead}
          </p>
        ) : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function SitePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
          <a
            href="#top"
            className="text-sm font-semibold tracking-tight sm:text-base"
          >
            {site.name}
            <span className="hidden text-muted-foreground sm:inline">
              {" "}
              · {site.roleLabel}
            </span>
          </a>
          <BookCallLink variant="primary" className="!px-4 !py-2 text-sm" />
        </div>
      </header>

      <main id="top">
        <section
          className="relative overflow-hidden py-20 sm:py-28"
          aria-labelledby="hero-heading"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,var(--accent-muted),transparent)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-5xl px-5 sm:px-6">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              {hero.eyebrow}
            </p>
            <h1
              id="hero-heading"
              className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl"
            >
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {hero.subhead}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <BookCallLink />
              <a
                href={site.linkedIn}
                className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <Section id="services" title={servicesIntro.title} lead={servicesIntro.lead}>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="sr-only">
                Advisory services for commerce and customer engagement teams
              </caption>
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-5">
                    Service
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-5">
                    Good for
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold sm:px-5">
                    What I can help with
                  </th>
                </tr>
              </thead>
              <tbody>
                {services.map((row) => (
                  <tr
                    key={row.service}
                    className="border-b border-border/80 align-top last:border-b-0"
                  >
                    <th
                      scope="row"
                      className="px-4 py-4 font-semibold text-foreground sm:px-5"
                    >
                      {row.service}
                    </th>
                    <td className="px-4 py-4 text-muted-foreground sm:px-5">
                      {row.goodFor}
                    </td>
                    <td className="px-4 py-4 sm:px-5">
                      <ul className="list-disc space-y-1 pl-4 text-muted-foreground">
                        {row.helpWith.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section
          id="fractional-caio"
          title={fractionalCaio.title}
        >
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {fractionalCaio.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="who" title={whoItsFor.title} lead={whoItsFor.lead}>
          <ul className="grid gap-6 sm:grid-cols-2">
            {whoItsFor.audiences.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="engage" title={engagement.title} lead={engagement.lead}>
          <div className="grid gap-6 lg:grid-cols-3">
            {engagement.models.map((model) => (
              <article
                key={model.title}
                className="flex flex-col rounded-xl border border-border bg-card p-6"
              >
                <h3 className="text-lg font-semibold">{model.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                  {model.summary}
                </p>
                <ul className="mt-4 flex-1 list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                  {model.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-xl border border-dashed border-border bg-muted/30 p-8">
            <h3 className="text-xl font-semibold">{engagement.customized.title}</h3>
            <p className="mt-2 text-muted-foreground">{engagement.customized.lead}</p>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              {engagement.customized.dimensions.map((d) => (
                <div key={d.title}>
                  <dt className="font-semibold text-foreground">{d.title}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground sm:text-base">
                    {d.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        <Section id="credibility" title={credibility.title} lead={credibility.lead}>
          <dl className="grid gap-4 sm:grid-cols-2">
            {credibility.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-lg border border-border bg-card px-5 py-4"
              >
                <dt className="text-lg font-semibold text-accent">{h.label}</dt>
                <dd className="mt-1 text-sm text-muted-foreground sm:text-base">
                  {h.detail}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {credibility.experienceNote}
          </p>
          <h3 className="mt-10 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Background
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground sm:text-base">
            {credibility.roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </Section>

        <Section id="faq" title="FAQ">
          <div className="divide-y divide-border rounded-xl border border-border">
            {faq.map((item) => (
              <details key={item.question} className="group px-5 py-4 sm:px-6">
                <summary className="cursor-pointer list-none font-medium text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <span
                      className="text-muted-foreground transition group-open:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Section>

        <section
          className="border-t border-border/60 bg-muted/40 py-16 sm:py-20"
          aria-labelledby="closing-heading"
        >
          <div className="mx-auto max-w-5xl px-5 text-center sm:px-6">
            <h2
              id="closing-heading"
              className="text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              {closing.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground sm:text-lg">
              {closing.lead}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <BookCallLink variant="primary">
                {contact.closingCtaLabel}
              </BookCallLink>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {site.email}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>{footer.tagline}</p>
          <p>{footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
