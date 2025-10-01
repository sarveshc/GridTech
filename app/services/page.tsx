export const metadata = { title: "Services — GridTech" };
export default function Page(){
  const items = [
    {t:"IT Division Management",b:["Policies & audits","Vendor & SLA management","Monitoring, incident response, DR"]},
    {t:"IT Consulting & Architecture",b:["Cloud strategy (AWS/Azure)","Solution & data architecture","Security & performance reviews"]},
    {t:"Web Development",b:["Next.js, .NET, Node.js","CMS, SEO, analytics","Static export & CDN delivery"]},
    {t:"Mobile App Development",b:["Flutter / React Native","Offline-first, push notifications","Store launch support"]},
    {t:"Cloud & DevOps",b:["CI/CD (GitHub Actions)","Containers & IaC","Observability"]},
  ];
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-extrabold">Services</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {items.map(x => (
          <div key={x.t} className="rounded-2xl p-6 border">
            <h3 className="font-bold text-xl">{x.t}</h3>
            <ul className="mt-3 list-disc ml-6">{x.b.map(i => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </div>
  )
}
