import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, BarChart3, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Programming Languages",
      skills: ["Python", "R", "SQL"]
    },
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "Data Tools & Platforms",
      skills: ["Pandas", "NumPy", "Jupyter", "AWS", "Docker", "Apache Spark"]
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "Visualization Tools",
      skills: ["Tableau", "Power BI", "Plotly", "D3.js"]
    },
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: "Analytics & ML",
      skills: ["Statistical Analysis", "Machine Learning", "A/B Testing", "Time Series", "Regression", "Classification", "Cloud Computing"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for data analysis, visualization, and insights generation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-card transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  {category.icon}
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="animate-slide-up">
            <div className="text-4xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Years of Experience</div>
          </div>
          <div className="animate-slide-up">
            <div className="text-4xl font-bold text-primary mb-2">20+</div>
            <div className="text-muted-foreground">Dashboards Built</div>
          </div>
          <div className="animate-slide-up">
            <div className="text-4xl font-bold text-primary mb-2">$5M+</div>
            <div className="text-muted-foreground">Business Impact Delivered</div> 
          </div>
          <div className="animate-slide-up">
            <div className="text-4xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Cross-Functional Projects Led</div>
          </div>
          <div className="animate-slide-up">
            <div className="text-4xl font-bold text-primary mb-2">305%</div>
            <div className="text-muted-foreground">Improvement in Reporting Efficiency</div> 
          </div>
          <div className="animate-slide-up">
            <div className="text-4xl font-bold text-primary mb-2">7</div>
            <div className="text-muted-foreground">Analysts Mentored</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
