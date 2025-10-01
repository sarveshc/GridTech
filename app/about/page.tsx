export const metadata = { title: "About — GridTech" };
export default function Page(){
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-extrabold">About GridTech</h1>
      <p className="opacity-90 mt-4 max-w-3xl">GridTech is an India-based technology partner focused on dependable IT outcomes—combining solution architecture with hands-on engineering across web, mobile, cloud, and infrastructure.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[["Founded","2025"],["HQ","Noida, India"],["Engagement","Project or Retainer"]].map(([k,v]) => (
          <div key={k} className="rounded-2xl p-6 border"><div className="text-sm opacity-70">{k}</div><div className="text-xl font-bold mt-1">{v}</div></div>
        ))}
      </div>
    </div>
  )
}
