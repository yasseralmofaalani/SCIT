export default function Footer() {
  return (
    <footer className="bg-ibm-gray-100 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-reverse space-x-4 mb-6">
              <img 
                src="http://scit-sy.com/sites/default/files/2025-04/scit-logo.png" 
                alt="SCIT Logo" 
                className="h-12 w-auto filter brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='white'/%3E%3Ctext x='24' y='30' text-anchor='middle' fill='black' font-size='16' font-weight='bold'%3ESCIT%3C/text%3E%3C/svg%3E";
                }}
              />
              <div>
                <h3 className="text-xl hthelios-heavy">SCIT</h3>
                <p className="text-sm opacity-80">الشركة السورية لتكنولوجيا المعلومات</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              نحن شركة تكنولوجيا معلومات متخصصة في تقديم الحلول التقنية المتطورة للحكومات والمؤسسات.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg hthelios-bold mb-4">خدماتنا</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>• تطوير البرمجيات</li>
              <li>• أمن المعلومات</li>
              <li>• الخدمات الشبكية</li>
              <li>• الذكاء الاصطناعي</li>
              <li>• الاستشارات التقنية</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg hthelios-bold mb-4">تواصل معنا</h4>
            <div className="space-y-2 text-sm opacity-80">
              <p>📧 info@scit-sy.com</p>
              <p>🌐 www.scit-sy.com</p>
              <p>📍 دمشق، سوريا</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm opacity-60">
            © 2025 الشركة السورية لتكنولوجيا المعلومات. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
