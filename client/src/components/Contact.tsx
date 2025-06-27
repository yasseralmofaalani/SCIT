import { Mail, MapPin, Globe } from "lucide-react";

export default function Contact() {
  const openContact = () => {
    window.open('mailto:info@scit-sy.com', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-ibm-blue-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl hthelios-heavy text-ibm-gray-100 mb-4">تواصل معنا</h2>
          <p className="text-xl text-ibm-gray-60">نتطلع للعمل معكم في مشاريعكم التقنية المقبلة</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl hthelios-bold text-ibm-gray-100 mb-6">معلومات التواصل</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-reverse space-x-4">
                  <div className="bg-ibm-blue-60 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="hthelios-bold text-ibm-gray-100">البريد الإلكتروني</p>
                    <a href="mailto:info@scit-sy.com" className="text-ibm-gray-60 hover:text-ibm-blue-60 transition-colors">
                      info@scit-sy.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-reverse space-x-4">
                  <div className="bg-ibm-blue-60 w-12 h-12 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="hthelios-bold text-ibm-gray-100">العنوان</p>
                    <p className="text-ibm-gray-60">دمشق، الجمهورية العربية السورية</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-reverse space-x-4">
                  <div className="bg-ibm-blue-60 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Globe className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="hthelios-bold text-ibm-gray-100">الموقع الإلكتروني</p>
                    <a 
                      href="https://www.scit-sy.com/ar" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-ibm-gray-60 hover:text-ibm-blue-60 transition-colors"
                    >
                      www.scit-sy.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-ibm-gray-20">
                <button 
                  onClick={openContact}
                  className="w-full bg-ibm-blue-60 text-white px-8 py-4 rounded-lg hthelios-bold hover:bg-ibm-blue-50 transition-colors"
                >
                  تواصل معنا الآن
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.5945288753827!2d36.23064730000001!3d33.530472200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMxJzQ5LjciTiAzNsKwMTMnNTkuNiJF!5e0!3m2!1sen!2s!4v1234567890123" 
                className="w-full h-96" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع الشركة السورية لتكنولوجيا المعلومات"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
