// src/components/Gallery.tsx

type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
  href?: string; // optional: link to LinkedIn post or album
};

const GALLERY: GalleryItem[] = [
  {
    src: "/react-meetup.jpg",
    alt: "React.js meetup snapshot",
    caption: "Meetup and community events"
  },
  {
    src: "/nextflow.jpg",
    alt: "Lightning talk on Nextflow",
    caption: "Talks and sessions"
  },
  {
    src: "/backend-meetup.jpg",
    alt: "Backend meetup snapshot",
    caption: "Meetup and community events"
  },
  {
    src: "/kafka-meetup.jpg",
    alt: "Apache Kafka meetup snapshot",
    caption: "Meetup and community events"
  },
  {
    src: "/techathon.jpg",
    alt: "Hackathon",
    caption: "Hackathons and Competitions"
  },
  {
    src: "/lt-dataengg.png",
    alt: "Data Engineering 101",
    caption: "Talks and sessions"
  },
  {
    src: "/group-discussion.jpeg",
    alt: "Group discussion session",
    caption: "Collaborative learning"
  },
  {
    src: "/group-study.jpeg",
    alt: "Group study session",
    caption: "Collaborative learning"
  },
  {
    src: "/adapt.jpg",
    alt: "ADAPT Project Presentation",
    caption: "Project"
  },
  {
    src: "/graphlm.jpeg",
    alt: "GraphLM",
    caption: "GraphLM Project Presentation at AI Summit 2025",
  },
  {
    src: "/iitkgp.jpeg",
    alt: "IIT Kharagpur Hackathon",
    caption: "Intel AI Hackathon at IIT Kharagpur, INDICON 2024",
  },
  {
    src: "/isbnm.jpeg",
    alt: "ISB&M Pune 2024",
    caption: "B.L.I.T.Z 2024 at ISB&M Pune, Case Study Competition",
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-surface-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold">Gallery</h2>
          <p className="mt-3 text-text-secondary">
            A few moments from meetups, events, and project demos.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {GALLERY.map((item) => {
            const Card = (
              <div className="group overflow-hidden rounded-2xl border border-surface-tertiary/20 bg-surface-secondary">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {item.caption ? (
                  <div className="px-4 py-3">
                    <p className="text-sm text-text-secondary">{item.caption}</p>
                  </div>
                ) : null}
              </div>
            );

            if (item.href) {
              return (
                <a
                  key={item.src}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {Card}
                </a>
              );
            }

            return <div key={item.src}>{Card}</div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
