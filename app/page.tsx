"use client";

import { navItems } from "@/data";

export const runtime = "edge";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <section id="projects-section">
          <RecentProjects />
        </section>
        <Clients />
        <section id="experience-section">
          <Experience />
        </section>
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
