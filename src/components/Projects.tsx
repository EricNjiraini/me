import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/EricNjiraini/repos?sort=updated&per_page=6')
      .then(response => response.json())
      .then(data => {
        setRepos(data.filter((repo: any) => !repo.fork));
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg">
            GitHub repositories showcasing data analytics projects
          </p>
        </div>

        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo) => (
              <div key={repo.id} className="bg-card/80 p-6 rounded-lg hover:shadow-lg transition">
                <h3 className="text-lg font-bold mb-2">{repo.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {repo.description || 'No description'}
                </p>
                <div className="flex gap-4 text-sm mb-4">
                  <span>⭐ {repo.stargazers_count}</span>
                  <span>🍴 {repo.forks_count}</span>
                  {repo.language && <span>📝 {repo.language}</span>}
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View on GitHub →
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
