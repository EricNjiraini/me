// pages/Index.tsx
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-muted-foreground">
          I’m Eric Njiraini — a data analytics leader focused on impactful, sustainable business insights. Explore my work below.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">GitHub Projects</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Data Strategy Blueprint",
              link: "https://github.com/EricNjiraini/Data-Strategy-Blue-print-for-a-Mid-Sized-Company",
              description: "Blueprint for building a scalable data strategy in mid-sized firms."
            },
            {
              title: "Executive Dashboard",
              link: "https://github.com/EricNjiraini/Executive-Dashboard--From-Data-to-Decision",
              description: "End-to-end pipeline from data to insights in a decision-ready format."
            },
            {
              title: "Retail Data Analysis",
              link: "https://github.com/EricNjiraini/Retail-Data-Analysis",
              description: "Retail trends and sales performance analytics using Python and Pandas."
            },
            {
              title: "Data Governance Framework",
              link: "https://github.com/EricNjiraini/Data-Governance-Framework",
              description: "A flexible framework for managing data quality, ownership, and compliance."
            },
          ].map((project) => (
            <Card key={project.title}>
              <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  View Project <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Power BI Dashboards</h2>
        <div className="space-y-4">
          {[
            {
              title: "Productivity & Performance Dashboard",
              link: "https://app.powerbi.com/view?r=eyJrIjoiMzM3NzIyNmQtZDE5NC00OTk1LWIzNDktNDYzNTY1ZmYzZTA5IiwidCI6IjViMzAzNTE2LWYyYjEtNGZmNi05NmFkLTU5NDViNjM3MzZiMSIsImMiOjh9",
            },
            {
              title: "Sales Insights & Impact Dashboard",
              link: "https://app.powerbi.com/view?r=eyJrIjoiYTk1ZmQ4OWUtMDU5Yy00NWNjLWIyMzUtMmY4ZjBlODQxMzhlIiwidCI6IjViMzAzNTE2LWYyYjEtNGZmNi05NmFkLTU5NDViNjM3MzZiMSIsImMiOjh9",
            },
          ].map((dashboard) => (
            <Card key={dashboard.title}>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">{dashboard.title}</h3>
                <a
                  href={dashboard.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  View Dashboard <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Index;
