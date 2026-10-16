import { motion } from "framer-motion";
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, BarChart3, Brain, Users, Shield } from 'lucide-react';
import CountUp from 'react-countup';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: "Analytics & Strategy",
      skills: ["Market Sizing", "Credit Risk Modelling", "Churn Prediction", "A/B Testing", "Statistical Analysis", "Time Series", "Geospatial Analysis"],
    },
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Programming & Data",
      skills: ["Python", "SQL", "R", "PySpark", "Pandas", "NumPy", "AWS Lambda"],
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "BI & Visualisation",
      skills: ["Power BI", "Tableau", "Metabase", "Domo", "Plotly", "D3.js", "Executive Dashboards"],
    },
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "Data Infrastructure",
      skills: ["PostgreSQL", "Redshift", "Oracle", "Apache Spark", "AWS", "Docker", "Jupyter"],
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Data Governance",
      skills: ["Data Quality Frameworks", "Data Validation", "Intake Templates", "Cross-team Integration", "Documentation", "Data Stewardship"],
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Leadership & Delivery",
      skills: ["Team Management", "Stakeholder Communication", "Data Storytelling", "Cross-functional Collaboration", "Analyst Mentorship", "Roadmap Planning"],
    },
  ];

  const stats = [
    { value: 5, suffix: "+", label: "Years of Experience" },
    { value: 20, suffix: "+", label: "Dashboards Built" },
    { value: 5, suffix: "M+", label: "Business Impact ($)" },
    { value: 5, suffix: "+", label: "Cross-functional Projects Led" },
    { value: 30, suffix: "%", label: "Improvement in Reporting Efficiency" },
    { value: 7, suffix: "", label: "Analysts Mentored" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From statistical modelling and BI infrastructure to governance frameworks and team leadership — built for analytics management.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.04, translateY: -5 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <Card className="hover:shadow-card transition-all duration-300 bg-card/80 backdrop-blur-sm cursor-pointer h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    {category.icon}
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
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

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={cardVariants}>
              <div className="text-4xl font-bold text-primary mb-2">
                <CountUp end={stat.value} duration={4} />
                {stat.suffix}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
