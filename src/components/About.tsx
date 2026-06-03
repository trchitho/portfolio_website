const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm an Intern/Fresher Fullstack Developer focused on building end-to-end web
              applications. Specializing in Java/Spring Boot on the backend and React on the
              frontend, I always strive to write clean, efficient, and maintainable code.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new design patterns,
              researching microservices architecture, or sharing knowledge with the developer community.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-glass border border-glass rounded-full text-sm backdrop-blur-sm">
                Logical Thinking
              </span>
              <span className="px-3 py-1 bg-glass border border-glass rounded-full text-sm backdrop-blur-sm">
                Team Player
              </span>
              <span className="px-3 py-1 bg-glass border border-glass rounded-full text-sm backdrop-blur-sm">
                Continuous Learner
              </span>
              <span className="px-3 py-1 bg-glass border border-glass rounded-full text-sm backdrop-blur-sm">
                Problem Solver
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-secondary p-8 rounded-2xl border border-glass backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="font-medium">1+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Specialty</span>
                  <span className="font-medium">Java / Spring Boot</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Projects</span>
                  <span className="font-medium">5+ Completed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium">Da Nang, Vietnam</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <span className="font-medium text-accent">Available</span>
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
