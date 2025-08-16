import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOHeadProps {
    page: 'home' | 'about' | 'gallery';
    customTitle?: string;
    customDescription?: string;
}

const SEOHead = ({ page, customTitle, customDescription }: SEOHeadProps) => {
    const { t, i18n } = useTranslation();
    
    const title = customTitle || t(`seo.${page}.title`);
    const description = customDescription || t(`seo.${page}.description`);
    const baseUrl = 'https://pelep-construction.be';
    const currentPath = window.location.pathname;
    const currentUrl = `${baseUrl}${currentPath}`;
    const germanUrl = `${baseUrl}${currentPath}${currentPath.includes('?') ? '&' : '?'}lang=de`;
    const frenchUrl = `${baseUrl}${currentPath}${currentPath.includes('?') ? '&' : '?'}lang=fr`;

    // Canonical URL logic
    let canonicalUrl = currentUrl;
    if (i18n.language === 'de') canonicalUrl = germanUrl;
    if (i18n.language === 'fr') canonicalUrl = frenchUrl;

    // Keywords
    const keywords = i18n.language === 'en'
        ? "construction belgium, renovation belgium, interior finishes, exterior works, bathroom renovation, romanian builders belgium, brussels construction, antwerp renovation, ghent builders"
        : i18n.language === 'de'
            ? "Bau Belgien, Renovierung Belgien, Innenoberflächen, Außenarbeiten, Badezimmerrenovierung, rumänische Bauarbeiter Belgien, Brüssel Bau, Antwerpen Renovierung, Gent Bauarbeiter"
            : "construction belgique, rénovation belgique, finitions intérieures, travaux extérieurs, rénovation salle de bain, ouvriers roumains belgique, construction bruxelles, rénovation anvers, constructeurs gand";

    // Open Graph locale
    const ogLocale = i18n.language === 'en'
        ? 'en_US'
        : i18n.language === 'de'
            ? 'de_DE'
            : 'fr_BE';

    // Schema.org services
    const services = [
        {
            "@type": "Service",
            "name":
                i18n.language === 'en'
                    ? "Interior Finishes"
                    : i18n.language === 'de'
                        ? "Innenoberflächen"
                        : "Finitions intérieures"
        },
        {
            "@type": "Service",
            "name":
                i18n.language === 'en'
                    ? "Exterior Works"
                    : i18n.language === 'de'
                        ? "Außenarbeiten"
                        : "Travaux extérieurs"
        },
        {
            "@type": "Service",
            "name":
                i18n.language === 'en'
                    ? "Bathroom Renovations"
                    : i18n.language === 'de'
                        ? "Badezimmerrenovierungen"
                        : "Rénovation de salle de bain"
        }
    ];

    return (
        <Helmet>
            <html lang={i18n.language} />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            
            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:locale" content={ogLocale} />
            <meta property="og:site_name" content="Pelep Construction" />
            
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            
            {/* Canonical */}
            <link rel="canonical" href={canonicalUrl} />
            
            {/* Hreflang */}
            <link rel="alternate" hrefLang="en" href={currentUrl} />
            <link rel="alternate" hrefLang="de" href={germanUrl} />
            <link rel="alternate" hrefLang="fr" href={frenchUrl} />
            <link rel="alternate" hrefLang="x-default" href={currentUrl} />
            
            {/* Additional SEO for German market */}
            {i18n.language === 'de' && (
                <>
                    <meta name="geo.region" content="BE" />
                    <meta name="geo.placename" content="Belgium" />
                    <meta name="geo.position" content="50.8503;4.3517" />
                    <meta name="ICBM" content="50.8503, 4.3517" />
                    <meta name="DC.language" content="de" />
                </>
            )}
            {/* Additional SEO for French market */}
            {i18n.language === 'fr' && (
                <>
                    <meta name="geo.region" content="BE" />
                    <meta name="geo.placename" content="Belgique" />
                    <meta name="geo.position" content="50.8503;4.3517" />
                    <meta name="ICBM" content="50.8503, 4.3517" />
                    <meta name="DC.language" content="fr" />
                </>
            )}
            
            {/* Schema.org JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Pelep Construction",
                    "description": description,
                    "url": "https://pelep-construction.be",
                    "telephone": "+32-xxx-xxx-xxx",
                    "address": {
                        "@type": "PostalAddress",
                        "addressCountry": "BE",
                        "addressRegion": "Brussels-Capital Region"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "50.8503",
                        "longitude": "4.3517"
                    },
                    "openingHours": "Mo-Fr 08:00-18:00",
                    "serviceArea": {
                        "@type": "Country",
                        "name": "Belgium"
                    },
                    "services": services
                })}
            </script>
        </Helmet>
    );
};

export default SEOHead;