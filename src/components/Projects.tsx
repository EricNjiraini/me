import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Database, Palette, Smartphone } from "lucide-react";

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const hoverEffect = {
    scale: 1.05,
    boxShadow: "0px 8px 25px rgba(59,130,246,0.4)",
    transition: { type: "spring", stiffness: 200, damping: 15 },
  };

  const skills = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Frontend Development",
      description: "Building responsive, interactive UIs with modern web tech.",
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: "Backend Development",
      description: "Creating secure and efficient server-side applications.",
    },
    {
      icon: <Palette className="w-8 h-8 text-pink-500" />,
      title: "UI/UX Design",
      description: "Designing clean, accessible, and intuitive user experiences.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-green-500" />,
      title: "Mobile Optimization",
      description: "Ensuring seamless experiences across all device sizes.",
    },
  ];

  return (
    <section className="py-20 px-6" id="skills">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <motion.div
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={hoverEffect}
              className="rounded-2xl overflow-hidden"
            >
              <Card className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-blue-400 transition-all">
                <CardContent>
                  <div className="flex flex-col items-center text-center gap-4">
                    {skill.icon}
                    <h3 className="text-xl font-semibold">{skill.title}</h3>
                    <p className="text-sm opacity-80">{skill.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
