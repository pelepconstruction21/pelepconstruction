import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Paintbrush, Hammer, Armchair, Puzzle, LayoutPanelTop } from "lucide-react";
import { useTranslation } from "react-i18next";
import interiorImage from "@/assets/photos/hotel-jose-room-finished.jpg";
import exteriorImage from "@/assets/exterior-work.jpg";
import carpentryImage from "@/assets/carpenter-working-with-wood.jpg";

const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: Home,
      title: t('services.interior.title'),
      description: t('services.interior.desc'),
      image: interiorImage,
      features: [t('services.interior.features.feature_1'), t('services.interior.features.feature_2'), t('services.interior.features.feature_3'), t('services.interior.features.feature_4')]
    },
    {
      icon: Paintbrush,
      title: t('services.exterior.title'),
      description: t('services.exterior.desc'),
      image: exteriorImage,
      features: [t('services.exterior.features.feature_1'), t('services.exterior.features.feature_2'), t('services.exterior.features.feature_3'), t('services.exterior.features.feature_4')]
    },
    {
      icon: Hammer,
      title: t('services.carpentry.title'),
      description: t('services.carpentry.desc'),
      image: carpentryImage,
      features: [t('services.carpentry.features.feature_1'), t('services.carpentry.features.feature_2'), t('services.carpentry.features.feature_3'), t('services.carpentry.features.feature_4')]
    }
  ];

  const specialties = [
    {
      icon: Armchair,
      title: t('services.interior_carpentry.title'),
      description: t('services.interior_carpentry.desc')
    },
    {
      icon: Puzzle,
      title: t('services.furniture_fitting.title'),
      description: t('services.furniture_fitting.desc')
    },
    
  ];

  return (
<section id="services" className="py-20 pb-0 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            // Count valid features (not empty and not translation keys)
            const validFeatures = service.features.filter(
              feature => feature && !feature.startsWith('services.')
            );
            // Set a minimum number of features to display for consistent card height
            const minFeatures = 4;
            const featuresToShow = [
              ...validFeatures,
              ...Array(Math.max(0, minFeatures - validFeatures.length)).fill('')
            ];
            return (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
            <div className="relative h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <Icon className="h-8 w-8 text-white mb-2" />
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              
              <div className="space-y-2 mb-6 flex-1">
                {featuresToShow.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 min-h-[1.5rem]">
                {feature ? (
                  <>
                    <div className="w-1.5 h-1.5 bg-construction-orange rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </>
                ) : (
                  // Empty placeholder for consistent spacing
                  <span className="invisible">-</span>
                )}
                  </div>
                ))}
              </div>
              
              <Button
                asChild
                variant="outline"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-auto"
              >
                <a
                  href="#contact"
                  onClick={e => {
                    e.preventDefault();
                    const section = document.getElementById('contact');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {t('nav.contact')}
                </a>
              </Button>
            </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Specialties */}
        <div className="bg-secondary/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            {t('services.additional_title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon;
              return (
                <div key={index} className="text-center p-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{specialty.title}</h4>
                  <p className="text-muted-foreground">{specialty.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;