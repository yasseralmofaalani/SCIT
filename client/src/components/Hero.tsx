import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-ibm-blue-60 to-ibm-blue-80 text-ibm-white py-24 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl tajawal-black mb-6 leading-tight">{t('hero.title')}</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 opacity-95 tajawal-medium max-w-3xl mx-auto leading-relaxed">{t('hero.subtitle')}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
            <button
              onClick={scrollToContact}
              className="bg-ibm-white text-ibm-blue-60 px-8 py-4 rounded-md tajawal-bold hover:bg-ibm-gray-10 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('hero.contact')}
            </button>
            <button
              onClick={scrollToProjects}
              className="border-2 border-ibm-white text-ibm-white px-8 py-4 rounded-md tajawal-bold hover:bg-ibm-white hover:text-ibm-blue-60 transition-all duration-300 transform hover:scale-105"
            >
              {t('hero.projects')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
