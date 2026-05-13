const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Về <span className="bg-gradient-primary bg-clip-text text-transparent">Tôi</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tôi là một Junior Java Fullstack Developer đam mê với hơn 1 năm kinh nghiệm
              xây dựng các ứng dụng web end-to-end. Chuyên về Java/Spring Boot ở backend
              và React ở frontend, tôi luôn hướng đến việc viết code sạch, hiệu quả và dễ bảo trì.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Khi không code, bạn có thể thấy tôi đang tìm hiểu các design pattern mới,
              nghiên cứu kiến trúc microservices, hoặc chia sẻ kiến thức với cộng đồng developer.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-glass border border-glass rounded-full text-sm backdrop-blur-sm">
                Tư duy logic
              </span>
              <span className="px-3 py-1 bg-glass border border-glass rounded-full text-sm backdrop-blur-sm">
                Làm việc nhóm
              </span>
              <span className="px-3 py-1 bg-glass border border-glass rounded-full text-sm backdrop-blur-sm">
                Học hỏi không ngừng
              </span>
              <span className="px-3 py-1 bg-glass border border-glass rounded-full text-sm backdrop-blur-sm">
                Giải quyết vấn đề
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-secondary p-8 rounded-2xl border border-glass backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Thông tin nhanh</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Kinh nghiệm</span>
                  <span className="font-medium">1+ Năm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Chuyên môn</span>
                  <span className="font-medium">Java / Spring Boot</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dự án</span>
                  <span className="font-medium">5+ Hoàn thành</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Vị trí</span>
                  <span className="font-medium">Đà Nẵng, Việt Nam</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Trạng thái</span>
                  <span className="font-medium text-accent">Sẵn sàng nhận việc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
