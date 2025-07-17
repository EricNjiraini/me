import { Github, ExternalLink, BarChart3, TrendingUp, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const words = `Projects & Dashboards that showcase my data leadership, 
analytics, and strategic thinking.`;

const projects = [
  {
    title: "Data Strategy Blueprint for a Mid-Sized Company",
    description:
      "A comprehensive strategy to align data systems with business goals, improve data governance, and scale analytics operations.",
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    technologies: ["Strategy", "Data Governance", "Maturity Model"],
    status: "Completed",
    type: "Documentation",
    github: "https://github.com/EricNjiraini/Data-Strategy-Blue-print-for-a-Mid-Sized-Company",
    live: ""
  },
  {
    title: "Executive Dashboard – From Data to Decision",
    description:
      "Power BI dashboard project designed for senior leadership to track KPIs, trends, and operational efficiency.",
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    technologies: ["Power BI", "DAX", "Data Modeling"],
    status: "Completed",
    type: "Dashboard",
    github: "",
    live: "https://app.powerbi.com/view?r=eyJrIjoiMzM3NzIyNmQtZDE5NC00OTk1LWIzNDktNDYzNTY1ZmYzZTA5IiwidCI6IjViMzAzNTE2LWYyYjEtNGZmNi05NmFkLTU5NDViNjM3MzZiMSIsImMiOjh9"
  },
  {
    title: "Retail Data Analysis",
    description:
      "Exploratory analysis and insights generation from retail transaction data to inform merchandising decisions.",
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    technologies: ["R", "ggplot2", "Data Cleaning"],
    status: "Completed",
    type: "Analytics",
    github: "https://github.com/EricNjiraini/Retail-Data-Analysis",
    live: ""
  },
  {
    title: "Data Governance Framework",
    description:
      "Framework for building strong data governance: ownership, stewardship, data quality, and policy enforcement.",
    icon: <Database className="w-6 h-6 text-primary" />,
    technologies: ["Governance", "Policy", "Framework"],
    status: "Completed",
    type: "Documentation",
    github: "https://github.com/EricNjiraini/Data-Governance-Framework",
    live: ""
  },
  {
    title: "Sales and Operations Dashboard",
    description:
      "Dynamic Power BI dashboard for tracking sales volume, operations performance, and regional breakdowns.",
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    technologies: ["Power BI", "DAX", "Excel"],
    status: "Completed",
    type: "Dashboard",
    github: "",
    live: "https://app.powerbi.com/view?r=eyJrIjoiYTk1ZmQ4OWUtMDU5Yy00NWNjLWIyMzUtMmY4ZjBlODQxMzhlIiwidCI6IjViMzAzNTE2LWYyYjEtNGZmNi05NmFkLTU5NDViNjM3MzZiMSIsImMiOjh9"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">My Work</h2>
        <TextGenerateEffect words={words} className="text-lg text-muted-foreground mb-12" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <Card key={idx} className="flex flex-col justify-between">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {project.icon}
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 text-xs mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  )}
                  {project.live && (
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-primary"
                      onClick={() => window.open(project.live, "_blank")}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("https://github.com/EricNjiraini", "_blank")}
          >
            <Github className="mr-2" />
            View All Repositories
          </Button>
        </div>
      </div>
    </section>
  );
}
