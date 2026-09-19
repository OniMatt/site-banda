import Image from "next/image";
import logo from "@/public/logo.png";

import Section from "../components/Section";
import PhotoCarousel from "../components/PhotoCarousel";
import VideoCarousel from "../components/VideoCarousel";
import Contact from "@/components/Contact";
import Repertoire from "@/components/Repertoire";
import BackToTopButton from "@/components/BackToTopButton";
import SideMenu from "@/components/SideMenu";
import MobileMenu from "@/components/MobileMenu";

export default function Home() {
  return (
    <main>
      <Section id="home">
        <Image src={logo} alt="Beware The Dogs" className="logo" priority />
      </Section>

      <Section id="fotos">
        <PhotoCarousel />
      </Section>

      <Section id="videos">
        <VideoCarousel />
      </Section>

      <Section id="reperta">
        <Repertoire />
      </Section>

      <Section id="contato">  
        <Contact />
      </Section>

      <Section id="sobre" showArrow={false}>
        <h2>Sobre</h2>
        <p style={{ textAlign: 'center'}}>
        Somos uma banda de rock alternativo de Montenegro/RS e vamos dominar o mundo.
        </p>
        <BackToTopButton />
      </Section>

      <SideMenu />
      <MobileMenu />
    </main> 
  );
}
