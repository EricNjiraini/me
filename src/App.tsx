import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function App() {
  return (
    <main className="p-6 md:p-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Eric Mburu Njiraini</h1>
      <p className="text-lg mb-4">
        Data Analytics Leader with 6+ years of experience transforming complex data into strategic insights that drive growth and social impact.
      </p>

      <a
        href="https://github.com/EricNjiraini/me/raw/main/public/Eric_Njiraini_Resume.pdf"
        download
        className="inline-block mb-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Download My Resume
      </a>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Featured GitHub Projects</h2>
        <div className="grid gap-4">
          <Card>
            <CardContent className="p-4">
              <a
                href="https://github.com/EricNjiraini/Data-Strategy-Blue-print-for-a-Mid-Sized-Company"
                target="_blank"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                Data Strategy Blueprint for a Mid-Sized Company <ExternalLink size={16} />
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <a
                href="https://github.com/EricNjiraini/Executive-Dashboard--From-Data-to-Decision"
                target="_blank"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                Executive Dashboard – From Data to Decision <ExternalLink size={16} />
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <a
                href="https://github.com/EricNjiraini/Retail-Data-Analysis"
                target="_blank"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                Retail Data Analysis <ExternalLink size={16} />
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <a
                href="https://github.com/EricNjiraini/Data-Governance-Framework"
                target="_blank"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                Data Governance Framework <ExternalLink size={16} />
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Power BI Dashboards</h2>
        <div className="grid gap-4">
          <Card>
            <CardContent className="p-4">
              <a
                href="https://app.powerbi.com/view?r=eyJrIjoiMzM3NzIyNmQtZDE5NC00OTk1LWIzNDktNDYzNTY1ZmYzZTA5IiwidCI6IjViMzAzNTE2LWYyYjEtNGZmNi05NmFkLTU5NDViNjM3MzZiMSIsImMiOjh9"
                target="_blank"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                Executive KPI Dashboard <ExternalLink size={16} />
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <a
                href="https://app.powerbi.com/view?r=eyJrIjoiYTk1ZmQ4OWUtMDU5Yy00NWNjLWIyMzUtMmY4ZjBlODQxMzhlIiwidCI6IjViMzAzNTE2LWYyYjEtNGZmNi05NmFkLTU5NDViNjM3MzZiMSIsImMiOjh9"
                target="_blank"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                Sales and Distribution Dashboard <ExternalLink size={16} />
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Let's Connect</h2>
        <ul className="list-disc list-inside">
          <li>Email: <a href="mailto:menjiraini@gmail.com" className="text-blue-600 hover:underline">menjiraini@gmail.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/eric-njiraini/" target="_blank" className="text-blue-600 hover:underline">eric-njiraini</a></li>
        </ul>
      </section>
    </main>
  );
}
