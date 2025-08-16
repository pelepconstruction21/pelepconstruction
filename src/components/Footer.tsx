import { Building2, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Newspaper } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/assets/photos/logo.jpg"; // Adjust the import path as necessary


const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-concrete-dark text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
                <img className="h-14 w-14 rounded-xl" src={Logo} alt="Pelep Construction" />
                <span className="text-2xl font-bold text-white">Pelep Construction</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.tiktok.com/@pelep.construction" target="_blank" className="w-10 h-10 bg-black/80 text-white rounded-full flex items-center justify-center hover:bg-black hover:scale-110 transition-all duration-300">
                <svg fill="currentColor" stroke="currentColor" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/pelepconstruction.srl?igsh=OXBjc2IxM3ZjcXYz" target="_blank" className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/pelep-construction-158a84377"  target="_blank" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div id="services">
            <h3 className="text-lg font-semibold text-white mb-6">{t('footer.services')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-construction-orange transition-colors">
                  {t('services.interior.title')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-construction-orange transition-colors">
                  {t('services.exterior.title')}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-construction-orange transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-construction-orange transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-300 hover:text-construction-orange transition-colors">
                  {t('nav.gallery')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-construction-orange transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">{t('footer.contact')}</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-construction-orange" />
                <span className="text-gray-300">+32 485 98 25 09</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-construction-orange" />
                <span className="text-gray-300">ioan@pelepconstruction.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Newspaper className="h-5 w-5 text-construction-orange" />
                <span className="text-gray-300">TVA: BE1025.441.834</span>
              </div>
              <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-construction-orange mt-0.5" />
                <a href="https://maps.app.goo.gl/S2BymvyRFJEE64Tp6">
                    <div className="text-gray-300">
                        <p>Erembodegem Dorp 49/21 Aalst 9320</p>
                        {/* <p className="text-sm">Around the country</p> */}
                    </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {t('footer.company')}. {t('footer.rights')}.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-construction-orange transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-construction-orange transition-colors">
                {t('footer.terms')}
              </a>
              <a href="#" className="text-gray-400 hover:text-construction-orange transition-colors">
                {t('footer.gdpr')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;