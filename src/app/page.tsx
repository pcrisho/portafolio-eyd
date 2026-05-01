import { careerData } from "@/lib/data";
import HeroGlobal from "@/components/HeroGlobal";
import CarreraSection from "@/components/CarreraSection";
import ValoresCompartidos from "@/components/ValoresCompartidos";
import ReferencesAPA from "@/components/ReferencesAPA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroGlobal />
      <CarreraSection data={careerData["admin-turismo"]} />
      <CarreraSection data={careerData.comunicacion} />
      <CarreraSection data={careerData.ingenieria} />
      <ValoresCompartidos />
      <ReferencesAPA />
      <Footer />
    </>
  );
}
