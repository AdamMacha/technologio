'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export function Features() {
  const features = [
    'Modern Technologies',
    'Responsive Design',
    'Performance Optimization',
    'Security First',
    'SEO Friendly',
    'Custom Solutions',
  ];

  return (
    <section className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team collaboration"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-lg" />
          </motion.div>
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Why Choose Technologio?
                </h2>
                <p className="text-muted-foreground text-lg">
                  We combine expertise with innovation to deliver exceptional digital solutions.
                </p>
              </div>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span className="text-lg">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}