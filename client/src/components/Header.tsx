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
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-reverse space-x-4">
            <img 
              src="http://scit-sy.com/sites/default/files/2025-04/scit-logo.png" 
              alt="SCIT Logo" 
              className="h-12 w-auto"
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='%230F62FE'/%3E%3Ctext x='24' y='30' text-anchor='middle' fill='white' font-size='16' font-weight='bold'%3ESCIT%3C/text%3E%3C/svg%3E";
              }}
            />
            <div>
              <h1 className="text-xl hthelios-heavy text-ibm-gray-100">{t('company.shortName')}</h1>
              <p className="text-sm text-ibm-gray-60">{t('company.name')}</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-reverse space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-ibm-gray-100 hover:text-ibm-blue-60 transition-colors hthelios-bold">{t('header.home')}</button>
            <button onClick={() => scrollToSection('about')} className="text-ibm-gray-100 hover:text-ibm-blue-60 transition-colors hthelios-bold">{t('header.about')}</button>
            <button onClick={() => scrollToSection('services')} className="text-ibm-gray-100 hover:text-ibm-blue-60 transition-colors hthelios-bold">{t('header.services')}</button>
            <button onClick={() => scrollToSection('projects')} className="text-ibm-gray-100 hover:text-ibm-blue-60 transition-colors hthelios-bold">{t('header.projects')}</button>
            <button onClick={() => scrollToSection('team')} className="text-ibm-gray-100 hover:text-ibm-blue-60 transition-colors hthelios-bold">{t('header.team')}</button>
            <button onClick={() => scrollToSection('contact')} className="text-ibm-gray-100 hover:text-ibm-blue-60 transition-colors hthelios-bold">{t('header.contact')}</button>
            
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="flex items-center space-x-2 bg-ibm-blue-60 text-white px-3 py-2 rounded-lg hover:bg-ibm-blue-50 transition-colors"
            >
              <Globe size={16} />
              <span className="text-sm">{language === 'ar' ? 'EN' : 'العربية'}</span>
            </button>
          </div>
          
          <div className="flex items-center space-x-reverse space-x-4 md:hidden">
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="flex items-center space-x-2 bg-ibm-blue-60 text-white px-2 py-1 rounded-lg hover:bg-ibm-blue-50 transition-colors"
            >
              <Globe size={14} />
              <span className="text-xs">{language === 'ar' ? 'EN' : 'ع'}</span>
            </button>
            
            <button 
              className="text-ibm-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-ibm-gray-20">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className={`text-ibm-gray-100 hover:text-ibm-blue-60 transition-colors hthelios-bold ${language === 'en' ? 'text-left' : 'text-right'}`}>{t('header.home')}</button>
              <button onClick={() => scrollToSection('about')} className={`text-ibm-gray-100 hover:text-ibm-blue-60 transition-colors hthelios-bold ${language === 'en' ? 'text-left' : 'text-right'}`}>{t('header.about')}</button>
              <button onClick={() => scrollToSection('services')} className={`text-ibm-gray-100 hover:text-ibm-blue-60 transition-colors hthelios-bold ${language === 'en' ? 'text-left' : 'text-right'}`}>{t('header.services')}</button>
              <button onClick={() => scrollToSection('projects')} className={`text-ibm-gray-100 hover:text-ibm-blue-60 transition-colors hthelios-bold ${language === 'en' ? 'text-left' : 'text-right'}`}>{t('header.projects')}</button>
              <button onClick={() => scrollToSection('team')} className={`text-ibm-gray-100 hover:text-ibm-blue-60 transition-colors hthelios-bold ${language === 'en' ? 'text-left' : 'text-right'}`}>{t('header.team')}</button>
              <button onClick={() => scrollToSection('contact')} className={`text-ibm-gray-100 hover:text-ibm-blue-60 transition-colors hthelios-bold ${language === 'en' ? 'text-left' : 'text-right'}`}>{t('header.contact')}</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
