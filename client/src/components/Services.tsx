import { Code, Shield, Network, Map } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl hthelios-heavy text-ibm-gray-100 mb-4">{t('services.title')}</h2>
          <p className="text-xl text-ibm-gray-60">{t('services.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-ibm-blue-20 p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="bg-ibm-blue-60 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Code className="text-white" size={32} />
            </div>
            <h3 className="text-2xl hthelios-bold text-ibm-gray-100 mb-4">{t('services.software')}</h3>
            <ul className="text-ibm-gray-60 space-y-2">
              <li>{t('services.software.desc1')}</li>
              <li>{t('services.software.desc2')}</li>
              <li>{t('services.software.desc3')}</li>
              <li>{t('services.software.desc4')}</li>
              <li>{t('services.software.desc5')}</li>
            </ul>
          </div>
          
          <div className="bg-ibm-blue-20 p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="bg-ibm-blue-60 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Shield className="text-white" size={32} />
            </div>
            <h3 className="text-2xl hthelios-bold text-ibm-gray-100 mb-4">{t('services.security')}</h3>
            <ul className="text-ibm-gray-60 space-y-2">
              <li>{t('services.security.desc1')}</li>
              <li>{t('services.security.desc2')}</li>
              <li>{t('services.security.desc3')}</li>
              <li>{t('services.security.desc4')}</li>
              <li>{t('services.security.desc5')}</li>
            </ul>
          </div>
          
          <div className="bg-ibm-blue-20 p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="bg-ibm-blue-60 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Network className="text-white" size={32} />
            </div>
            <h3 className="text-2xl hthelios-bold text-ibm-gray-100 mb-4">{t('services.network')}</h3>
            <ul className="text-ibm-gray-60 space-y-2">
              <li>{t('services.network.desc1')}</li>
              <li>{t('services.network.desc2')}</li>
              <li>{t('services.network.desc3')}</li>
              <li>{t('services.network.desc4')}</li>
              <li>{t('services.network.desc5')}</li>
            </ul>
          </div>
          
          <div className="bg-ibm-blue-20 p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="bg-ibm-blue-60 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Map className="text-white" size={32} />
            </div>
            <h3 className="text-2xl hthelios-bold text-ibm-gray-100 mb-4">{t('services.gis')}</h3>
            <ul className="text-ibm-gray-60 space-y-2">
              <li>{t('services.gis.desc1')}</li>
              <li>{t('services.gis.desc2')}</li>
              <li>{t('services.gis.desc3')}</li>
              <li>{t('services.gis.desc4')}</li>
              <li>{t('services.gis.desc5')}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
