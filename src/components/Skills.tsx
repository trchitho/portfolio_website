import { Code, Palette, Zap, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "HTML/CSS", "Vue.js", "JavaScript ES6+"],
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Palette,
      title: "UI/UX Design", 
      skills: ["Tailwind CSS", "Figma", "Responsive Design", "CSS3", "SASS"],
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Zap,
      title: "Tools & Workflow",
      skills: ["Git", "Webpack", "Vite", "npm/yarn", "VS Code"],
      color: "from-green-400 to-green-600"
    },
    {
      icon: Globe,
      title: "Backend & APIs",
      skills: ["Node.js", "REST APIs", "GraphQL", "Firebase", "Supabase"],
      color: "from-orange-400 to-orange-600"
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
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
                      {skill}
                    </div>
                  ))}
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
