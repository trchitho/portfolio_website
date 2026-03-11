import { Button } from "@/components/ui/enhanced-button";
import { Mail, MessageSquare, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-glass border border-glass rounded-2xl p-8 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
            <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email Me</h3>
            <p className="text-muted-foreground mb-4">
              Drop me a line and I'll get back to you within 24 hours.
            </p>
            <Button variant="outline" className="w-full">
              tranchitho160704@gmail.com
            </Button>
          </div>

          <div className="bg-glass border border-glass rounded-2xl p-8 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
            <MessageSquare className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Let's Chat</h3>
            <p className="text-muted-foreground mb-4">
              Schedule a call to discuss your project requirements.
            </p>
            <Button
              variant="hero"
              className="w-full"
              onClick={() => window.open('https://calendly.com/tranchitho160704', '_blank')}
            >
              Schedule a Call
            </Button>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/trchitho"
            className="p-4 bg-glass border border-glass rounded-full hover:border-primary/50 transition-all duration-300 hover:shadow-glow backdrop-blur-sm group"
          >
            <Github className="h-6 w-6 transition-transform group-hover:scale-110" />
          </a>
          <a
            href="mailto:tranchitho160704@gmail.com"
            className="p-4 bg-glass border border-glass rounded-full hover:border-primary/50 transition-all duration-300 hover:shadow-glow backdrop-blur-sm group"
          >
            <Mail className="h-6 w-6 transition-transform group-hover:scale-110" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
