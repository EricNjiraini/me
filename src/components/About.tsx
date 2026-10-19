import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { LayoutDashboard, Workflow, TrendingUp, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import CountUp from 'react-countup';
import { useRef } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
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
    icon: LayoutDashboard,
    title: "Executive dashboards & KPIs",
    description: "Power BI and Metabase reporting that leadership uses to track operations, supply and demand.",
  },
  {
    icon: Workflow,
    title: "Data pipelines & automation",
    description: "Python, R and AWS pipelines that join ERP, CRM, warehouse and field data into one view.",
  },
  {
    icon: TrendingUp,
    title: "Market & risk analytics",
    description: "TAM/SAM/SOM market sizing, credit risk and churn models that guide where to invest.",
  },
  {
    icon: ShieldCheck,
    title: "Data quality & governance",
    description: "Validation rules, monitoring and stewardship that keep critical datasets accurate.",
  },
];

// Headline figures for the site; the CV (src/assets/Eric_Njiraini_Resume.pdf) carries the detail.
const stats = [
  { value: 9, prefix: "", suffix: "+", label: "Years working with data" },
  { value: 5, prefix: "$", suffix: "M+", label: "Business impact" },
  { value: 97, prefix: "", suffix: "%", label: "Accuracy on critical datasets" },
  { value: 90, prefix: "", suffix: "%", label: "Of recurring reporting automated" },
  { value: 20, prefix: "", suffix: "+", label: "Dashboards built for leadership" },
  { value: 7, prefix: "", suffix: "", label: "Analysts mentored" },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={sectionRef} id="about" className="py-16 md:py-24 bg-background relative overflow-hidden">

      {/* Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-5 sm:px-6">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-foreground">
            About Me
          </h2>

          <div className="w-24 h-1 bg-gradient-primary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-12 md:mb-16">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >

            <h3 className="text-xl sm:text-2xl font-semibold mb-5 text-foreground">
              Data analytics, Power BI & business intelligence across Sub-Saharan Africa
            </h3>

            <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                I'm a Data Analytics Manager in Nairobi. I've spent 9 years turning messy, multi-source
                data into decisions, from field surveys to ERP systems. At Burn Manufacturing I lead
                analytics for Commercial, Field Operations, Customer Experience and Logistics across a
                multi-country network.
              </p>

              <p>
                Before Burn, I worked at Dalberg Research, designing field data collection and analysis for
                programme evaluations across Africa. That grounding in international development still
                shapes how I work: rigorous methods, clear communication for technical and non-technical
                audiences, and data in service of community-level impact.
              </p>

              <p>
                I'm completing an MSc in Data Science at the University of East London, on top of a BSc in
                Statistics. Outside of data work, I hike and stay involved in the data community.
              </p>
            </div>

          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="hover:shadow-card transition-all duration-300 bg-gradient-card h-full">
                  <CardContent className="p-5 sm:p-6 flex sm:flex-col sm:text-center gap-4 sm:gap-0">

                    <div className="shrink-0 self-start sm:self-auto sm:mb-4 flex sm:justify-center">
                      <div className="p-2.5 rounded-lg bg-primary/10">
                        <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-1.5 text-foreground">
                        {item.title}
                      </h4>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Impact stats */}
        <motion.dl
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="rounded-xl border border-border bg-card/80 p-4 sm:p-6 text-center flex flex-col-reverse justify-end"
            >
              <dt className="text-muted-foreground text-xs sm:text-sm leading-snug">{stat.label}</dt>
              <dd className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                {stat.prefix}
                <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                {stat.suffix}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};

export default About;
