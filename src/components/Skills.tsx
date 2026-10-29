import { motion, type Variants } from "framer-motion";
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, BarChart3, Brain, Users, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    title: "AI & Data Strategy",
    skills: ["AI Strategy", "MLOps", "Data Strategy", "AWS Cloud Migration", "Cost Optimisation", "Resource Gap Analysis", "OKRs & Roadmap Planning", "Process Automation"],
    featured: true,
  },
  {
    icon: <Brain className="w-6 h-6 text-primary" />,
    title: "Analytics & Modelling",
    skills: ["Market Sizing (TAM/SAM/SOM)", "Credit Risk Modelling", "Churn & Survival Analysis", "Sales Funnel Analytics", "Customer Experience Analytics", "A/B Testing", "Statistical Analysis", "Time Series", "Geospatial Analysis"],
  },
  {
    icon: <Code className="w-6 h-6 text-primary" />,
    title: "Programming & Data",
    skills: ["Python", "SQL", "R", "PySpark", "Pandas", "GeoPandas", "NumPy"],
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    title: "BI & Visualisation",
    skills: ["Power BI", "Tableau", "Metabase", "Domo", "Plotly", "D3.js", "Executive Dashboards"],
  },
  {
    icon: <Database className="w-6 h-6 text-primary" />,
    title: "Cloud & Data Infrastructure",
    skills: ["AWS", "AWS Lambda", "PostgreSQL", "Redshift", "Oracle", "Apache Spark", "Docker", "MS Dynamics"],
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Leadership & Governance",
    skills: ["Team Building & Hiring", "Analyst Mentorship", "Stakeholder Communication", "Data Storytelling", "Data Literacy Training", "Data Quality Frameworks", "Data Stewardship", "Data Lineage", "KoboCollect / ODK"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-foreground">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            From AI and data strategy to statistical modelling, BI and team leadership — built for analytics management.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={cardVariants}>
              <Card
                className={`hover:shadow-card transition-all duration-300 backdrop-blur-sm h-full ${
                  category.featured ? 'border-primary/50 bg-primary/5' : 'bg-card/80'
                }`}
              >
                <CardHeader className="p-5 sm:p-6 pb-3 sm:pb-4">
                  <div className="flex items-center gap-3">
                    {category.icon}
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-5 sm:p-6 pt-0 sm:pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={`hover:bg-primary hover:text-primary-foreground transition-colors duration-200 ${
                          category.featured ? 'bg-primary/15' : ''
                        }`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
