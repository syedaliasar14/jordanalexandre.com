import Header from "../../components/header";
import Footer from "../../components/footer";

export default function PortfolioItemPage() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center w-full px-4"></div>
      <Footer />
    </main>
  );
}