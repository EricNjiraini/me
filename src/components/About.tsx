// Updated About component with animations merged from provided code snippets
import { motion, useScroll, useTransform } from "framer-motion";
import { BarChart3, Database, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const highlights = [
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "Creating compelling charts and dashboards that tell data stories",
    },
    {
      icon: Database,
      title: "Data Processing",
      description: "Cleaning, transforming, and preparing data for analysis",
    },
    {
      icon: TrendingUp,
      title: "Statistical Analysis",
      description: "Applying statistical methods to uncover patterns and insights",
    },
    {
      icon: Users,
      title: "Business Intelligence",
      description: "Translating complex data into actionable business recommendations",
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Me</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="animate-slide-up"
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Turning Data into Decisions</h3>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              As a passionate data analytics leader, I specialize in transforming complex datasets into actionable insights that inform program performance, strategic decisions, and operational efficiency. I have a strong foundation in statistical analysis, data visualization, and reporting and have led the delivery of executive dashboards, board reports, and data products that align closely with cross-functional business needs.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              🧠 Tools of the trade:
              <br />• Python 🐍 and R 📊 for advanced analytics
              <br />• Tableau and Power BI 📈 for compelling dashboards
              <br />• SQL and data pipelines ⚙️ for wrangling messy data
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              🚀 I'm constantly learning and adapting to new technologies in the ever-evolving field of data science—because staying curious is part of the job.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ⛰️ When I’m not deep in dashboards or wrangling datasets, you’ll find me hiking trails, chasing sunrises, or sharing knowledge with the global data community on LinkedIn.
            </p>

            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 text-center max-w-2xl mx-auto space-y-6 italic text-muted-foreground"
            >
              "The goal is to turn data into information, and information into insight."
              <span className="block text-sm mt-2 not-italic text-muted-foreground">— Carly Fiorina</span>
              <br />
              "In God we trust. All others must bring data."
              <span className="block text-sm mt-2 not-italic text-muted-foreground">— W. Edwards Deming</span>
            </motion.blockquote>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="hover:shadow-card transition-all duration-300 bg-gradient-card">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="mb-4 flex justify-center"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h4 className="font-semibold mb-2 text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
