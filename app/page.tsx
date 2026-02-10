import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center">
      <div className="min-h-[calc(100dvh)] w-full flex flex-col items-center">
        <Header />
        <div className="flex-grow flex flex-col justify-center items-center w-full">
          <Image src="/headshot.png" className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mb-10"
            alt="Jordan Alexandre Logo" width={500} height={500} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
