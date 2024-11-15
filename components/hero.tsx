'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Code2, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
  const t = useTranslations('Hero');

  return (
    <div className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {t('badge')}
                </span>
              </motion.div>
              
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  {t('title')}
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl">
                {t('subtitle')}
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="w-full sm:w-auto">
                <a href="/contact">{t('contact')}</a>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <a href="/services">{t('services')}</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { icon: Code2, label: t('feature1') },
                { icon: Smartphone, label: t('feature2') },
                { icon: Globe, label: t('feature3') }
              ].map(({ icon: Icon, label }, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-3 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[600px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072"
                alt="Hero image"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}