import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Preloader from "./components/placeloader";

export default function HomePage() {
  return (
   <main className="bg-black text-white">
    <Preloader />
     <Navbar />
      <Hero />
    </main>
  )
}
