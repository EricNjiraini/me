<section id="projects" className="projects-section">
  <motion.div className="projects-header" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <h2>Projects</h2>
  </motion.div>
  <div className="projects-container">
    {projectsData.map((project) => (
      <Card key={project.id} project={project} />
    ))}
  </div>
  <div className="github-repo-display">
    <a href="https://github.com/your-repo" className="repo-link">
      <span className="badge">⭐ Stars: 100</span>
      <span className="badge">🍴 Forks: 10</span>
      <span className="badge">💬 Language: TypeScript</span>
    </a>
  </div>
</section>