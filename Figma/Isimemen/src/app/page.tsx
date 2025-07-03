import BassolaWord from "@/components/pages/Home/BassolaWord";
import Help from "@/components/pages/Home/Help";
import Hero from "@/components/pages/Home/Hero";
import Number from "@/components/pages/Home/Number";
import Program from "@/components/pages/Home/Programs";
import Resources from "@/components/pages/Home/Resources";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Program/>
      <Help/>
      <Number/>
      <Resources/>
      <BassolaWord/>
    </main>
  );
}
