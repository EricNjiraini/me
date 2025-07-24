import { BarChart3, Database, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Data Visualization",
      description: "Creating compelling charts and dashboards that tell data stories"
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Data Processing",
      description: "Cleaning, transforming, and preparing data for analysis"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Statistical Analysis",
      description: "Applying statistical methods to uncover patterns and insights"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Business Intelligence",
      description: "Translating complex data into actionable business recommendations"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Me</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Turning Data into Decisions
            </h3>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              As a passionate data analytics leader, I specialize in transforming complex datasets into
              actionable insights that inform program performance, strategic decisions, and operational efficiency. 
              I have a strong foundation in statistical analysis, data visualization, and 
              reporting and have led the delivery of executive dashboards, board reports, and data products that align closely with cross-functional business needs.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              🧠 Tools of the trade:
              <br />• Python 🐍 and R 📊 for advanced analytics
              <br />• Tableau and Power BI 📈 for compelling dashboards
              <br />• SQL and data pipelines ⚙️ for wrangling messy data
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              🚀 I'm constantly learning and adapting to new technologies in the ever-evolving 
              field of data science—because staying curious is part of the job.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ⛰️ When I’m not deep in dashboards or wrangling datasets, you’ll find me hiking trails, 
              chasing sunrises, or sharing knowledge with the global data community on LinkedIn.
            </p>

            {/* Quotes Section */}
            <div className="mt-12 text-center max-w-2xl mx-auto space-y-6">
              <p className="text-muted-foreground text-lg italic">
                "The goal is to turn data into information, and information into insight."
                <br />
                <span className="text-sm not-italic text-muted-foreground">— Carly Fiorina</span>
              </p>
              <p className="text-muted-foreground text-lg italic">
                "In God we trust. All others must bring data."
                <br />
                 <span className="text-sm not-italic text-muted-foreground">— W. Edwards Deming</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 bg-gradient-card">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
