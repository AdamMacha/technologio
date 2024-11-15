'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Code2, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const t = useTranslations('Hero');

  return (
    <div className="relative overflow-hidden bg-background pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            {t('title')}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {t('subtitle')}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild>
              <a href="/contact">{t('contact')}</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/services">{t('services')}</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 flow-root sm:mt-24"
        >
          <div className="relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <div className="relative rounded-md shadow-2xl ring-1 ring-gray-900/10">
              <div className="flex items-center justify-center gap-8 p-8 bg-card">
                <Code2 className="h-12 w-12 text-primary" />
                <Smartphone className="h-12 w-12 text-primary" />
                <Globe className="h-12 w-12 text-primary" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}