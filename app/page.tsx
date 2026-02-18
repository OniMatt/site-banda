"use client"

import Section from "../components/Section";
import PhotoCarousel from "../components/PhotoCarousel";
import VideoCarousel from "../components/VideoCarousel";
import Contact from "@/components/Contact";
import Repertoire from "@/components/Repertoire";
import BackToTopButton from "@/components/BackToTopButton";
import SideMenu from "@/components/SideMenu";

export default function Home() {
  return (
    <main>
      <Section id="home">
        <img src="/logo.png" alt="Band Logo" className="logo" />
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
        <p>Somos uma banda de rock alternativo da região metropolitana de Porto Alegre e tocamos por ração.</p>
        <BackToTopButton />
      </Section>

      <SideMenu />
    </main> 
  );
}
