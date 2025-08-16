import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import GoogleMap from "./GoogleMap";

const Contact = () => {
  const { t } = useTranslation();
  
  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.info.location1'),
      info: t('contact.info.location'),
      subinfo: ""
    },
    {
      icon: Phone,
      title: t('contact.info.phone1'),
      info: t('contact.info.phone'),
      subinfo: t('contact.info.hours')
    },
    {
      icon: Mail,
      title: "Email",
      info: t('contact.info.email'),
      subinfo: ""
    },
    {
      icon: Clock,
      title: t('contact.info.hours1'),
      info: t('contact.info.hours'),
      subinfo: ""
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {t('contact.title')}
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                          <p className="text-primary font-medium">{item.info}</p>
                          {item.subinfo && <p className="text-sm text-muted-foreground">{item.subinfo}</p>}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {t('contact.form.title')}
            </h3>
            <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="space-y-6"
                data-netlify-recaptcha="true"
                >
                {/* Netlify hidden inputs */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                        {t('contact.form.name')} *
                    </label>
                    <Input name="name" placeholder={t('contact.form.name')} required />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                        {t('contact.form.phone')} *
                    </label>
                    <Input name="phone" placeholder={t('contact.info.phone')} required />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.email')} *
                    </label>
                    <Input
                    type="email"
                    name="email"
                    placeholder={t('contact.form.email')}
                    required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.service')}
                    </label>
                    <select
                    name="service"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    >
                    <option value="">{t('contact.form.service')}</option>
                    <option value="interior">{t('contact.form.services.interior')}</option>
                    <option value="exterior">{t('contact.form.services.exterior')}</option>
                    <option value="carpentry">{t('contact.form.services.carpentry')}</option>
                    <option value="renovation">{t('contact.form.services.renovation')}</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.message')} *
                    </label>
                    <Textarea
                    name="message"
                    placeholder={t('contact.form.messagePlaceholder')}
                    rows={4}
                    required
                    />
                </div>
                <div data-netlify-recaptcha="true" />
                <Button variant="hero" className="w-full" type="submit">
                    {t('contact.form.submit')}
                </Button>
                </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;