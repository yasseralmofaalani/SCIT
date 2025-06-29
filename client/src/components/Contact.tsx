import { Mail, MapPin, Globe } from "lucide-react";

export default function Contact() {
  const openContact = () => {
    window.open('mailto:info@scit-sy.com', '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-ibm-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl tajawal-black text-ibm-gray-100 mb-4">تواصل معنا</h2>
          <p className="text-lg md:text-xl text-ibm-gray-60 tajawal-regular">نتطلع للعمل معكم في مشاريعكم التقنية المقبلة</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="bg-ibm-white rounded-lg shadow-sm border border-ibm-gray-20 p-8">
              <h3 className="text-xl tajawal-bold text-ibm-gray-100 mb-8">معلومات التواصل</h3>

              <div className="space-y-8">
                <div className="flex items-center space-x-reverse space-x-4">
                  <div className="bg-ibm-blue-60 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Mail className="text-ibm-white" size={20} />
                  </div>
                  <div>
                    <p className="tajawal-bold text-ibm-gray-100 mb-1">البريد الإلكتروني</p>
                    <a href="mailto:info@scit-sy.com" className="text-ibm-gray-60 hover:text-ibm-blue-60 transition-colors tajawal-regular">
                      info@scit-sy.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-reverse space-x-4">
                  <div className="bg-ibm-blue-60 w-12 h-12 rounded-lg flex items-center justify-center">
                    <MapPin className="text-ibm-white" size={20} />
                  </div>
                  <div>
                    <p className="tajawal-bold text-ibm-gray-100 mb-1">العنوان</p>
                    <p className="text-ibm-gray-60 tajawal-regular">دمشق، الجمهورية العربية السورية</p>
                  </div>
                </div>

                <div className="flex items-center space-x-reverse space-x-4">
                  <div className="bg-ibm-blue-60 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Globe className="text-ibm-white" size={20} />
                  </div>
                  <div>
                    <p className="tajawal-bold text-ibm-gray-100 mb-1">الموقع الإلكتروني</p>
                    <a
                      href="https://www.scit-sy.com/ar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ibm-gray-60 hover:text-ibm-blue-60 transition-colors tajawal-regular"
                    >
                      www.scit-sy.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-ibm-gray-20">
                <button
                  onClick={openContact}
                  className="w-full bg-ibm-blue-60 text-ibm-white px-8 py-4 rounded-md tajawal-bold hover:bg-ibm-blue-70 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  تواصل معنا الآن
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-ibm-white rounded-lg shadow-sm border border-ibm-gray-20 overflow-hidden">
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
