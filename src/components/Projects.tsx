import React from 'react';

interface Project {
  id: string;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
}

const Projects = () => {
  // Your portfolio projects
  const projects: Project[] = [
    {
      id: '1',
      name: 'B2C Distribution Model',
      description: 'Coordinating data operations for B2C distribution channels',
      language: 'Data Analytics',
      stars: 0,
      forks: 0,
      url: '#'
    },
    {
      id: '2',
      name: 'New Market Entry Framework',
      description: 'Strategic framework for entering new markets with data-driven insights',
      language: 'Strategy',
      stars: 0,
      forks: 0,
      url: '#'
    },
    {
      id: '3',
      name: 'Market Saturation & Exit Strategy',
      description: 'Analysis and modeling for market saturation detection and exit planning',
      language: 'Python',
      stars: 0,
      forks: 0,
      url: '#'
    },
    {
      id: '4',
      name: 'Data Democratization with Metabase',
      description: 'Self-service BI platform enabling stakeholders to access and analyze data',
      language: 'Metabase',
      stars: 0,
      forks: 0,
      url: '#'
    },
    {
      id: '5',
      name: 'Last Mile Visibility Tool',
      description: 'Real-time performance tracking and visibility of last-mile operations',
      language: 'JavaScript',
      stars: 0,
      forks: 0,
      url: '#'
    },
    {
      id: '6',
      name: 'Distribution Excellence Tracker',
      description: 'Monitoring and tracking key performance indicators across distribution network',
      language: 'SQL',
      stars: 0,
      forks: 0,
      url: '#'
    },
    {
      id: '7',
      name: 'System Gaps Detector (sysGad)',
      description: 'ML model to identify and flag system inefficiencies and operational gaps',
      language: 'Python',
      stars: 0,
      forks: 0,
      url: '#'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg">
            Data analytics and distribution excellence initiatives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-card/80 p-6 rounded-lg hover:shadow-lg transition">
              <h3 className="text-lg font-bold mb-2">{project.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex gap-4 text-sm mb-4">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                  {project.language}
                </span>
              </div>
              {project.url !== '#' && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Learn more →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;