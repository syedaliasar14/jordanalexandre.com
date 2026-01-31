import Header from "../components/header";
import Footer from "../components/footer";

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center">
      <Header />
      <div className="flex-1 flex items-center justify-center p-4">
        <form className="w-full max-w-5xl space-y-4">
          <h1 className="text-5xl text-primary font-thin mb-12">Contact</h1>

          <input type="text" id="name" name="name" required placeholder="Name"
            className="w-full px-3 py-2 border-b-2 border-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input type="email" id="email" name="email" required placeholder="Email"
            className="w-full px-3 py-2 border-b-2 border-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <textarea id="message" name="message" rows={4} required placeholder="Message"
            className="w-full px-3 py-2 border-b-2 border-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-vertical"
          />

          <button type="submit" className="bg-foreground hover:bg-primary text-white py-2 px-12 font-lores text-xl ml-auto block">
            send
          </button>
        </form>
      </div>
      <Footer />
    </main>
  );
}