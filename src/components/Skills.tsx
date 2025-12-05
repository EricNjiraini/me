import { motion } from "framer-motion";
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, BarChart3, Brain } from 'lucide-react';
import CountUp from 'react-countup';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Programming Languages",
      skills: ["Python", "R", "SQL", "Pyspark", "AWS Lambda"],
    },
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "Data Tools & Platforms",
      skills: ["Tidyverse", "Pandas", "NumPy", "Jupyter", "AWS", "Docker", "Apache Spark"],
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "Visualization Tools",
      skills: ["Tableau", "Power BI", "Plotly", "D3.js", "Metabase", "Domo"],
    },
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "Data Warehousing",
      skills: ["PostgreSQL", "Oracle", "Redshift"],
    },
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: "Analytics & ML",
      skills: ["Statistical Analysis", "Machine Learning", "A/B Testing", "Time Series", "Regression", "Classification", "Cloud Computing"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.12,
      },
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
            A comprehensive toolkit for data analysis, visualization, and insights generation
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, translateY: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <Card className="hover:shadow-card transition-all duration-300 bg-card/80 backdrop-blur-sm cursor-pointer">
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

        {/* Experience Summary */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 lg:grid-cols-3 gap-8 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {[5, 20, 5, 5, 30, 7].map((num, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="animate-slide-up"
            >
              <div className="text-4xl font-bold text-primary mb-2">
                <CountUp end={num} duration={4} />
                {i === 0 || i === 1 || i === 3 ? "+" : i === 4 ? "%" : ""}
              </div>
              <div className="text-muted-foreground">
                {[
                  "Years of Experience",
                  "Dashboards Built",
                  "Business Impact Delivered ($M)",
                  "Cross-Functional Projects Led",
                  "Improvement in Reporting Efficiency",
                  "Analysts Mentored",
                ][i]}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
