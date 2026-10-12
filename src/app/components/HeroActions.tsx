"use client";
import AnimateIn from "./animation/AnimateIn";

export default function HeroActions() {
  const download = (file: string) => {
    const a = document.createElement("a");
    a.href = `/${file}`;
    a.download = file;
    a.click();
  };

  const scrollToWork = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimateIn delay={1.3} className="flex items-center gap-6 flex-wrap mt-8">
      <button onClick={scrollToWork} className="cursor-pointer">
        View Work →
      </button>
      <button
        onClick={() => download("Michael_Olomola_Project_Manager_Resume.pdf")}
        className="cursor-pointer"
      >
        Download PM Resume →
      </button>
      <button
        onClick={() => download("Michael_Olomola_Frontend_Engineer_Resume.pdf")}
        className="cursor-pointer text-neutral-500"
      >
        Frontend CV →
      </button>
    </AnimateIn>
  );
}
