export const metadata = { title: "Contact — GridTech" };
export default function Page(){
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-extrabold">Contact</h1>
      <p className="opacity-90 mt-4 max-w-2xl">Tell us about your project and how we can help. We typically reply within one business day.</p>
      <form className="mt-8 max-w-xl space-y-4" name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact"/>
        <div className="grid md:grid-cols-2 gap-4">
          <div><label className="block text-sm opacity-80">Name</label><input required name="name" className="w-full mt-1 px-3 py-2 rounded-xl border"/></div>
          <div><label className="block text-sm opacity-80">Email</label><input required type="email" name="email" className="w-full mt-1 px-3 py-2 rounded-xl border"/></div>
        </div>
        <div><label className="block text-sm opacity-80">Message</label><textarea required name="message" rows={5} className="w-full mt-1 px-3 py-2 rounded-xl border"/></div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl">Send</button>
        <p className="text-sm opacity-70 mt-2">Or write to <a className="underline" href="mailto:hello@gridtech.in">hello@gridtech.in</a></p>
      </form>
    </div>
  )
}
