import Link from 'next/link';
export default function Page(){
  return (
    <section className="container py-16 md:py-24">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Build. Ship. Scale. <span className="text-blue-600">With GridTech.</span></h1>
      <p className="mt-6 text-lg opacity-90 max-w-3xl">We design, build, and operate modern digital products—websites, mobile apps, and cloud platforms. Our team brings deep expertise in development, IT infrastructure management, and cloud computing.</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl">Get a Proposal</Link>
        <Link href="/services" className="px-6 py-3 rounded-xl border">Explore Services</Link>
      </div>
      <ul className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm opacity-90">
  <li>
    ✔ <strong>Web Applications</strong><br />
    <span>Scalable, responsive & SEO-friendly<br />Built with Next.js, React & .NET Core</span>
  </li>
  <li>
    ✔ <strong>Mobile Apps</strong><br />
    <span>Cross-platform iOS & Android<br />Flutter & React Native experts</span>
  </li>
  <li>
    ✔ <strong>Cloud Ops</strong><br />
    <span>AWS & Azure management<br />Automation, CI/CD & monitoring</span>
  </li>
  <li>
    ✔ <strong>IT Division Mgmt</strong><br />
    <span>Governance & compliance<br />Security, vendors & SLA tracking</span>
  </li>
</ul>

    </section>
  );
}
