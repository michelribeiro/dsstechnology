import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import OurGols from "./components/OurGols";

export default function Home() {
  return (
    <div className="content">
      <div className="container mx-auto">
        <Header />
        <About />
        <OurGols />
        <Contact />
      </div>
    </div>
  );
}
