import { Nav } from "./components/portfolio/Nav.jsx";
import { Hero } from "./components/portfolio/Hero.jsx";
import { Achievements } from "./components/portfolio/Achievements.jsx";
import { Projects } from "./components/portfolio/Projects.jsx";
import { Expertise } from "./components/portfolio/Expertise.jsx";
import { Timeline } from "./components/portfolio/Timeline.jsx";
import { Contact } from "./components/portfolio/Contact.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Achievements />
        <Projects />
        <Expertise />
        <Timeline />
      </main>
      <Contact />
    </div>
  );
}
