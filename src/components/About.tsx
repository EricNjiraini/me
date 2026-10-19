import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { Sparkles, Cpu, CloudUpload, PiggyBank, Users, LayoutDashboard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import CountUp from 'react-countup';
import { useEffect, useRef, useState } from "react";

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

// Key selling points, in priority order.
const highlights = [
  {
    icon: Sparkles,
    title: "AI strategy",
    description: "Identifying where AI and machine learning add real value, and setting the roadmap and guardrails to deliver it.",
  },
  {
    icon: Cpu,
    title: "MLOps",
    description: "Taking models from notebook to production, with the deployment, monitoring and retraining that keep them reliable.",
  },
  {
    icon: CloudUpload,
    title: "Data strategy & AWS migration",
    description: "Set the data strategy that led to moving our data platform to AWS, joining ERP, CRM, warehouse and field data.",
  },
  {
    icon: PiggyBank,
    title: "Cost optimisation",
    description: "Running cost optimisation across our data systems so infrastructure and tooling spend tracks the value it delivers.",
  },
  {
    icon: Users,
    title: "Team building & mentoring",
    description: "A resource gap analysis I led made the case for new analyst hires, and I mentor the team as it grows.",
  },
  {
    icon: LayoutDashboard,
    title: "Executive dashboards & KPIs",
    description: "Power BI and Metabase reporting that leadership uses to track operations, supply and demand.",
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

  // The prerendered HTML shows the real figures (so crawlers don't read "0");
  // the count-up animation only takes over once the page is running in a browser.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

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

        {/* STORY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mb-10 md:mb-14"
        >

          <h3 className="text-xl sm:text-2xl font-semibold mb-5 text-foreground">
            Data & AI strategy, MLOps and analytics leadership across Sub-Saharan Africa
          </h3>

          <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            <p>
              I'm a Data Analytics Manager in Nairobi. I've spent 9 years turning messy, multi-source
              data into decisions, from field surveys to ERP systems. At Burn Manufacturing I lead
              analytics for Commercial, Field Operations, Customer Experience and Logistics across a
              multi-country network.
            </p>

            <p>
              I also shape where data and AI take the business. The data strategy I set led to our
              migration to AWS. I run MLOps for the models we put into production and lead cost
              optimisation across our data systems. A resource gap analysis I ran made the case for
              growing the team, and I now mentor the analysts we hired.
            </p>

            <p>
              Before Burn, I designed field data collection and analysis for programme evaluations at
              Dalberg Research. That grounding in international development still shapes how I work:
              rigorous methods, clear communication, and data in service of community-level impact.
              I'm completing an MSc in Data Science at the University of East London, on top of a BSc
              in Statistics. Outside work, I hike.
            </p>
          </div>

        </motion.div>

        {/* SELLING POINTS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 md:mb-16"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="hover:shadow-card transition-all duration-300 bg-gradient-card h-full">
                <CardContent className="p-5 sm:p-6 flex sm:flex-col gap-4 sm:gap-3">

                  <div className="shrink-0 self-start">
                    <div className="p-2.5 rounded-lg bg-primary/10">
                      <item.icon className="w-6 h-6 text-primary" />
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
                {mounted ? (
                  <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                ) : (
                  stat.value
                )}
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
