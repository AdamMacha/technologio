"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Users, Trophy, Target, Clock } from "lucide-react";

export default function About() {
  const t = useTranslations("About");

  const stats = [
    { icon: Users, label: "clients", value: "50+" },
    { icon: Clock, label: "experience", value: "10+" },
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="Our team"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">{t("story.title")}</h2>
              <p className="text-muted-foreground">{t("story.content")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-2 items-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 bg-primary/10 p-3 rounded-full w-fit">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">
                  {t(`stats.${stat.label}`)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
