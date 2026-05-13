import { Button } from "@/components/ui/enhanced-button";
import { Mail, MessageSquare, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import CalendlyWidget from "./CalendlyWidget";

const Contact = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <>
      <section id="contact" className="py-20 px-6 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Liên <span className="bg-gradient-primary bg-clip-text text-transparent">Hệ</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tôi luôn sẵn sàng cho các cơ hội mới và những dự án thú vị.
              Hãy liên hệ để chúng ta cùng thảo luận và hợp tác nhé!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-glass border border-glass rounded-2xl p-8 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Gửi Email</h3>
              <p className="text-muted-foreground mb-4">
                Gửi email cho tôi, tôi sẽ phản hồi trong vòng 24 giờ.
              </p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open('mailto:tranchitho160704@gmail.com', '_blank')}
              >
                tranchitho160704@gmail.com
              </Button>
            </div>

            <div className="bg-glass border border-glass rounded-2xl p-8 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <MessageSquare className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Trò chuyện</h3>
              <p className="text-muted-foreground mb-4">
                Đặt lịch gọi để thảo luận về yêu cầu dự án của bạn.
              </p>
              <Button
                variant="hero"
                className="w-full"
                onClick={() => setShowCalendly(true)}
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
      {showCalendly && (
        <CalendlyWidget
          url="https://calendly.com/tranchitho160704"
          onClose={() => setShowCalendly(false)}
        />
      )}
    </>
  );
};

export default Contact;
