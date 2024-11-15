'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Globe, Code, Smartphone, Search, Bitcoin, Palette } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function Services() {
  const t = useTranslations('Services');

  const services = [
    { icon: Globe, title: 'web', color: 'text-blue-500' },
    { icon: Code, title: 'app', color: 'text-purple-500' },
    { icon: Smartphone, title: 'mobile', color: 'text-green-500' },
    { icon: Search, title: 'seo', color: 'text-yellow-500' },
    { icon: Bitcoin, title: 'crypto', color: 'text-orange-500' },
    { icon: Palette, title: 'design', color: 'text-pink-500' },
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            {t('subtitle')}
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden group">
                <CardHeader>
                  <div className={`${service.color} mb-4`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle>{t(`${service.title}.title`)}</CardTitle>
                  <CardDescription>{t(`${service.title}.description`)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}