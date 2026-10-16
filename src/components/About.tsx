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
      title: "Data Visualization (Power BI & Tableau)",
      description: "Creating dashboards and visual analytics that communicate business insights clearly",
    },
    {
      icon: Database,
      title: "Data Processing (SQL & Python)",
      description: "Cleaning, transforming, and analyzing datasets for reporting and decision-making",
    },
    {
      icon: TrendingUp,
      title: "Statistical & Predictive Analysis",
      description: "Applying analytics and modeling techniques to uncover trends and patterns",
    },
    {
      icon: Users,
      title: "Business Intelligence & Reporting",
      description: "Translating data into executive dashboards and business recommendations",
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-background relative overflow-hidden">

      {/* Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-6">

        {/* SECTION HEADER (SEO IMPROVED) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>

          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          {/* LEFT COLUMN (SEO-HEAVY TEXT) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >

            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Data Analytics, Power BI & Business Intelligence Specialist
            </h3>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I am a Data Analytics Manager based in Kenya, specializing in Power BI, AWS-Cloud computing, SQL, Python, and R, with a focus on building scalable analytics systems that support executive decision-making and business strategy.
			  I work with cross-functional teams to design executive dashboards, KPI frameworks, and reporting systems that give leadership real-time visibility into business performance.
			  My work sits at the intersection of data, operations, and strategy — transforming raw data into structured decision intelligence used across organizations.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I have experience building executive dashboards, automated reports, and data pipelines
              that support business intelligence and strategic planning across cross-functional teams.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              🧠 Tools I work with:
              <br />• Python 🐍 for data analysis and automation
              <br />• SQL ⚙️ for querying and data transformation
              <br />• Power BI & Tableau 📊 for dashboards and visualization
              <br />• R 📈 for statistical analysis
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              🚀 I continuously improve my skills in data analytics, machine learning,
              and business intelligence to stay current in the evolving data landscape.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ⛰️ Outside of data work, I enjoy hiking, learning new technologies,
              and engaging with the global data community.
            </p>

          </motion.div>

          {/* RIGHT COLUMN (UNCHANGED VISUAL STYLE) */}
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
                transition={{ type: "spring", stiffness: 300 }}
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

                    <h4 className="font-semibold mb-2 text-foreground">
                      {item.title}
                    </h4>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

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