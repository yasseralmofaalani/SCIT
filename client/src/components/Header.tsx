import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-ibm-white shadow-sm border-b border-ibm-gray-20 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <nav className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-reverse space-x-4">
            <img
              src="http://scit-sy.com/sites/default/files/2025-04/scit-logo.png"
              alt="SCIT Logo"
              className="h-10 w-auto"
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%230F62FE'/%3E%3Ctext x='20' y='26' text-anchor='middle' fill='white' font-size='14' font-weight='bold'%3ESCIT%3C/text%3E%3C/svg%3E";
              }}
            />
            <div>
              <h1 className="text-lg tajawal-black text-ibm-gray-100">{t('company.shortName')}</h1>
              <p className="text-xs text-ibm-gray-60 tajawal-medium">{t('company.name')}</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-reverse space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-ibm-gray-70 hover:text-ibm-blue-60 transition-colors tajawal-bold text-sm py-2">{t('header.home')}</button>
            <button onClick={() => scrollToSection('about')} className="text-ibm-gray-70 hover:text-ibm-blue-60 transition-colors tajawal-bold text-sm py-2">{t('header.about')}</button>
            <button onClick={() => scrollToSection('services')} className="text-ibm-gray-70 hover:text-ibm-blue-60 transition-colors tajawal-bold text-sm py-2">{t('header.services')}</button>
            <button onClick={() => scrollToSection('projects')} className="text-ibm-gray-70 hover:text-ibm-blue-60 transition-colors tajawal-bold text-sm py-2">{t('header.projects')}</button>
            <button onClick={() => scrollToSection('team')} className="text-ibm-gray-70 hover:text-ibm-blue-60 transition-colors tajawal-bold text-sm py-2">{t('header.team')}</button>
            <button onClick={() => scrollToSection('contact')} className="text-ibm-gray-70 hover:text-ibm-blue-60 transition-colors tajawal-bold text-sm py-2">{t('header.contact')}</button>

            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="flex items-center space-x-2 bg-ibm-blue-60 text-ibm-white px-4 py-2 rounded-md hover:bg-ibm-blue-70 transition-colors tajawal-bold"
            >
              <Globe size={16} />
              <span className="text-sm">{language === 'ar' ? 'EN' : 'العربية'}</span>
            </button>
          </div>
          
          <div className="flex items-center space-x-reverse space-x-3 md:hidden">
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="flex items-center space-x-2 bg-ibm-blue-60 text-ibm-white px-3 py-1.5 rounded-md hover:bg-ibm-blue-70 transition-colors tajawal-bold"
            >
              <Globe size={14} />
              <span className="text-xs">{language === 'ar' ? 'EN' : 'ع'}</span>
            </button>

            <button
              className="text-ibm-gray-70 hover:text-ibm-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-ibm-gray-20 bg-ibm-white">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className={`text-ibm-gray-70 hover:text-ibm-blue-60 transition-colors tajawal-bold py-2 ${language === 'en' ? 'text-left' : 'text-right'}`}>{t('header.home')}</button>
              <button onClick={() => scrollToSection('about')} className={`text-ibm-gray-70 hover:text-ibm-blue-60 transition-colors tajawal-bold py-2 ${language === 'en' ? 'text-left' : 'text-right'}`}>{t('header.about')}</button>
              <button onClick={() => scrollToSection('services')} className={`text-ibm-gray-70 hover:text-ibm-blue-60 transition-colors tajawal-bold py-2 ${language === 'en' ? 'text-left' : 'text-right'}`}>{t('header.services')}</button>
              <button onClick={() => scrollToSection('projects')} className={`text-ibm-gray-70 hover:text-ibm-blue-60 transition-colors tajawal-bold py-2 ${language === 'en' ? 'text-left' : 'text-right'}`}>{t('header.projects')}</button>
              <button onClick={() => scrollToSection('team')} className={`text-ibm-gray-70 hover:text-ibm-blue-60 transition-colors tajawal-bold py-2 ${language === 'en' ? 'text-left' : 'text-right'}`}>{t('header.team')}</button>
              <button onClick={() => scrollToSection('contact')} className={`text-ibm-gray-70 hover:text-ibm-blue-60 transition-colors tajawal-bold py-2 ${language === 'en' ? 'text-left' : 'text-right'}`}>{t('header.contact')}</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
