import About from "./components/About";
import Hero from "./components/Hero";
import Myexperiance from "./components/Myexperiance";
import Navbar from "./components/Navbar";
import Preloader from "./components/placeloader";

export default function HomePage() {
  return (
   <main className="bg-black text-white">
    <Preloader />
     <Navbar />
      <Hero />
      <About/>
      <Myexperiance/>
    </main>
  )
}
