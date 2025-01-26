"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const t = useTranslations("Projects");

  const projects = [
    {
      name: "Kryptoměnový projekt + web SolanaBabylon.com",
      description: "projects.solana.description",
      image: "/solana.png",
      link: "https://www.solanababylon.com/",
      tags: ["Next.js", "Solana", "Blockchain"],
    },
    {
      name: "Webová stránka Rychlý šroubek",
      description: "projects.smarthome.description",
      image: "/sroubek.png",
      link: "https://www.rychlysroubek.cz/",
      tags: ["Next.js", "TailwindCSS", "Vercel"],
    },
    {
      name: "Webová aplikace KupSiKontejner.cz",
      description: "projects.financeflow.description",
      image: "/kontejner.png",
      link: "https://www.kupsikontejner.cz/",
      tags: ["Next.js", "TypeScript", "TailwindCSS"],
    },
    {
      name: "Webová stránka Penzion Pod Zámkem",
      description: "projects.ecotrack.description",
      image: "/penzion.png",
      link: "https://www.penzion-pruhonice.cz/",
      tags: ["React", "CSS"],
    },
  ];

  return (
    <>
      <section className="pt-24 pb-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              {t("title")}
            </h1>
            <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>{t(project.description)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button asChild>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        {t("viewProject")}
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
