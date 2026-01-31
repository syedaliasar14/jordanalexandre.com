import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-full items-center">
      <Header />
      <div className="flex-grow flex flex-col justify-center items-center w-full">
        <Image src="/headshot.png" className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mb-10"
          alt="Jordan Alexandre Logo" width={384} height={384} />
      </div>
    </main>
  );
}
