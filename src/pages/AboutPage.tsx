import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hammer, Users, Award, Clock, CheckCircle, Star, MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import SEOHead from "@/components/SEOHead";
import AnimatedCounter from "@/components/AnimatedCounter";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import profesionalWorkImage from "@/assets/carpenter-working-with-wood.jpg";
import bossPaintLogo from "@/assets/photos/partners/boss-paints.png";
import mathysLogo from "@/assets/photos/partners/mathys.png";
import sikkensLogo from "@/assets/photos/partners/sikkens.png";
import trimetalLogo from "@/assets/photos/partners/trimetal.png";

const AboutPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partners = [
    {
      name: "Boss Paint",
      description: t('about.partnersMaterials.bossPaintsDesc'),
      logo: bossPaintLogo
    },
    {
      name: "Mathys",
      description: t('about.partnersMaterials.mathysDesc'),
        logo: mathysLogo
    },
    {
      name: "Sikkens",
      description: t('about.partnersMaterials.sikkensDesc'),
        logo: sikkensLogo
    },
    {
      name: "Trimetal",
      description: t('about.partnersMaterials.trimetalDesc'),
        logo: trimetalLogo
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SEOHead page="about" />
      {/* Hero Section */}
      <section className="pt-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="pt-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('about.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t('about.commitment.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.commitment.description')}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t('about.values.quality.title')}</h4>
                    <p className="text-muted-foreground">{t('about.values.quality.desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t('about.values.reliability.title')}</h4>
                    <p className="text-muted-foreground">{t('about.values.reliability.desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t('about.values.innovation.title')}</h4>
                    <p className="text-muted-foreground">{t('about.values.innovation.desc')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={profesionalWorkImage}
                  alt="Professional construction work"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">{t('about.stats.projects')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">{t('about.stats.satisfaction')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">{t('about.stats.cities')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">{t('about.stats.support')}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('about.partners.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('about.partners.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {partners.map((partner, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300 bg-card border-border group">
                <img src={partner.logo} alt="" />
                <div className="h-16 mt-4 bg-muted/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                  <span className="text-xl font-bold text-primary">{partner.name}</span>
                </div>
                <p className="text-sm text-muted-foreground">{partner.description}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default AboutPage;