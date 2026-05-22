import Image from "next/image";
import Reveal from "./Reveal";

const LOGOS = [
  {
    src: "/alverno_logo-blues-cleaners-client.png",
    alt: "Alverno",
  },
  {
    src: "/Billion-Auto-Blues-Cleaners-clients.png",
    alt: "Billion Auto",
  },
  {
    src: "/happy-joes-logo-png-transparent.png",
    alt: "Happy Joe's",
  },
  {
    src: "/Jackson-Hewitt-Tax-Center.png",
    alt: "Jackson Hewitt Tax Center",
  },
  {
    src: "/Panana-Express-logo.png",
    alt: "Panda Express",
  },
  {
    src: "/Uni_of_IOWA-hospitals-and-clinics-logo.svg_.png",
    alt: "University of Iowa Hospitals & Clinics",
  },
];

export default function TrustedBy() {
  const doubled = [...LOGOS, ...LOGOS];

  return (
    <section className="relative py-20 sm:py-24 bg-white border-y border-navy-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-navy-700 uppercase">
              Trusted Across the Quad Cities
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-ink text-balance">
              Property managers, facilities and{" "}
              <span className="text-navy-800">
                local businesses depend on us.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-muted leading-relaxed">
              Proudly partnering with leaders in Davenport, Bettendorf, Rock
              Island, Moline and surrounding areas.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={150}>
        <div className="relative mt-14 overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"
          />

          <div className="flex w-max marquee-track">
            {doubled.map((logo, i) => (
              <div
                key={`${logo.alt}-${i}`}
                className="shrink-0 mx-6 sm:mx-10 flex items-center justify-center h-24 w-44 sm:w-52 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-500"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={96}
                  className="max-h-20 w-auto object-contain"
                  sizes="200px"
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
