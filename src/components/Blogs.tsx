const BLOGS = [
  {
    title: "How to create a user on Okta using Postman?",
    where: "Medium",
    href: "https://blog.nonstopio.com/how-to-create-a-user-on-okta-using-postman-8d5a3ad5b70f",
    date: "Dec 23, 2025",
    description:
      "A practical, step by step guide to machine to machine OAuth and user creation in Okta, without hand waving.",
    image: "/blog-okta.jpg"
  },
  {
    title: "How to deploy production-grade bioinformatics pipelines using AWS HealthOmics?",
    where: "Medium",
    href: "https://medium.com/nonstopio/how-to-deploy-production-grade-bioinformatics-pipelines-using-aws-healthomics-b7899b19b34f",
    date: "Dec 23, 2025",
    description:
      "Lessons learned from containerizing and running bioinformatics workflows on AWS HealthOmics.",
    image: "/blog-nextflow.png"
  }
];

const Blogs = () => {
  return (
    <section id="blogs" className="py-20 bg-surface-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold">Blogs</h2>
          <p className="mt-3 text-text-secondary">
            Writing about data science, engineering, and building real systems.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {BLOGS.map((post) => (
            <a
              key={post.href}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl border border-surface-tertiary/20 bg-surface-secondary hover:bg-surface-secondary/70 transition-colors"
            >
              {/* Preview image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-medium leading-snug">
                    {post.title}
                  </h3>
                  <span className="text-xs text-text-secondary whitespace-nowrap">
                    {post.where} · {post.date}
                  </span>
                </div>

                <p className="mt-3 text-sm text-text-secondary">
                  {post.description}
                </p>

                <div className="mt-4 text-sm font-medium text-electric-blue">
                  Read →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
