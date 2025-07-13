import { ExternalLink, Github, BarChart3, Database, TrendingUp, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Sales Analytics Dashboard",
      description: "Interactive Tableau dashboard analyzing sales performance across multiple regions and time periods. Includes KPI tracking, trend analysis, and forecasting models.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      technologies: ["Tableau", "Python", "SQL", "Excel"],
      status: "In Progress",
      type: "Dashboard"
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Machine learning project using clustering algorithms to segment customers based on purchasing behavior and demographics for targeted marketing campaigns.",
      icon: <Brain className="w-6 h-6 text-primary" />,
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      status: "Completed",
      type: "ML Project"
    },
    {
      title: "Financial Data Pipeline",
      description: "Automated ETL pipeline for processing financial data from multiple sources, with data validation and real-time monitoring capabilities.",
      icon: <Database className="w-6 h-6 text-primary" />,
      technologies: ["Python", "Apache Airflow", "PostgreSQL", "Docker"],
      status: "In Progress",
      type: "Data Engineering"
    },
    {
      title: "Market Trend Predictor",
      description: "Time series analysis project predicting market trends using historical data and external economic indicators with various forecasting models.",
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      technologies: ["R", "Time Series", "ARIMA", "Prophet"],
      status: "Completed",
      type: "Forecasting"
    },
    {
      title: "A/B Testing Framework", 
      description: "Statistical framework for conducting and analyzing A/B tests with automated significance testing and reporting capabilities.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      technologies: ["Python", "Scipy", "Streamlit", "Statistics"],
      status: "In Progress", 
      type: "Statistics"
    },
    {
      title: "Data Visualization Library",
      description: "Custom visualization library built on D3.js for creating interactive charts specifically designed for business intelligence applications.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      technologies: ["JavaScript", "D3.js", "HTML/CSS", "Node.js"],
      status: "Completed",
      type: "Visualization"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my data analysis projects, from dashboards to machine learning models
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-card transition-all duration-300 group bg-gradient-card">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  {project.icon}
                  <Badge 
                    variant={project.status === 'Completed' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <Badge variant="outline" className="w-fit mb-4">
                  {project.type}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-primary">
                    <ExternalLink size={16} className="mr-2" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            These represent some of my ongoing and completed work. Many repositories are being refined and documented.
          </p>
          <Button variant="outline" size="lg">
            <Github className="mr-2" />
            View All Repositories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;