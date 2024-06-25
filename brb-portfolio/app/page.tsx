import Header from "@/components/Header";
import {Container} from "@/components/ui/Container";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import {ExperienceCarousel} from "@/components/ExperienceCarousel";

export default function Home() {
  return (
      <>
          <Header />
          <main>
              <div className='bg-background relative z-10'>
                  <Hero />
                  <AboutMe />
              </div>
              <ExperienceCarousel />
              <div className='h-[300vh]'></div>
          </main>
      </>
  )
      ;
}
