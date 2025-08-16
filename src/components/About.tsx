import { Card } from "@/components/ui/card";
import { Hammer, Users, Award, Clock, Star, CheckCircle, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import AnimatedCounter from "./AnimatedCounter";
import { motion } from "framer-motion";

const About = () => {
  const { t } = useTranslation();
  
  const stats = [
    {
      icon: Hammer,
      value: 200,
      suffix: "+",
      label: t('about.stats.projects'),
      description: t('about.stats.projectsDesc')
    },
    {
      icon: Users,
      value: 100,
      suffix: "%", 
      label: t('about.stats.team'),
      description: t('about.stats.teamDesc')
    },
    {
      icon: Sparkles,
      value: 100,
      suffix: "%",
      label: t('about.stats.premiumMaterials'),
      description: t('about.stats.premiumMaterialsDesc')
    },
    {
      icon: Clock,
      value: 24,
      suffix: "/7",
      label: t('about.stats.support'),
      description: t('about.stats.supportDesc')
    }
  ];

  return (
    <section id="despre" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300 bg-card border-border">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-construction-orange rounded-lg mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                <p className="text-muted-foreground text-sm">{stat.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              {t('about.whyChoose')}
            </h3>
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-construction-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t('about.features.experience.title')}</h4>
                    <p className="text-muted-foreground">{t('about.features.experience.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-construction-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t('about.features.materials.title')}</h4>
                    <p className="text-muted-foreground">{t('about.features.materials.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-construction-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{t('about.features.warranty.title')}</h4>
                    <p className="text-muted-foreground">{t('about.features.warranty.desc')}</p>
                  </div>
                </div>
              </div>
          </div>
          
          <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-construction-orange text-construction-orange" />
                  ))}
                </div>
                <blockquote className="text-lg italic text-foreground mb-4">
                  "{t('about.testimonial.text')}"
                </blockquote>
                <cite className="text-muted-foreground">— {t('about.testimonial.author')}</cite>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;