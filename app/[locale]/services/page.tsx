'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Globe, Code, Smartphone, Search, Bitcoin, Palette } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Services() {
  const t = useTranslations('Services');

  const services = [
    { icon: Globe, title: 'web', description: 'description.web' },
    { icon: Code, title: 'app', description: 'description.app' },
    { icon: Smartphone, title: 'mobile', description: 'description.mobile' },
    { icon: Search, title: 'seo', description: 'description.seo' },
    { icon: Bitcoin, title: 'blockchain', description: 'description.blockchain' },
    { icon: Palette, title: 'design', description: 'description.design' }
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
              {t('title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{t(`services.${service.title}.title`)}</CardTitle>
                    <CardDescription>
                      {t(`services.${service.title}.description`)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {[1, 2, 3].map((item) => (
                        <li key={item} className="flex items-center">
                          <span className="mr-2">•</span>
                          {t(`services.${service.title}.feature${item}`)}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 