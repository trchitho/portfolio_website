import { Button } from "@/components/ui/enhanced-button";
import { Github, Mail, ExternalLink, Facebook, MessageCircle } from "lucide-react";
import TypewriterText from "@/components/ui/typewriter-text";
import heroBackground from "@/assets/hero-bg.jpg";
import HeroTechSphere from "./HeroTechSphere";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-glass border border-glass rounded-full text-sm font-medium text-muted-foreground backdrop-blur-sm">
                Fullstack Developer
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 animate-glow leading-tight">
              Tran Chi Tho
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 lg:px-0">
              <TypewriterText
                text="I craft beautiful, performant web applications with modern technologies. Specializing in React, Node.js, TypeScript, and creating full-stack solutions from frontend to backend."
                speed={30}
              />
            </p>

            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="https://github.com/trchitho"
                className="p-3 bg-glass border border-glass rounded-full hover:border-primary/50 transition-all duration-300 hover:shadow-glow backdrop-blur-sm group"
              >
                <Github className="h-6 w-6 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="mailto:tranchitho160704@gmail.com"
                className="p-3 bg-glass border border-glass rounded-full hover:border-primary/50 transition-all duration-300 hover:shadow-glow backdrop-blur-sm group"
              >
                <Mail className="h-6 w-6 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://www.facebook.com/chitho.tran.777"
                className="p-3 bg-glass border border-glass rounded-full hover:border-primary/50 transition-all duration-300 hover:shadow-glow backdrop-blur-sm group"
              >
                <Facebook className="h-6 w-6 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center order-1 lg:order-2">
            <div className="w-full max-w-lg">
              <HeroTechSphere />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
