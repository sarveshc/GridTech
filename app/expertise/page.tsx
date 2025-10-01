export const metadata = { title: "Expertise — GridTech" };
export default function Page(){
  const groups = [
    {k:"Web", v:["Next.js","React","ASP.NET Core","Node.js","REST/GraphQL"]},
    {k:"Mobile", v:["Flutter","React Native","Android (Kotlin)","iOS (Swift)"]},
    {k:"Cloud", v:["Azure","AWS","CDN/Edge","Serverless","Containers"]},
    {k:"Data/Infra", v:["SQL Server","PostgreSQL","MongoDB","Redis","RabbitMQ"]},
    {k:"Ops", v:["GitHub Actions","Docker","Kubernetes","Terraform","Monitoring"]},
  ];
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-extrabold">Expertise</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {groups.map(g => (
          <div key={g.k} className="rounded-2xl p-6 border">
            <h3 className="font-semibold">{g.k}</h3>
            <div className="mt-2 flex flex-wrap gap-2">{g.v.map(i => <span key={i} className="text-sm px-2 py-1 rounded-lg border">{i}</span>)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
