import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <div className="flex justify-center mb-8">
            <img
              src="/image0.jpeg"
              alt="Kelvin Solorzano"
              className="w-80 h-80 rounded-full border-2 border-primary/50 shadow-lg object-cover opacity-0 animate-fade-in"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Kelvin
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Solorzano
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I build full-stack web applications with a focus on clean design and reliable functionality.
            My work combines strong foundations in computer science, mathematics, and machine learning.
          </p>
          <p className="font-extrabold">Feel free to check out my blog to read about my latest projects and insights.</p>

          <div className="flex justify-center pt-4 opacity-0 animate-fade-in-delay-4 gap-4">
            <a href="/blog" className="cosmic-button">
              Read My Blog
            </a>
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
