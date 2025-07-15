import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />

      {/* New Portfolio Section */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto mt-12">
        <a
          href="https://github.com/EricNjiraini/me/raw/main/public/Eric_Njiraini_Resume.pdf"
          download
          className="inline-block mb-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Download My Resume
        </a>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Featured GitHub Projects</h2>
          <div className="grid gap-4">
            {[
              {
                title: 'Data Strategy Blueprint for a Mid-Sized Company',
                link: 'https://github.com/EricNjiraini/Data-Strategy-Blue-print-for-a-Mid-Sized-Company',
              },
              {
                title: 'Executive Dashboard – From Data to Decision',
                link: 'https://github.com/EricNjiraini/Executive-Dashboard--From-Data-to-Decision',
              },
              {
                title: 'Retail Data Analysis',
                link: 'https://github.com/EricNjiraini/Retail-Data-Analysis',
              },
              {
                title: 'Data Governance Framework',
                link: 'https://github.com/EricNjiraini/Data-Governance-Framework',
              },
            ].map(({ title, link }) => (
              <Card key={link}>
                <CardContent className="p-4">
                  <a href={link} target="_blank" className="flex items-center gap-2 text-blue-600 hover:underline">
                    {title} <ExternalLink size={16} />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Power BI Dashboards</h2>
          <div className="grid gap-4">
            {[
              {
                title: 'Executive KPI Dashboard',
                link: 'https://app.powerbi.com/view?r=eyJrIjoiMzM3NzIyNmQtZDE5NC00OTk1LWIzNDktNDYzNTY1ZmYzZTA5IiwidCI6IjViMzAzNTE2LWYyYjEtNGZmNi05NmFkLTU5NDViNjM3MzZiMSIsImMiOjh9',
              },
              {
                title: 'Sales and Distribution Dashboard',
                link: 'https://app.powerbi.com/view?r=eyJrIjoiYTk1ZmQ4OWUtMDU5Yy00NWNjLWIyMzUtMmY4ZjBlODQxMzhlIiwidCI6IjViMzAzNTE2LWYyYjEtNGZmNi05NmFkLTU5NDViNjM3MzZiMSIsImMiOjh9',
              },
            ].map(({ title, link }) => (
              <Card key={link}>
                <CardContent className="p-4">
                  <a href={link} target="_blank" className="flex items-center gap-2 text-blue-600 hover:underline">
                    {title} <ExternalLink size={16} />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Let's Connect</h2>
          <ul className="list-disc list-inside">
            <li>
              Email:{' '}
              <a href="mailto:menjiraini@gmail.com" className="text-blue-600 hover:underline">
                menjiraini@gmail.com
              </a>
            </li>
            <li>
              LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/in/eric-njiraini/"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                eric-njiraini
              </a>
            </li>
          </ul>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default Index;
