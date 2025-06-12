"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Download,
  Code,
  TestTube,
  Zap,
  Users,
  Award,
  Calendar,
  Building,
  GraduationCap,
  ChevronDown,
  Star,
  Sparkles,
  ArrowRight,
  Linkedin,
  Facebook,
  MessageCircle,
  ExternalLink,
  Map,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
};

// Tool data with logos
const toolCategories = [
  {
    title: "QA Expertise",
    icon: TestTube,
    color: "black",
    tools: [
      { name: "Manual Testing", logo: "logo/manual.png?height=40&width=40" },
      {
        name: "Automation Testing",
        logo: "/logo/automation_testing.png?height=40&width=40",
      },
      {
        name: "Performance Testing",
        logo: "/logo/performance.png?height=40&width=40",
      },
      { name: "API Testing", logo: "/logo/api.png?height=50&width=50" },
    ],
  },
  {
    title: "Automation Tools",
    icon: Code,
    color: "green",
    tools: [
      { name: "Selenium", logo: "/logo/selenium.png?height=40&width=40" },
      { name: "Cypress", logo: "/logo/cypress.png?height=40&width=40" },
      { name: "Python", logo: "/logo/python.png?height=40&width=40" },
      { name: "JMeter", logo: "/logo/jmeter.avif?height=40&width=40" },
    ],
  },
  {
    title: "Development Tools",
    icon: Zap,
    color: "purple",
    tools: [
      { name: "GitHub", logo: "/logo/github.png?height=40&width=40" },
      { name: "Postman", logo: "/logo/postman.webp?height=40&width=40" },
      {
        name: "Google Sheets",
        logo: "/logo/googlesheet.png?height=40&width=40",
      },
      { name: "VS Code", logo: "/logo/vscode.png?height=40&width=40" },
    ],
  },
  {
    title: "AI & Analytics",
    icon: Sparkles,
    color: "orange",
    tools: [
      { name: "AI/ML Testing", logo: "/logo/ai.png?height=40&width=40" },
      { name: "ChatGPT", logo: "/logo/chatgpt.png?height=40&width=40" },
      {
        name: "Data Analysis",
        logo: "/logo/dataanalysist.png?height=40&width=40",
      },
      { name: "Test Analytics", logo: "/logo/test.png?height=40&width=40" },
    ],
  },
];

// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "education",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center z-50">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-20 h-20 border-4 border-white/30 border-t-white rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.h2
            className="text-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Kishor Tiwari
          </motion.h2>
          <motion.p
            className="text-blue-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Quality Assurance Engineer
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative">
      <FloatingParticles />

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-slate-800"
              whileHover={{ scale: 1.05 }}
            >
              Kishor Tiwari
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Experience", "Education", "Contact"].map(
                (item, index) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 relative ${
                      activeSection === item.toLowerCase()
                        ? "text-blue-600"
                        : "text-slate-600"
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {item}
                    {activeSection === item.toLowerCase() && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                        layoutId="activeSection"
                      />
                    )}
                  </motion.button>
                )
              )}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 px-6 relative overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative w-32 h-32 mx-auto mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
              <motion.div
                className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold relative overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-0"
                  whileHover={{ opacity: 1 }}
                />
                <img
                  src="/logo/profile.jpg"
                  className="object-cover fill aspect-square"
                />
                {/* <span className="relative z-10">KT</span> */}
              </motion.div>
              <motion.div
                className="absolute -inset-2 border-2 border-blue-300 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold text-slate-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Kishor Tiwari
            </motion.h1>

            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl text-blue-600 mb-6 font-medium">
                Quality Assurance Engineer
              </h2>
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
              </motion.div>
            </motion.div>

            <motion.p
              className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Detail-oriented QA Engineer with hands-on experience in testing
              SaaS product, interactive dashboards, CRM, and AL/ML and complex
              software systems. Skilled in automation testing using tools like
              Selenium, Cypress, and Python in a Hybrid POM framework integrated
              with Pytest. Passionate about leveraging cutting-edge AI tools to
              optimize testing workflows and ensure software quality.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/Kishor_Tiwari_CV.pdf"
                  target="_blank"
                  className="bg-blue-600 hover:bg-blue-700 group flex items-center justify-between h-11 rounded-md px-8 text-white"
                >
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Download CV
                </a>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="group"
                >
                  <Mail className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex justify-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center text-slate-600"
              >
                <MapPin className="h-4 w-4 mr-2 text-red-500" />
                <span>Kathmandu, Nepal</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center text-slate-600"
              >
                <Phone className="h-4 w-4 mr-2 text-green-500" />
                <span>9861681314</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex justify-center mt-6 space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {[
                {
                  icon: Linkedin,
                  color: "bg-blue-600",
                  href: "https://www.linkedin.com/in/kishor-tiwari-aa848517a/",
                },
                {
                  icon: Facebook,
                  color: "bg-blue-500",
                  href: "https://www.facebook.com/kishor.tiwari.737/",
                },
                {
                  icon: MessageCircle,
                  color: "bg-green-500",
                  href: "https://web.whatsapp.com/",
                },
                {
                  icon: Github,
                  color: "bg-slate-800",
                  href: "https://github.com/Itsmekishortiwari ",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} text-white p-2 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className="text-center mt-12"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <ChevronDown
                className="h-8 w-8 text-slate-400 mx-auto cursor-pointer hover:text-blue-600 transition-colors"
                onClick={() => scrollToSection("about")}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl font-bold text-center text-slate-800 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Professional Profile
                </h3>
                <motion.p
                  className="text-slate-600 leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  I'm a passionate Quality Assurance Engineer with extensive
                  experience in testing complex software systems, SaaS products,
                  and AI/ML applications. My expertise spans both manual and
                  automated testing, with a strong focus on leveraging modern
                  tools and AI to optimize testing workflows.
                </motion.p>
                <motion.p
                  className="text-slate-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  With hands-on experience across 15+ projects for national and
                  international clients, I bring strong problem-solving
                  abilities and a commitment to delivering reliable,
                  high-performing solutions.
                </motion.p>
              </motion.div>
              <motion.div
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={staggerContainer}
              >
                {[
                  {
                    icon: TestTube,
                    value: "15+",
                    label: "Projects Tested",
                    color: "blue",
                  },
                  {
                    icon: Code,
                    value: "AI/ML",
                    label: "Testing Expert",
                    color: "green",
                  },
                  {
                    icon: Users,
                    value: "Team",
                    label: "Leadership",
                    color: "purple",
                  },
                  {
                    icon: Zap,
                    value: "Automation",
                    label: "Specialist",
                    color: "orange",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <motion.div
                          className={`h-12 w-12 mx-auto mb-3 rounded-full bg-${item.color}-100 flex items-center justify-center`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <item.icon
                            className={`h-6 w-6 text-${item.color}-600`}
                          />
                        </motion.div>
                        <h4 className="font-semibold text-slate-800 text-lg">
                          {item.value}
                        </h4>
                        <p className="text-sm text-slate-600">{item.label}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section
        id="skills"
        className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50 relative"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl font-bold text-center text-slate-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Skills & Tools
            </motion.h2>
            <motion.p
              className="text-center text-slate-600 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              A comprehensive toolkit for ensuring software quality across all
              platforms and technologies
            </motion.p>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {toolCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  variants={fadeInUp}
                  className="group"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-blue-200">
                    <CardHeader className="text-center pb-4">
                      <motion.div
                        className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-${category.color}-400 to-${category.color}-600 flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <category.icon className={`h-8 w-8 text-slate-600`} />
                      </motion.div>
                      <CardTitle className="text-lg font-semibold text-slate-800">
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="grid grid-cols-2 gap-3">
                        {category.tools.map((tool, toolIndex) => (
                          <motion.div
                            key={toolIndex}
                            className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group/tool"
                            whileHover={{ scale: 1.05, y: -2 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: categoryIndex * 0.1 + toolIndex * 0.05,
                            }}
                          >
                            <motion.div
                              className="w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <img
                                src={tool.logo || "/placeholder.svg"}
                                alt={tool.name}
                                className="w-6 h-6 object-contain"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = "none";
                                  const parent = target.parentElement;
                                  if (parent) {
                                    parent.innerHTML = `<div class="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded text-white text-xs flex items-center justify-center font-bold">${tool.name.charAt(
                                      0
                                    )}</div>`;
                                  }
                                }}
                              />
                            </motion.div>
                            <span className="text-xs font-medium text-slate-700 text-center leading-tight group-hover/tool:text-blue-600 transition-colors">
                              {tool.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section id="experience" className="py-16 px-6 bg-white relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Professional Journey
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600" />

              <div className="space-y-12">
                {[
                  {
                    title: "Junior QA Engineer",
                    company: "Palm Mind Technologies",
                    period: "Jul 2024 – Present",
                    status: "current",
                    color: "blue",
                    achievements: [
                      "Successfully contributed to 15+ projects involving both national and international clients, delivering high-quality QA support.",
                      " Tested AI-powered chatbots, live chat systems, and dynamic dashboards to ensure seamless user experience and system functionality.",
                      "Automated regression and functional test cases using Selenium with Python in a Hybrid POM framework integrated with Pytest, improving test efficiency and coverage.",
                      "Performed load and performance testing using Apache JMeter, ensuring application stability under peak conditions.",
                      " Acted as a QA Lead, mentoring interns, guiding junior testers, and overseeing the end-to-end QA process.",
                      "Worked collaboratively with developers to identify, log, and resolve critical software defects, ensuring timely releases.",
                      " Created and maintained detailed test cases, bug reports, feature validation documents, and user manuals for clients and internal use.",
                    ],
                  },
                  {
                    title: "QA Intern",
                    company: "Amnil Technologies",
                    period: "Jan 2024 – Apr 2024",
                    status: "completed",
                    color: "green",
                    achievements: [
                      "Worked on Process Maker and CMS projects",
                      "Gained practical experience in manual testing and API testing (Postman)",
                      "Learned performance testing (JMeter) and automation (Cypress)",
                      "Collaborated with team to ensure software quality and optimize testing processes",
                    ],
                  },
                ].map((job, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-20"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {/* Timeline dot */}
                    <motion.div
                      className={`absolute left-6 w-4 h-4 bg-${job.color}-500 rounded-full border-4 border-white shadow-lg`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.2 + 0.3,
                        type: "spring",
                        stiffness: 300,
                      }}
                    />

                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card
                        className={`border-l-4 border-l-${job.color}-500 shadow-lg hover:shadow-xl transition-all duration-300`}
                      >
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-xl text-slate-800 flex items-center gap-2">
                                {job.title}
                                {job.status === "current" && (
                                  <motion.div
                                    className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{
                                      duration: 2,
                                      repeat: Number.POSITIVE_INFINITY,
                                    }}
                                  >
                                    Current
                                  </motion.div>
                                )}
                              </CardTitle>
                              <CardDescription
                                className={`text-lg font-medium text-${job.color}-600`}
                              >
                                {job.company}
                              </CardDescription>
                            </div>
                            <Badge
                              variant="outline"
                              className={`text-${job.color}-600 border-${job.color}-600`}
                            >
                              <Calendar className="h-3 w-3 mr-1" />
                              {job.period}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {job.achievements.map(
                              (achievement, achievementIndex) => (
                                <motion.li
                                  key={achievementIndex}
                                  className="flex items-start text-slate-600"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{
                                    delay: index * 0.2 + achievementIndex * 0.1,
                                  }}
                                >
                                  <motion.span
                                    className={`w-2 h-2 bg-${job.color}-500 rounded-full mt-2 mr-3 flex-shrink-0`}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                      delay:
                                        index * 0.2 +
                                        achievementIndex * 0.1 +
                                        0.2,
                                    }}
                                  />
                                  {achievement}
                                </motion.li>
                              )
                            )}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Education Section */}
      <section
        id="education"
        className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Education
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  degree: "Bachelor of Information Management",
                  institution: "Shanker Dev Campus",
                  color: "blue",
                  icon: GraduationCap,
                },
                {
                  degree: "Management",
                  institution: "Oxford English Boarding School",
                  color: "blue",
                  icon: Building,
                },
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                    <CardHeader className="text-center">
                      <motion.div
                        className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-${edu.color}-400 to-${edu.color}-600 flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <edu.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <CardTitle className="text-xl text-slate-800">
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-slate-600">
                        {edu.institution}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="flex justify-center items-center space-x-4">
                        {/* <Badge
                          variant="outline"
                          className={`text-${edu.color}-600 border-${edu.color}-600 text-lg px-3 py-1`}
                        >
                          GPA: {edu.gpa}
                        </Badge> */}
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        >
                          <Award className="h-6 w-6 text-yellow-500" />
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
              Let's Connect
            </h2>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white text-center">
                    <motion.h3
                      className="text-2xl font-bold mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      Ready to ensure your software quality?
                    </motion.h3>
                    <motion.p
                      className="text-blue-100"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      Let's discuss how I can help you deliver reliable,
                      high-performing software solutions
                    </motion.p>
                  </div>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          icon: Mail,
                          label: "Email",
                          value: "itsmekishortiwari@gmail.com",
                          color: "blue",
                        },
                        {
                          icon: Phone,
                          label: "Phone",
                          value: "9861681314",
                          color: "green",
                        },
                        {
                          icon: Map,
                          label: "Location",
                          value: "Shorakhutte-16, Kathmandu",
                          color: "blue",
                        },
                        {
                          icon: ExternalLink,
                          label: "Social Profiles",
                          value: (
                            <div className="flex space-x-2 mt-1">
                              {[
                                {
                                  icon: Linkedin,
                                  color: "bg-blue-600",
                                  href: "https://linkedin.com/",
                                },
                                {
                                  icon: Facebook,
                                  color: "bg-blue-500",
                                  href: "https://facebook.com/",
                                },
                                {
                                  icon: MessageCircle,
                                  color: "bg-green-500",
                                  href: "https://wa.me/9861681314",
                                },
                                {
                                  icon: Github,
                                  color: "bg-slate-800",
                                  href: "https://github.com/",
                                },
                              ].map((social, idx) => (
                                <motion.a
                                  key={idx}
                                  href={social.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`${social.color} text-white p-1.5 rounded-md flex items-center justify-center hover:shadow-md transition-all duration-300`}
                                  whileHover={{ scale: 1.2, y: -2 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <social.icon className="h-4 w-4" />
                                </motion.a>
                              ))}
                            </div>
                          ),
                          color: "purple",
                        },
                      ].map((contact, index) => (
                        <motion.div
                          key={index}
                          className={`flex items-center p-4 bg-${contact.color}-50 rounded-xl hover:bg-${contact.color}-100 transition-all duration-300 group cursor-pointer`}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05, x: 10 }}
                        >
                          <motion.div
                            className={`h-12 w-12 bg-${contact.color}-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <contact.icon className="h-6 w-6 text-white" />
                          </motion.div>
                          <div>
                            <p className="font-semibold text-slate-800">
                              {contact.label}
                            </p>
                            {typeof contact.value === "string" ? (
                              <p className="text-slate-600 group-hover:text-slate-800 transition-colors">
                                {contact.value}
                              </p>
                            ) : (
                              contact.value
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <motion.div
                      className="text-center mt-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg group"
                        >
                          <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                          Start a Conversation
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-2">Kishor Tiwari</h3>
            <p className="text-slate-400 mb-4">Quality Assurance Engineer</p>

            {/* <motion.div
              className="flex justify-center space-x-4 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {[
                { icon: Linkedin, color: "hover:text-blue-400", href: "https://linkedin.com/" },
                { icon: Facebook, color: "hover:text-blue-300", href: "https://facebook.com/" },
                { icon: MessageCircle, color: "hover:text-green-400", href: "https://wa.me/9861681314" },
                { icon: Github, color: "hover:text-gray-300", href: "https://github.com/" },
                { icon: Mail, color: "hover:text-red-400", href: "mailto:itsmekishortiwari@gmail.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-slate-500 ${social.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div> */}

            <motion.p
              className="text-slate-500 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              © 2024 Kishor Tiwari. All rights reserved. Built with passion for
              quality.
            </motion.p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
