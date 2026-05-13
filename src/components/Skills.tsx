import { Code, Server, Database, Wifi, Brain, Languages } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Server,
      title: "Backend (Java)",
      skills: [
        { name: "Spring Boot", highlight: true },
        { name: "Spring MVC", highlight: true },
        { name: "Spring Security", highlight: true },
        { name: "RESTful API Development", highlight: true },
        { name: "JWT Authentication", highlight: true },
        { name: "JPA / Hibernate", highlight: true },
      ],
      color: "from-red-400 to-red-600",
      featured: true
    },
    {
      icon: Code,
      title: "Frontend",
      skills: [
        { name: "React.js", highlight: false },
        { name: "TypeScript", highlight: false },
        { name: "JavaScript (ES6+)", highlight: false },
        { name: "Tailwind CSS", highlight: false },
        { name: "DaisyUI", highlight: false },
        { name: "Zustand", highlight: false },
        { name: "Axios", highlight: false },
      ],
      color: "from-blue-400 to-blue-600",
      featured: false
    },
    {
      icon: Server,
      title: "Backend (Node.js)",
      skills: [
        { name: "Node.js", highlight: false },
        { name: "Express.js", highlight: false },
      ],
      color: "from-green-400 to-green-600",
      featured: false
    },
    {
      icon: Database,
      title: "Database",
      skills: [
        { name: "MongoDB + Mongoose", highlight: false },
        { name: "PostgreSQL", highlight: false },
        { name: "pgvector", highlight: false },
      ],
      color: "from-purple-400 to-purple-600",
      featured: false
    },
    {
      icon: Wifi,
      title: "Realtime & Services",
      skills: [
        { name: "Socket.IO", highlight: false },
        { name: "Cloudinary (image storage)", highlight: false },
      ],
      color: "from-orange-400 to-orange-600",
      featured: false
    },
    {
      icon: Brain,
      title: "AI & NLP",
      skills: [
        { name: "NLP", highlight: false },
        { name: "Vector Search", highlight: false },
        { name: "Recommendation Systems", highlight: false },
        { name: "PhoBERT", highlight: false },
        { name: "vi-SBERT", highlight: false },
        { name: "NeuMF", highlight: false },
        { name: "FAISS", highlight: false },
      ],
      color: "from-pink-400 to-pink-600",
      featured: false
    },
    {
      icon: Languages,
      title: "Languages",
      skills: [
        { name: "English – TOEIC 700+", highlight: false },
      ],
      color: "from-cyan-400 to-cyan-600",
      featured: false
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto" />
        </div>

        {/* Featured: Java Backend - nhấn mạnh */}
        <div className="mb-10">
          {skillCategories.filter(c => c.featured).map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-glass border-2 border-primary/50 rounded-2xl p-8 backdrop-blur-sm hover:border-primary transition-all duration-300 hover:shadow-glow group relative overflow-hidden"
              >
                <div className="absolute top-3 right-3 px-3 py-1 bg-primary/20 border border-primary/40 rounded-full text-xs font-semibold text-primary">
                  ⭐ Core Expertise
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <IconComponent className="h-7 w-7 text-background" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">Java / Spring Ecosystem</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-sm font-medium px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary"
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Other skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.filter(c => !c.featured).map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-glass border border-glass rounded-2xl p-6 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-3 group-hover:shadow-glow transition-all duration-300">
                    <IconComponent className="h-6 w-6 text-background" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="text-sm text-muted-foreground px-3 py-1 bg-muted/30 rounded-full border border-muted/20"
                    >
                      {skill.name}
                    </div>
                  ))}

                  {/* Language description */}
                  {category.title === "Languages" && (
                    <p className="text-xs text-muted-foreground mt-3 leading-relaxed px-1">
                      Able to read technical documents, communicate in basic workplace situations, 
                      and understand common software development requirements in English.
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
