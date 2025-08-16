import { get } from 'http';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      btn: {
        getquote: "Get free quote",
        services: "Our services"
      },
      // Navigation
      nav: {
        home: "Home",
        about: "About Us",
        services: "Services", 
        gallery: "Gallery",
        contact: "Contact",
        getQuote: "Message Now"
      },
      // Hero Section
      hero: {
        title: "Professional Finishes",
        subtitle: "in Belgium", 
        description: "We transform your spaces with superior quality finishes. Experienced construction team specializing in renovations and high-end finishes throughout Belgium.",
        getQuote: "Request Free Quote",
        viewWork: "View Our Work",
        features: {
          experience: "Premium Materials",
          certified: "Belgian certifications", 
          warranty: "Extended warranty"
        }
      },
      // About Section
      about: {
        title: "About Pelep Construction",
        description: "We are a Belgian construction company specialized in high-end interior finishes. From painting to custom woodwork, we use only premium materials and trusted techniques to deliver clean, modern results. Quality, precision, and reliability — built into every project.",
        commitment: {
          title: "Our Commitment to Excellence",
          description: "We believe that every construction project deserves the highest level of craftsmanship and attention to detail. Our team combines modern techniques with proven methods to deliver outstanding results that exceed expectations."
        },
        values: {
          quality: {
            title: "Uncompromising Quality",
            desc: "Every project is executed with precision using only premium materials and proven techniques."
          },
          reliability: {
            title: "Reliable Partnership",
            desc: "We stand by our commitments and deliver projects on time and within budget."
          },
          innovation: {
            title: "Modern Solutions",
            desc: "We stay current with the latest construction techniques and Belgian building standards."
          }
        },
        partners: {
            title: "Our Trusted Partners",
            description: "We collaborate with industry-leading brands and use only premium-grade materials to ensure top-tier quality in every project."
        },
        partnersMaterials: {
            bossPaintsDesc: "High-quality paints and coatings for interior and exterior finishes.",
            mathysDesc: "Specialized in professional paint solutions for various surfaces.",
            sikkensDesc: "Innovative paint systems for professionals, ensuring durability and aesthetics.",
            trimetalDesc: "Expertise in decorative and protective coatings for all types of surfaces."
        },
        stats: {
          projects: "Projects Completed",
          projectsDesc: "Quality finishes throughout Belgium",
          team: "Professional Team", 
          teamDesc: "Specialized and certified craftsmen",
          premiumMaterials: "Premium Materials",
          premiumMaterialsDesc: "Belgian premium quality materials",
          support: "Client Support",
          supportDesc: "Available for emergencies",
          satisfaction: "Client Satisfaction",
          cities: "Big Cities Served",
        },
        whyChoose: "Why Choose Pelep Construction?",
        features: {
          experience: {
            title: "Local Experience",
            desc: "We perfectly know Belgian regulations and standards."
          },
          materials: {
            title: "Premium Materials", 
            desc: "We collaborate with local suppliers for the best quality materials."
          },
          warranty: {
            title: "Extended Warranty",
            desc: "We offer warranty on all work for your peace of mind."
          }
        },
        testimonial: {
          text: "The quality and professionalism of the Pelep Construction team impressed me. The apartment renovation went perfectly, respecting the budget and established deadlines.",
          author: "Maria D., Brussels"
        }
      },
      // Services Section
      services: {
        title: "Our Services",
        description: "We offer complete construction and renovation solutions, adapted to Belgian standards and your specific needs.",
        interior: {
          title: "Interior Finishes",
          desc: "Complete interior renovations, from painting to flooring and tiling.",
          features: {
            feature_1: "Wallpaper installation",
            feature_2: "Plastreing",
            feature_3: "Painting",
            feature_4: "Decorative Finishes"
            }
          
        },
        exterior: {
          title: "Private House",
          desc: "Thermal insulation, facade renovations, and exterior finishes.",
          features: {
            feature_1: "Facade finishes",
          }

        },
        carpentry: {
          title: "Carpentry", 
          desc: "Professional woodwork, custom furniture, and precision carpentry solutions.",
          features: {
            feature_4: "Doors",
            feature_1: "Custom Furniture",
            feature_2: "Baseboards",
            feature_3: "Wooder Flooring",
          }
        },
        additional_title: "Additional Specialties",
        custom_wood_structures: {
            title: "Custom Wood Structures",
            desc: "Design and construction of pergolas, gazebos, decks, and other personalized wooden structures."
        },
        interior_carpentry: {
            title: "Interior Carpentry",
            desc: "Installation and finishing of stairs, paneling, exposed beams, and other wooden interior features."
        },
        furniture_fitting: {
            title: "Furniture Fitting & Assembly",
            desc: "Professional assembly, fitting, and installation of custom or modular furniture pieces."
        }

      },
      // Gallery Section
      gallery: {
        title: "Our Gallery",
        description: "Discover some of our most recent projects completed in Belgium. Each work reflects our commitment to quality and details.",
        categories: {
          all: "All",
          interior: "Interior",
          exterior: "Exterior", 
          renovation: "Renovation",
        },
        projects: {
          modernApartment: {
            title: "Hotel jose interior renovation",
            desc: "Complete finishes for hotel room, Brussels",
          },
          privateHouse: {
            title: "Private House Renovation",
            desc: "Complete insulation system, Antwerp"
          },
          hotelJose: {
            title: "Installation of decorative panels",
            desc: "Installation of decorative panels in the lobby and rooms of Hotel Jose, Brussels."
          },
          modernLiving: {
            title: "Hotel Jose Room",
            desc: "Hotel room renovation with modern design and high-end finishes."
          },
          renovatedFacade: {
            title: "Ceiling painting", 
            desc: "Painting of the ceiling - private house"
          },
          wallpaperInstalation: {
            title: "Wallpaper installation",
            desc: "Installation of decorative wallpaper in the living room, Brussels"
          },
          exteriorRenovation: {
            title: "Exterior Renovation",
            desc: "Complete exterior renovation of a private house, including facade and roof work.",
        },
        exteriorHouseFinishing: {
          title: "Exterior House Finishing",
          desc: "Complete exterior finishing of a private house, including facade and roof work.",
        },
        exteriorFinishinGPainting: {
            title: "Exterior Finishing and Painting",
            desc: "Complete exterior finishing and painting of a private house, including facade and roof work.",
        },
        exteriorHouseFinishing2: {
            title: "Exterior House Finishing 2",
            desc: "Complete exterior finishing of a private house, including facade and roof work.",
        },
        exteriorFinishinGInProgress: {
            title: "Exterior Finishing in Progress",
            desc: "Ongoing exterior finishing work on a private house, including facade and roof work.",
        },
        interiorHouseWallFinished: {
            title: "Interior House Wall Finished",
            desc: "Complete interior wall finishing of a private house, including painting and decorative elements.",
        }

        },
        results: "Showing {{count}} projects",
        videos: {
          title: "Our Videos",
          description: "Watch our construction and renovation projects in action",
          video_1: {
            title: "Golf Club & Academy Beaufays",
            des: "Construction of a modern golf club and academy in Beaufays, Belgium. Featuring high-end finishes and state-of-the-art facilities.",
            location: "Beaufays, Belgium",
            date: "2025",
          },
          video_2: {
            title: "Video 2",
            des: "Construction of a modern golf club and academy in Beaufays, Belgium. Featuring high-end finishes and state-of-the-art facilities.",
            location: "Beaufays, Belgium",
            date: "2025",
          }
        },
      },
      // Contact Section
      contact: {
        title: "Contact Us",
        description: "Ready to transform your space? Contact us for a free consultation and personalized quote.",
        info: {
          location1: "Location",
          location: "Belgium -Erembodegem Dorp 49/21 Aalst 9320",
          phone1: "Phone",
          phone: "+32 485 98 25 09",
          email: "ioan@pelepconstruction.com",
          hours1: "Opening hours: ",
          hours: "Monday - Friday: 7:00 - 17:00"
        },
        whyChoose: "Why Choose Us?",
        benefits: {
          freeConsultation: "Free consultation and quote",
          qualityMaterials: "Premium quality materials",
          experiencedTeam: "Experienced and certified team",
          competitivePrices: "Competitive and transparent prices",
          fullWarranty: "Full warranty on all work",
          fastExecution: "Fast and efficient execution"
        },
        form: {
          title: "Request Your Quote",
          name: "Full Name",
          phone: "Phone Number",
          email: "Email Address",
          service: "Service Type",
          services: {
            interior: "Interior Finishes",
            exterior: "Exterior Works", 
            carpentry: "Carpentry",
            renovation: "Renovation",
            other: "Other"
          },
          message: "Project Description",
          messagePlaceholder: "Describe your project in detail...",
          submit: "Send Email"
        }
      },
      // Footer
      footer: {
        company: "Pelep Construction",
        description: "Professional construction and renovation services throughout Belgium. Specialized in high-quality interior and exterior finishes with exceptional attention to detail.",
        quickLinks: "Quick Links",
        services: "Our Services",
        contact: "Contact Info",
        followUs: "Follow Us",
        rights: "All rights reserved",
        privacy: "Privacy Policy",
        terms: "Terms & Conditions",
        gdpr: "GDPR"
      },
      // SEO Meta
      seo: {
        home: {
            title: "Pelep Construction - High-Quality Finishes in Belgium | Interior & Exterior Renovations",
            description: "Construction and renovation services based in Aalst, Belgium. Interior finishes, exterior works, carpentry. Trusted quality and professional results across Belgium."
        },
        about: {
            title: "About Pelep Construction - Construction Company in Aalst, Belgium",
            description: "Discover Pelep Construction, a Belgian company based in Aalst, specializing in premium interior and exterior finishes for residential and commercial projects."
        },
        gallery: {
            title: "Gallery - Pelep Construction Projects in Belgium | Before & After",
            description: "Explore completed construction and renovation projects by Pelep Construction across Belgium. Interior and exterior finishes, carpentry work, and more in Brussels, Antwerp, and Ghent."
        }
    }
    }
  },
  de: {
  "translation": {
    "btn": {
      "getquote": "Kostenloses Angebot einholen",
      "services": "Unsere Dienstleistungen"
    },
    "nav": {
      "home": "Startseite",
      "about": "Über uns",
      "services": "Dienstleistungen",
      "gallery": "Galerie",
      "contact": "Kontakt",
      "getQuote": "Jetzt Nachricht senden"
    },
    "hero": {
      "title": "Professionelle Oberflächen",
      "subtitle": "in Belgien",
      "description": "Wir verwandeln Ihre Räume mit hochwertigen Oberflächen. Erfahrenes Bau-Team, spezialisiert auf Renovierungen und hochwertige Ausführungen in ganz Belgien.",
      "getQuote": "Kostenloses Angebot anfordern",
      "viewWork": "Unsere Arbeiten ansehen",
      "features": {
        "experience": "Hochwertige Materialien",
        "certified": "Belgische Zertifizierungen",
        "warranty": "Erweiterte Garantie"
      }
    },
    "about": {
      "title": "Über Pelep Construction",
      "description": "Wir sind ein belgisches Bauunternehmen, das sich auf hochwertige Innenausbauarbeiten spezialisiert hat. Von Malerarbeiten bis hin zu maßgefertigten Holzarbeiten verwenden wir nur hochwertige Materialien und bewährte Techniken, um saubere, moderne Ergebnisse zu liefern. Qualität, Präzision und Zuverlässigkeit – in jedem Projekt verankert.",
      "commitment": {
        "title": "Unser Engagement für Exzellenz",
        "description": "Wir glauben, dass jedes Bauprojekt das höchste Maß an Handwerkskunst und Aufmerksamkeit für Details verdient. Unser Team kombiniert moderne Techniken mit bewährten Methoden, um herausragende Ergebnisse zu erzielen, die Erwartungen übertreffen."
      },
      "values": {
        "quality": {
          "title": "Kompromisslose Qualität",
          "desc": "Jedes Projekt wird präzise mit hochwertigen Materialien und bewährten Techniken ausgeführt."
        },
        "reliability": {
          "title": "Zuverlässige Partnerschaft",
          "desc": "Wir halten unsere Zusagen ein und liefern Projekte termingerecht und im Budget."
        },
        "innovation": {
          "title": "Moderne Lösungen",
          "desc": "Wir bleiben auf dem neuesten Stand der Bautechniken und belgischen Standards."
        }
      },
      "partners": {
        "title": "Unsere vertrauenswürdigen Partner",
        "description": "Wir arbeiten mit führenden Marken der Branche zusammen und verwenden nur Materialien in Premiumqualität, um höchste Qualität bei jedem Projekt zu gewährleisten."
      },
      "partnersMaterials": {
        "bossPaintsDesc": "Hochwertige Farben und Beschichtungen für Innen- und Außenbereiche.",
        "mathysDesc": "Spezialisiert auf professionelle Farblösungen für verschiedene Oberflächen.",
        "sikkensDesc": "Innovative Farbsysteme für Profis, die Langlebigkeit und Ästhetik garantieren.",
        "trimetalDesc": "Expertise in dekorativen und schützenden Beschichtungen für alle Oberflächentypen."
      },
      "stats": {
        "projects": "Abgeschlossene Projekte",
        "projectsDesc": "Qualitätsausführungen in ganz Belgien",
        "team": "Professionelles Team",
        "teamDesc": "Spezialisierte und zertifizierte Fachkräfte",
        "premiumMaterials": "Hochwertige Materialien",
        "premiumMaterialsDesc": "Belgische Materialien in Premiumqualität",
        "support": "Kundensupport",
        "supportDesc": "Für Notfälle verfügbar",
        "satisfaction": "Kundenzufriedenheit",
        "cities": "Großstädte bedient"
      },
      "whyChoose": "Warum Pelep Construction wählen?",
      "features": {
        "experience": {
          "title": "Lokale Erfahrung",
          "desc": "Wir kennen die belgischen Vorschriften und Standards genau."
        },
        "materials": {
          "title": "Hochwertige Materialien",
          "desc": "Wir arbeiten mit lokalen Lieferanten zusammen, um die besten Materialien zu erhalten."
        },
        "warranty": {
          "title": "Erweiterte Garantie",
          "desc": "Wir bieten Garantie auf alle Arbeiten für Ihre Sicherheit."
        }
      },
      "testimonial": {
        "text": "Die Qualität und Professionalität des Teams von Pelep Construction haben mich beeindruckt. Die Wohnungsrenovierung verlief perfekt, im Rahmen des Budgets und der festgelegten Fristen.",
        "author": "Maria D., Brüssel"
      }
    },
    "services": {
      "title": "Unsere Dienstleistungen",
      "description": "Wir bieten umfassende Bau- und Renovierungslösungen, angepasst an belgische Standards und Ihre spezifischen Bedürfnisse.",
      "interior": {
        "title": "Innenausbau",
        "desc": "Komplette Innenrenovierungen, von Malerarbeiten bis zu Bodenbelägen und Fliesenarbeiten.",
        "features": {
          "feature_1": "Tapeteninstallation",
          "feature_2": "Verputzarbeiten",
          "feature_3": "Malerarbeiten",
          "feature_4": "Dekorative Oberflächen"
        }
      },
      "exterior": {
        "title": "Privathaus",
        "desc": "Wärmedämmung, Fassadenrenovierungen und Außenarbeiten.",
        "features": {
          "feature_1": "Fassadenarbeiten"
        }
      },
      "carpentry": {
        "title": "Tischlerei",
        "desc": "Professionelle Holzarbeiten, maßgefertigte Möbel und präzise Schreinerlösungen.",
        "features": {
          "feature_1": "Maßgefertigte Möbel",
          "feature_2": "Sockelleisten",
          "feature_3": "Holzböden",
          "feature_4": "Türen"
        }
      },
      "additional_title": "Weitere Spezialgebiete",
      "custom_wood_structures": {
        "title": "Maßgeschneiderte Holzkonstruktionen",
        "desc": "Planung und Bau von Pergolen, Pavillons, Terrassen und anderen personalisierten Holzkonstruktionen."
      },
      "interior_carpentry": {
        "title": "Innenausbau in Holz",
        "desc": "Montage und Fertigstellung von Treppen, Wandverkleidungen, sichtbaren Balken und anderen Holzinnenausstattungen."
      },
      "furniture_fitting": {
        "title": "Möbelmontage & -anpassung",
        "desc": "Professionelle Montage, Anpassung und Installation von maßgefertigten oder modularen Möbelstücken."
      }
    },
    "gallery": {
      "title": "Unsere Galerie",
      "description": "Entdecken Sie einige unserer neuesten Projekte in Belgien. Jedes Werk spiegelt unser Engagement für Qualität und Details wider.",
      "categories": {
        "all": "Alle",
        "interior": "Innenbereich",
        "exterior": "Außenbereich",
        "renovation": "Renovierung"
      },
      "projects": {
        "modernApartment": {
          "title": "Innenrenovierung Hotel Jose",
          "desc": "Komplette Ausführungen für Hotelzimmer, Brüssel"
        },
        "privateHouse": {
          "title": "Privathaus-Renovierung",
          "desc": "Komplettes Dämmsystem, Antwerpen"
        },
        "hotelJose": {
          "title": "Installation von Dekorpaneelen",
          "desc": "Installation von Dekorpaneelen in der Lobby und den Zimmern des Hotel Jose, Brüssel."
        },
        "modernLiving": {
          "title": "Hotelzimmer Jose",
          "desc": "Hotelzimmer-Renovierung mit modernem Design und hochwertigen Ausführungen."
        },
        "renovatedFacade": {
          "title": "Deckenanstrich",
          "desc": "Anstrich der Decke – Privathaus"
        },
        "wallpaperInstalation": {
          "title": "Tapeteninstallation",
          "desc": "Installation von dekorativer Tapete im Wohnzimmer, Brüssel"
        },
        "exteriorRenovation": {
          "title": "Außenrenovierung",
          "desc": "Komplette Außenrenovierung eines Privathauses, inklusive Fassade und Dacharbeiten."
        },
        "exteriorHouseFinishing": {
          "title": "Außenarbeiten am Haus",
          "desc": "Komplette Außenarbeiten an einem Privathaus, inklusive Fassade und Dach."
        },
        "exteriorFinishinGPainting": {
          "title": "Außenarbeiten und Anstrich",
          "desc": "Komplette Außenarbeiten und Anstrich eines Privathauses, inklusive Fassade und Dach."
        },
        "exteriorHouseFinishing2": {
          "title": "Außenarbeiten Haus 2",
          "desc": "Komplette Außenarbeiten an einem Privathaus, inklusive Fassade und Dach."
        },
        "exteriorFinishinGInProgress": {
          "title": "Außenarbeiten in Ausführung",
          "desc": "Laufende Außenarbeiten an einem Privathaus, inklusive Fassade und Dach."
        },
        "interiorHouseWallFinished": {
          "title": "Innenwandarbeiten abgeschlossen",
          "desc": "Komplette Innenwandverarbeitung eines Privathauses, inklusive Anstrich und Dekorelemente."
        }
      },
      "results": "{{count}} Projekte angezeigt",
      "videos": {
        "title": "Unsere Videos",
        "description": "Sehen Sie unsere Bau- und Renovierungsprojekte in Aktion",
        "video_1": {
          "title": "Golfclub & Akademie Beaufays",
          "des": "Bau eines modernen Golfclubs und einer Akademie in Beaufays, Belgien. Mit hochwertigen Ausführungen und modernsten Einrichtungen.",
          "location": "Beaufays, Belgien",
          "date": "2025"
        },
        "video_2": {
          "title": "Video 2",
          "des": "Bau eines modernen Golfclubs und einer Akademie in Beaufays, Belgien. Mit hochwertigen Ausführungen und modernsten Einrichtungen.",
          "location": "Beaufays, Belgien",
          "date": "2025"
        }
      }
    },
    "contact": {
      "title": "Kontaktieren Sie uns",
      "description": "Bereit, Ihren Raum zu verwandeln? Kontaktieren Sie uns für eine kostenlose Beratung und ein persönliches Angebot.",
      "info": {
        "location1": "Standort",
        "location": "Belgien -Erembodegem Dorp 49/21 Aalst 9320",
        "phone1": "Telefon",
        "phone": "+32 485 98 25 09",
        "email": "ioan@pelepconstruction.com",
        "hours1": "Öffnungszeiten:",
        "hours": "Montag - Freitag: 7:00 - 17:00"
      },
      "whyChoose": "Warum uns wählen?",
      "benefits": {
        "freeConsultation": "Kostenlose Beratung und Angebot",
        "qualityMaterials": "Materialien in Premiumqualität",
        "experiencedTeam": "Erfahrenes und zertifiziertes Team",
        "competitivePrices": "Wettbewerbsfähige und transparente Preise",
        "fullWarranty": "Vollständige Garantie auf alle Arbeiten",
        "fastExecution": "Schnelle und effiziente Umsetzung"
      },
      "form": {
        "title": "Fordern Sie Ihr Angebot an",
        "name": "Vollständiger Name",
        "phone": "Telefonnummer",
        "email": "E-Mail-Adresse",
        "service": "Dienstleistungstyp",
        "services": {
          "interior": "Innenausbau",
          "exterior": "Außenarbeiten",
          "carpentry": "Tischlerei",
          "renovation": "Renovierung",
          "other": "Andere"
        },
        "message": "Projektbeschreibung",
        "messagePlaceholder": "Beschreiben Sie Ihr Projekt im Detail...",
        "submit": "E-Mail senden"
      }
    },
    "footer": {
      "company": "Pelep Construction",
      "description": "Professionelle Bau- und Renovierungsdienstleistungen in ganz Belgien. Spezialisiert auf hochwertige Innen- und Außenarbeiten mit außergewöhnlicher Liebe zum Detail.",
      "quickLinks": "Schnellzugriffe",
      "services": "Unsere Dienstleistungen",
      "contact": "Kontaktinformationen",
      "followUs": "Folgen Sie uns",
      "rights": "Alle Rechte vorbehalten",
      "privacy": "Datenschutzrichtlinie",
      "terms": "Allgemeine Geschäftsbedingungen",
      "gdpr": "DSGVO"
    },
    "seo": {
      "home": {
        "title": "Pelep Construction - Hochwertige Ausführungen in Belgien | Innen- & Außenrenovierungen",
        "description": "Bau- und Renovierungsdienstleistungen mit Sitz in Aalst, Belgien. Innenausbau, Außenarbeiten, Tischlerei. Vertrauen, Qualität und professionelle Ergebnisse in ganz Belgien."
      },
      "about": {
        "title": "Über Pelep Construction – Bauunternehmen in Aalst, Belgien",
        "description": "Entdecken Sie Pelep Construction, ein belgisches Unternehmen mit Sitz in Aalst, das sich auf hochwertige Innen- und Außenarbeiten für Wohn- und Gewerbeprojekte spezialisiert hat."
      },
      "gallery": {
        "title": "Galerie – Pelep Construction Projekte in Belgien | Vorher & Nachher",
        "description": "Entdecken Sie abgeschlossene Bau- und Renovierungsprojekte von Pelep Construction in ganz Belgien. Innen- und Außenarbeiten, Tischlerarbeiten und mehr in Brüssel, Antwerpen und Gent."
      }
    }
  }
  },
  fr: {
    "translation": {
        "btn": {
        "getquote": "Obtenez un devis gratuit",
        "services": "Nos services"
        },
        "nav": {
        "home": "Accueil",
        "about": "À propos",
        "services": "Services",
        "gallery": "Galerie",
        "contact": "Contact",
        "getQuote": "Envoyer un message"
        },
        "hero": {
        "title": "Finitions professionnelles",
        "subtitle": "en Belgique",
        "description": "Nous transformons vos espaces avec des finitions de qualité supérieure. Équipe de construction expérimentée spécialisée dans les rénovations et les finitions haut de gamme dans toute la Belgique.",
        "getQuote": "Demander un devis gratuit",
        "viewWork": "Voir nos réalisations",
        "features": {
            "experience": "Matériaux haut de gamme",
            "certified": "Certifications belges",
            "warranty": "Garantie prolongée"
        }
        },
        "about": {
        "title": "À propos de Pelep Construction",
        "description": "Nous sommes une entreprise belge de construction spécialisée dans les finitions intérieures haut de gamme. De la peinture à la menuiserie sur mesure, nous utilisons uniquement des matériaux de qualité et des techniques fiables pour obtenir des résultats modernes et soignés. Qualité, précision et fiabilité — intégrées à chaque projet.",
        "commitment": {
            "title": "Notre engagement envers l’excellence",
            "description": "Nous croyons que chaque projet de construction mérite le plus haut niveau d'artisanat et d'attention aux détails. Notre équipe combine des techniques modernes avec des méthodes éprouvées pour fournir des résultats exceptionnels qui dépassent les attentes."
        },
        "values": {
            "quality": {
            "title": "Qualité sans compromis",
            "desc": "Chaque projet est réalisé avec précision en utilisant uniquement des matériaux haut de gamme et des techniques éprouvées."
            },
            "reliability": {
            "title": "Partenaire fiable",
            "desc": "Nous respectons nos engagements et livrons les projets dans les délais et le budget."
            },
            "innovation": {
            "title": "Solutions modernes",
            "desc": "Nous restons à jour avec les dernières techniques de construction et les normes belges."
            }
        },
        "partners": {
            "title": "Nos partenaires de confiance",
            "description": "Nous collaborons avec des marques de premier plan et utilisons uniquement des matériaux de qualité supérieure pour garantir une qualité optimale dans chaque projet."
        },
        "partnersMaterials": {
            "bossPaintsDesc": "Peintures et revêtements de haute qualité pour les finitions intérieures et extérieures.",
            "mathysDesc": "Spécialisé dans les solutions de peinture professionnelle pour diverses surfaces.",
            "sikkensDesc": "Systèmes de peinture innovants pour professionnels, garantissant durabilité et esthétique.",
            "trimetalDesc": "Expertise en revêtements décoratifs et protecteurs pour tous types de surfaces."
        },
        "stats": {
            "projects": "Projets réalisés",
            "projectsDesc": "Finitions de qualité dans toute la Belgique",
            "team": "Équipe professionnelle",
            "teamDesc": "Artisans spécialisés et certifiés",
            "premiumMaterials": "Matériaux haut de gamme",
            "premiumMaterialsDesc": "Matériaux belges de qualité premium",
            "support": "Support client",
            "supportDesc": "Disponible en cas d'urgence",
            "satisfaction": "Satisfaction client",
            "cities": "Grandes villes desservies"
        },
        "whyChoose": "Pourquoi choisir Pelep Construction ?",
        "features": {
            "experience": {
            "title": "Expérience locale",
            "desc": "Nous connaissons parfaitement les réglementations et normes belges."
            },
            "materials": {
            "title": "Matériaux de qualité",
            "desc": "Nous collaborons avec des fournisseurs locaux pour garantir la meilleure qualité."
            },
            "warranty": {
            "title": "Garantie prolongée",
            "desc": "Nous offrons une garantie sur tous les travaux pour votre tranquillité d'esprit."
            }
        },
        "testimonial": {
            "text": "La qualité et le professionnalisme de l'équipe de Pelep Construction m'ont impressionnée. La rénovation de l'appartement s'est parfaitement déroulée, en respectant le budget et les délais convenus.",
            "author": "Maria D., Bruxelles"
        }
        },
        "services": {
        "title": "Nos services",
        "description": "Nous proposons des solutions complètes de construction et de rénovation, adaptées aux normes belges et à vos besoins spécifiques.",
        "interior": {
            "title": "Finitions intérieures",
            "desc": "Rénovations intérieures complètes, de la peinture au carrelage et aux revêtements de sol.",
            "features": {
            "feature_1": "Pose de papier peint",
            "feature_2": "Plâtrerie",
            "feature_3": "Peinture",
            "feature_4": "Finitions décoratives"
            }
        },
        "exterior": {
            "title": "Maison privée",
            "desc": "Isolation thermique, rénovation de façade et finitions extérieures.",
            "features": {
            "feature_1": "Finitions de façade"
            }
        },
        "carpentry": {
            "title": "Menuiserie",
            "desc": "Travaux de menuiserie professionnels, meubles sur mesure et solutions précises de menuiserie.",
            "features": {
            "feature_1": "Meubles sur mesure",
            "feature_2": "Plinthes",
            "feature_3": "Parquet",
            "feature_4": "Portes"
            }
        },
        "additional_title": "Spécialités supplémentaires",
        "custom_wood_structures": {
            "title": "Structures en bois sur mesure",
            "desc": "Conception et construction de pergolas, kiosques, terrasses et autres structures en bois personnalisées."
        },
        "interior_carpentry": {
            "title": "Menuiserie intérieure",
            "desc": "Installation et finition d’escaliers, de lambris, de poutres apparentes et d’autres éléments intérieurs en bois."
        },
        "furniture_fitting": {
            "title": "Montage et installation de meubles",
            "desc": "Assemblage professionnel, ajustement et installation de meubles sur mesure ou modulaires."
        }
        },
        "gallery": {
        "title": "Notre galerie",
        "description": "Découvrez quelques-uns de nos projets récents réalisés en Belgique. Chaque travail reflète notre engagement envers la qualité et les détails.",
        "categories": {
            "all": "Tous",
            "interior": "Intérieur",
            "exterior": "Extérieur",
            "renovation": "Rénovation"
        },
        "projects": {
            "modernApartment": {
            "title": "Rénovation intérieure – Hôtel Jose",
            "desc": "Finitions complètes pour chambre d'hôtel, Bruxelles"
            },
            "privateHouse": {
            "title": "Rénovation maison privée",
            "desc": "Système d'isolation complet, Anvers"
            },
            "hotelJose": {
            "title": "Installation de panneaux décoratifs",
            "desc": "Installation de panneaux décoratifs dans le hall et les chambres de l'hôtel Jose, Bruxelles."
            },
            "modernLiving": {
            "title": "Chambre Hôtel Jose",
            "desc": "Rénovation d’une chambre d’hôtel au design moderne et finitions haut de gamme."
            },
            "renovatedFacade": {
            "title": "Peinture du plafond",
            "desc": "Peinture du plafond – maison privée"
            },
            "wallpaperInstalation": {
            "title": "Pose de papier peint",
            "desc": "Pose de papier peint décoratif dans le salon, Bruxelles"
            },
            "exteriorRenovation": {
            "title": "Rénovation extérieure",
            "desc": "Rénovation extérieure complète d’une maison privée, y compris la façade et la toiture."
            },
            "exteriorHouseFinishing": {
            "title": "Finitions extérieures maison",
            "desc": "Finitions extérieures complètes d’une maison privée, y compris façade et toiture."
            },
            "exteriorFinishinGPainting": {
            "title": "Finitions extérieures et peinture",
            "desc": "Finitions et peinture extérieures complètes d’une maison privée, y compris façade et toiture."
            },
            "exteriorHouseFinishing2": {
            "title": "Finitions extérieures maison 2",
            "desc": "Finitions extérieures complètes d’une maison privée, y compris façade et toiture."
            },
            "exteriorFinishinGInProgress": {
            "title": "Finitions extérieures en cours",
            "desc": "Travaux extérieurs en cours sur une maison privée, y compris façade et toiture."
            },
            "interiorHouseWallFinished": {
            "title": "Finition murs intérieurs",
            "desc": "Finitions complètes des murs intérieurs d’une maison, y compris peinture et éléments décoratifs."
            }
        },
        "results": "Affichage de {{count}} projets",
        "videos": {
            "title": "Nos vidéos",
            "description": "Découvrez nos projets de construction et de rénovation en action",
            "video_1": {
            "title": "Golf Club & Académie Beaufays",
            "des": "Construction d’un club de golf moderne et d’une académie à Beaufays, Belgique. Avec des finitions haut de gamme et des équipements de pointe.",
            "location": "Beaufays, Belgique",
            "date": "2025"
            },
            "video_2": {
            "title": "Vidéo 2",
            "des": "Construction d’un club de golf moderne et d’une académie à Beaufays, Belgique. Avec des finitions haut de gamme et des équipements de pointe.",
            "location": "Beaufays, Belgique",
            "date": "2025"
            }
        }
        },
        "contact": {
        "title": "Contactez-nous",
        "description": "Prêt à transformer votre espace ? Contactez-nous pour une consultation gratuite et un devis personnalisé.",
        "info": {
            "location1": "Adresse",
            "location": "Belgique - Erembodegem Dorp 49/21 Aalst 9320",
            "phone1": "Téléphone",
            "phone": "+32 485 98 25 09",
            "email": "ioan@pelepconstruction.com",
            "hours1": "Heures d’ouverture :",
            "hours": "Lundi - Vendredi : 7:00 - 17:00"
        },
        "whyChoose": "Pourquoi nous choisir ?",
        "benefits": {
            "freeConsultation": "Consultation et devis gratuits",
            "qualityMaterials": "Matériaux de qualité supérieure",
            "experiencedTeam": "Équipe expérimentée et certifiée",
            "competitivePrices": "Tarifs compétitifs et transparents",
            "fullWarranty": "Garantie complète sur tous les travaux",
            "fastExecution": "Exécution rapide et efficace"
        },
        "form": {
            "title": "Demandez votre devis",
            "name": "Nom complet",
            "phone": "Numéro de téléphone",
            "email": "Adresse e-mail",
            "service": "Type de service",
            "services": {
            "interior": "Finitions intérieures",
            "exterior": "Travaux extérieurs",
            "carpentry": "Menuiserie",
            "renovation": "Rénovation",
            "other": "Autre"
            },
            "message": "Description du projet",
            "messagePlaceholder": "Décrivez votre projet en détail...",
            "submit": "Envoyer l'e-mail"
        }
        },
        "footer": {
        "company": "Pelep Construction",
        "description": "Services professionnels de construction et de rénovation dans toute la Belgique. Spécialisé dans les finitions intérieures et extérieures de haute qualité avec une attention exceptionnelle aux détails.",
        "quickLinks": "Liens rapides",
        "services": "Nos services",
        "contact": "Infos de contact",
        "followUs": "Suivez-nous",
        "rights": "Tous droits réservés",
        "privacy": "Politique de confidentialité",
        "terms": "Conditions générales",
        "gdpr": "RGPD"
        },
        "seo": {
        "home": {
            "title": "Pelep Construction - Finitions haut de gamme en Belgique | Rénovations intérieures & extérieures",
            "description": "Services de construction et de rénovation basés à Alost, Belgique. Finitions intérieures, travaux extérieurs, menuiserie. Qualité fiable et résultats professionnels à travers la Belgique."
        },
        "about": {
            "title": "À propos de Pelep Construction - Entreprise de construction à Alost, Belgique",
            "description": "Découvrez Pelep Construction, une entreprise belge basée à Alost, spécialisée dans les finitions intérieures et extérieures haut de gamme pour projets résidentiels et commerciaux."
        },
        "gallery": {
            "title": "Galerie - Projets Pelep Construction en Belgique | Avant & Après",
            "description": "Explorez les projets de construction et de rénovation réalisés par Pelep Construction en Belgique. Finitions intérieures et extérieures, menuiserie, et plus à Bruxelles, Anvers et Gand."
        }
        }
    }
  },
  nl: {
    translation: {
        btn: {
        getquote: "Vraag een gratis offerte aan",
        services: "Onze diensten"
        },
        // Navigation
        nav: {
        home: "Home",
        about: "Over Ons",
        services: "Diensten", 
        gallery: "Galerij",
        contact: "Contact",
        getQuote: "Bericht Nu"
        },
        // Hero Section
        hero: {
        title: "Professionele Afwerkingen",
        subtitle: "in België", 
        description: "Wij transformeren uw ruimtes met hoogwaardige afwerkingen. Ervaren bouwteam gespecialiseerd in renovaties en hoogwaardige afwerkingen door heel België.",
        getQuote: "Vraag een Gratis Offerte aan",
        viewWork: "Bekijk Ons Werk",
        features: {
            experience: "Premium Materialen",
            certified: "Belgische certificeringen", 
            warranty: "Uitgebreide garantie"
        }
        },
        // About Section
        about: {
        title: "Over Pelep Construction",
        description: "Wij zijn een Belgisch bouwbedrijf gespecialiseerd in hoogwaardige interieurafwerkingen. Van schilderen tot maatwerk in hout, wij gebruiken enkel premium materialen en vertrouwde technieken om schone, moderne resultaten te leveren. Kwaliteit, precisie en betrouwbaarheid — ingebouwd in elk project.",
        commitment: {
            title: "Onze Toewijding aan Excellentie",
            description: "Wij geloven dat elk bouwproject het hoogste niveau van vakmanschap en aandacht voor detail verdient. Ons team combineert moderne technieken met bewezen methoden om uitstekende resultaten te leveren die de verwachtingen overtreffen."
        },
        values: {
            quality: {
            title: "Oncompromitterende Kwaliteit",
            desc: "Elk project wordt met precisie uitgevoerd, gebruikmakend van enkel premium materialen en bewezen technieken."
            },
            reliability: {
            title: "Betrouwbare Samenwerking",
            desc: "Wij staan achter onze beloftes en leveren projecten op tijd en binnen budget."
            },
            innovation: {
            title: "Moderne Oplossingen",
            desc: "Wij blijven up-to-date met de nieuwste bouwtechnieken en Belgische bouwstandaarden."
            }
        },
        partners: {
            title: "Onze Vertrouwde Partners",
            description: "Wij werken samen met toonaangevende merken en gebruiken enkel premium materialen om topkwaliteit te garanderen in elk project."
        },
        partnersMaterials: {
            bossPaintsDesc: "Hoogwaardige verven en coatings voor interieur- en exterieurafwerkingen.",
            mathysDesc: "Gespecialiseerd in professionele verfoplossingen voor verschillende oppervlakken.",
            sikkensDesc: "Innovatieve verfsystemen voor professionals, die duurzaamheid en esthetiek garanderen.",
            trimetalDesc: "Expertise in decoratieve en beschermende coatings voor allerlei oppervlakken."
        },
        stats: {
            projects: "Afgeronde Projecten",
            projectsDesc: "Kwaliteitsafwerkingen door heel België",
            team: "Professioneel Team", 
            teamDesc: "Gespecialiseerde en gecertificeerde vakmensen",
            premiumMaterials: "Premium Materialen",
            premiumMaterialsDesc: "Belgische premium kwaliteitsmaterialen",
            support: "Klantondersteuning",
            supportDesc: "Beschikbaar voor noodgevallen",
            satisfaction: "Klanttevredenheid",
            cities: "Grote Steden Bedient",
        },
        whyChoose: "Waarom Kiezen voor Pelep Construction?",
        features: {
            experience: {
            title: "Lokale Ervaring",
            desc: "Wij kennen de Belgische regelgeving en standaarden perfect."
            },
            materials: {
            title: "Premium Materialen", 
            desc: "Wij werken samen met lokale leveranciers voor de beste kwaliteitsmaterialen."
            },
            warranty: {
            title: "Uitgebreide Garantie",
            desc: "Wij bieden garantie op al ons werk voor uw gemoedsrust."
            }
        },
        testimonial: {
            text: "De kwaliteit en professionaliteit van het Pelep Construction team hebben indruk op mij gemaakt. De renovatie van het appartement verliep perfect, met respect voor het budget en de vastgestelde deadlines.",
            author: "Maria D., Brussel"
        }
        },
        // Services Section
        services: {
        title: "Onze Diensten",
        description: "Wij bieden complete bouw- en renovatieoplossingen, aangepast aan Belgische normen en uw specifieke behoeften.",
        interior: {
            title: "Interieurafwerkingen",
            desc: "Complete interieurrenovaties, van schilderen tot vloeren en tegels.",
            features: {
            feature_1: "Behanginstallatie",
            feature_2: "Pleisterwerk",
            feature_3: "Schilderen",
            feature_4: "Decoratieve Afwerkingen"
            }
        },
        exterior: {
            title: "Particuliere Woning",
            desc: "Thermische isolatie, gevelrenovaties en exterieurafwerkingen.",
            features: {
            feature_1: "Gevelafwerkingen",
            }
        },
        carpentry: {
            title: "Schrijnwerk", 
            desc: "Professioneel timmerwerk, maatmeubilair en precisie-schrijnwerkoplossingen.",
            features: {
            feature_4: "Deuren",
            feature_1: "Maatmeubilair",
            feature_2: "Plinten",
            feature_3: "Houten Vloeren",
            }
        },
        additional_title: "Aanvullende Specialiteiten",
        custom_wood_structures: {
            title: "Maatwerk Houten Constructies",
            desc: "Ontwerp en constructie van pergola's, tuinhuisjes, terrassen en andere gepersonaliseerde houten structuren."
        },
        interior_carpentry: {
            title: "Interieur Schrijnwerk",
            desc: "Installatie en afwerking van trappen, wandpanelen, zichtbare balken en andere houten interieurelementen."
        },
        furniture_fitting: {
            title: "Meubelmontage & Installatie",
            desc: "Professionele montage, plaatsing en installatie van maatwerk of modulaire meubelstukken."
        }
        },
        // Gallery Section
        gallery: {
        title: "Onze Galerij",
        description: "Ontdek enkele van onze meest recente projecten die in België zijn voltooid. Elk werk weerspiegelt onze toewijding aan kwaliteit en details.",
        categories: {
            all: "Alles",
            interior: "Interieur",
            exterior: "Exterieur", 
            renovation: "Renovatie",
        },
        projects: {
            modernApartment: {
            title: "Hotel José Interieurrenovatie",
            desc: "Complete afwerkingen voor hotelkamer, Brussel",
            },
            privateHouse: {
            title: "Renovatie Particuliere Woning",
            desc: "Complete isolatiesysteem, Antwerpen"
            },
            hotelJose: {
            title: "Installatie van decoratieve panelen",
            desc: "Installatie van decoratieve panelen in de lobby en kamers van Hotel José, Brussel."
            },
            modernLiving: {
            title: "Hotel José Kamer",
            desc: "Hotelkamerrenovatie met modern design en hoogwaardige afwerkingen."
            },
            renovatedFacade: {
            title: "Plafond schilderen", 
            desc: "Schilderen van het plafond - particuliere woning"
            },
            wallpaperInstalation: {
            title: "Behanginstallatie",
            desc: "Installatie van decoratief behang in de woonkamer, Brussel"
            },
            exteriorRenovation: {
            title: "Exterieurrenovatie",
            desc: "Complete exterieurrenovatie van een particuliere woning, inclusief gevel- en dakwerk.",
            },
            exteriorHouseFinishing: {
            title: "Exterieurafwerking Woning",
            desc: "Complete exterieurafwerking van een particuliere woning, inclusief gevel- en dakwerk.",
            },
            exteriorFinishinGPainting: {
            title: "Exterieurafwerking en Schilderen",
            desc: "Complete exterieurafwerking en schilderen van een particuliere woning, inclusief gevel- en dakwerk.",
            },
            exteriorHouseFinishing2: {
            title: "Exterieurafwerking Woning 2",
            desc: "Complete exterieurafwerking van een particuliere woning, inclusief gevel- en dakwerk.",
            },
            exteriorFinishinGInProgress: {
            title: "Exterieurafwerking in Uitvoering",
            desc: "Lopende exterieurafwerkingen aan een particuliere woning, inclusief gevel- en dakwerk.",
            },
            interiorHouseWallFinished: {
            title: "Interieurmuurafwerking Woning",
            desc: "Complete interieurmuurafwerking van een particuliere woning, inclusief schilderen en decoratieve elementen.",
            }
        },
        results: "Toont {{count}} projecten",
        videos: {
            title: "Onze Video's",
            description: "Bekijk onze bouw- en renovatieprojecten in actie",
            video_1: {
            title: "Golf Club & Academie Beaufays",
            des: "Bouw van een moderne golfclub en academie in Beaufays, België. Met hoogwaardige afwerkingen en state-of-the-art faciliteiten.",
            location: "Beaufays, België",
            date: "2025",
            },
            video_2: {
            title: "Video 2",
            des: "Bouw van een moderne golfclub en academie in Beaufays, België. Met hoogwaardige afwerkingen en state-of-the-art faciliteiten.",
            location: "Beaufays, België",
            date: "2025",
            }
        },
        },
        // Contact Section
        contact: {
        title: "Contacteer Ons",
        description: "Klaar om uw ruimte te transformeren? Neem contact met ons op voor een gratis consultatie en gepersonaliseerde offerte.",
        info: {
            location1: "Locatie",
            location: "België - Erembodegem Dorp 49/21 Aalst 9320",
            phone1: "Telefoon",
            phone: "+32 485 98 25 09",
            email: "ioan@pelepconstruction.com",
            hours1: "Openingstijden: ",
            hours: "Maandag - Vrijdag: 7:00 - 17:00"
        },
        whyChoose: "Waarom Kiezen voor Ons?",
        benefits: {
            freeConsultation: "Gratis consultatie en offerte",
            qualityMaterials: "Premium kwaliteitsmaterialen",
            experiencedTeam: "Ervaren en gecertificeerd team",
            competitivePrices: "Concurrerende en transparante prijzen",
            fullWarranty: "Volledige garantie op al het werk",
            fastExecution: "Snelle en efficiënte uitvoering"
        },
        form: {
            title: "Vraag Uw Offerte aan",
            name: "Volledige Naam",
            phone: "Telefoonnummer",
            email: "E-mailadres",
            service: "Type Dienst",
            services: {
            interior: "Interieurafwerkingen",
            exterior: "Exterieurwerken", 
            carpentry: "Schrijnwerk",
            renovation: "Renovatie",
            other: "Overig"
            },
            message: "Projectbeschrijving",
            messagePlaceholder: "Beschrijf uw project in detail...",
            submit: "Verstuur E-mail"
        }
        },
        // Footer
        footer: {
        company: "Pelep Construction",
        description: "Professionele bouw- en renovatiediensten door heel België. Gespecialiseerd in hoogwaardige interieur- en exterieurafwerkingen met uitzonderlijke aandacht voor detail.",
        quickLinks: "Snelle Links",
        services: "Onze Diensten",
        contact: "Contactinformatie",
        followUs: "Volg Ons",
        rights: "Alle rechten voorbehouden",
        privacy: "Privacybeleid",
        terms: "Algemene Voorwaarden",
        gdpr: "GDPR"
        },
        // SEO Meta
        seo: {
        home: {
            title: "Pelep Construction - Hoogwaardige Afwerkingen in België | Interieur- & Exterieurrenovaties",
            description: "Bouw- en renovatiediensten gevestigd in Aalst, België. Interieurafwerkingen, exterieurwerken, schrijnwerk. Vertrouwde kwaliteit en professionele resultaten door heel België."
        },
        about: {
            title: "Over Pelep Construction - Bouwbedrijf in Aalst, België",
            description: "Ontdek Pelep Construction, een Belgisch bedrijf gevestigd in Aalst, gespecialiseerd in premium interieur- en exterieurafwerkingen voor residentiële en commerciële projecten."
        },
        gallery: {
            title: "Galerij - Pelep Construction Projecten in België | Voor & Na",
            description: "Ontdek voltooide bouw- en renovatieprojecten van Pelep Construction door heel België. Interieur- en exterieurafwerkingen, schrijnwerk en meer in Brussel, Antwerpen en Gent."
        }
        }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;