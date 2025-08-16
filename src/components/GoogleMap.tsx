import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const GoogleMap = () => {
  const { t } = useTranslation();

  return (
    <Card className="p-6 h-[400px] flex flex-col justify-center items-center bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
          <MapPin className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground">
          {t('contact.info.location')}
        </h3>
        <div className="space-y-2 text-muted-foreground">
          <div className="flex items-center justify-center gap-2">
            <Phone className="h-4 w-4" />
            <span>{t('contact.info.phone')}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{t('contact.info.hours')}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto">
          We serve all major cities in Belgium including Brussels, Antwerp, and Ghent.
        </p>
      </div>
    </Card>
  );
};

export default GoogleMap;