import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Role {
  title: string;
  period: string;
  points: string[];
}

interface Employer {
  name: string;
  about: string;
  location: string;
  roles: Role[];
}

// Mirrors the CV (src/assets/Eric_Njiraini_Resume.pdf), condensed for the web.
const employers: Employer[] = [
  {
    name: 'Burn Manufacturing',
    about: 'Clean cookstove manufacturer and carbon developer selling in 10+ countries across Sub-Saharan Africa.',
    location: 'Nairobi, Kenya',
    roles: [
      {
        title: 'Data Analytics Manager',
        period: 'Nov 2025 – Present',
        points: [
          'Lead a team of four analysts as the data partner to Commercial, Field Operations, Customer Experience and Logistics, across both the biomass and electric cookstove businesses. A resource gap analysis I ran made the case for growing the team.',
          'Drive AI strategy and run MLOps for the models we put into production on our AWS data platform, and lead cost optimisation across our data systems.',
          'Automated agent commission calculations for about 1,400 field agents, cutting processing from two weeks to three days.',
          'Own the executive dashboards and KPI frameworks used by the CEO, directors and heads of department, cutting the time to key commercial decisions from days to hours. The departments we support rate our contribution 4.5 out of 5.',
          'Ran TAM/SAM/SOM market sizing for Nigeria, Zambia, Malawi and Ethiopia to guide entry and investment decisions.',
          'Set governance standards that give every critical dataset an owner, documentation, validation checks and lineage. Accuracy holds at 97%, and data incidents fell 75% year on year.',
        ],
      },
      {
        title: 'Data Analytics Lead',
        period: 'Jan 2023 – Nov 2025',
        points: [
          'Set the data strategy that led to migrating our data platform to AWS.',
          'Built integrated data models joining ERP, CRM, warehouse and field data into one view of operations and demand.',
          'Developed Python, R and AWS pipelines that standardised and automated multi-source data flows.',
          'Introduced validation and monitoring that cut data inconsistencies, and trained teams in several countries to act on dashboards.',
        ],
      },
      {
        title: 'Business Intelligence Analyst',
        period: 'Jan 2020 – Jan 2023',
        points: [
          'Built 15+ Power BI dashboards for operations, logistics and management reporting.',
          'Automated 90% of recurring reporting, freeing analyst time for deeper analysis.',
          'Built an interim data warehouse that cut reporting turnaround by 90%.',
        ],
      },
    ],
  },
  {
    name: 'Dalberg Research',
    about: 'Global advisory firm working in international development, global health and social impact.',
    location: 'Nairobi, Kenya',
    roles: [
      {
        title: 'Data Processing Officer',
        period: 'Apr 2017 – Sep 2019',
        points: [
          'Designed and deployed data collection systems (KoboCollect, SurveyToGo, ODK) for programme evaluations in several African countries.',
          'Cleaned, validated and analysed survey data, and built dashboards and reports for technical and senior non-technical audiences.',
          'Supported GIS analysis to sharpen programme targeting and planning.',
        ],
      },
    ],
  },
];

const education = [
  { degree: 'MSc Data Science (in progress)', school: 'University of East London', period: '2024 – 2026' },
  { degree: 'BSc Statistics', school: 'Jomo Kenyatta University of Agriculture and Technology', period: '2014 – 2018' },
];

const credentials = [
  'Data Strategy & Governance — PMI',
  'Decision & Risk Management Professional — PMI',
  'Communicating with Executives — PMI',
  'Data Visualization — Tata Consultancy Services',
  'Member, Royal Statistical Society',
  'Member, Kenya National Statistical Society',
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gradient-subtle">
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
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            From field surveys at Dalberg to leading analytics at Burn, with two promotions along the way.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto space-y-10 md:space-y-12">
          {employers.map((employer) => (
            <motion.div
              key={employer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-start gap-3 mb-5">
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">{employer.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{employer.about}</p>
                </div>
              </div>

              <ol className="relative border-l-2 border-primary/25 ml-[1.15rem] space-y-6">
                {employer.roles.map((role, i) => (
                  <li key={role.title} className="pl-6 sm:pl-8 relative">
                    <span
                      className={`absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-primary ${
                        i === 0 && employer === employers[0] ? 'bg-primary' : 'bg-background'
                      }`}
                      aria-hidden="true"
                    />
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
                      <h4 className="text-lg font-semibold text-foreground">{role.title}</h4>
                      <span className="text-sm font-medium text-primary whitespace-nowrap">{role.period}</span>
                    </div>
                    <ul className="space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {role.points.map((point) => (
                        <li key={point} className="flex gap-2.5">
                          <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </motion.div>
          ))}
        </div>

        {/* Education & credentials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-5xl mx-auto mt-12 md:mt-16 grid md:grid-cols-2 gap-4 sm:gap-6"
        >
          <Card className="bg-card/80 h-full">
            <CardContent className="p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Education</h3>
              </div>
              <ul className="space-y-4">
                {education.map((item) => (
                  <li key={item.degree}>
                    <p className="font-medium text-foreground">{item.degree}</p>
                    <p className="text-sm text-muted-foreground">{item.school} · {item.period}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/80 h-full">
            <CardContent className="p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Certifications & memberships</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {credentials.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
