import Footer from "../components/footer";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[calc(100dvh)] w-full">
      <Sidebar />
      <div className="md:ml-64">
        <main className="flex flex-col min-h-[calc(100dvh)] w-full items-center mb-20">
          <Header />
          <div className="flex-grow flex flex-col justify-center items-center w-full px-4 md:px-8">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}