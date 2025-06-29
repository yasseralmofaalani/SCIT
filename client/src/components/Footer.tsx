export default function Footer() {
  return (
    <footer className="bg-ibm-gray-100 text-ibm-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-reverse space-x-4 mb-6">
              <img
                src="http://scit-sy.com/sites/default/files/2025-04/scit-logo.png"
                alt="SCIT Logo"
                className="h-10 w-auto filter brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='white'/%3E%3Ctext x='20' y='26' text-anchor='middle' fill='black' font-size='14' font-weight='bold'%3ESCIT%3C/text%3E%3C/svg%3E";
                }}
              />
              <div>
                <h3 className="text-lg tajawal-black">SCIT</h3>
                <p className="text-sm opacity-80 tajawal-medium">الشركة السورية لتكنولوجيا المعلومات</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed tajawal-medium">
              نحن شركة تكنولوجيا معلومات متخصصة في تقديم الحلول التقنية المتطورة للحكومات والمؤسسات.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg tajawal-bold mb-6">خدماتنا</h4>
            <ul className="space-y-3 text-sm opacity-80 tajawal-medium">
              <li>• تطوير البرمجيات</li>
              <li>• أمن المعلومات</li>
              <li>• الخدمات الشبكية</li>
              <li>• الذكاء الاصطناعي</li>
              <li>• الاستشارات التقنية</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg tajawal-bold mb-6">تواصل معنا</h4>
            <div className="space-y-3 text-sm opacity-80 tajawal-medium">
              <p>📧 info@scit-sy.com</p>
              <p>🌐 www.scit-sy.com</p>
              <p>📍 دمشق، سوريا</p>
            </div>
          </div>
        </div>

        <div className="border-t border-ibm-gray-80 mt-12 pt-8 text-center">
          <p className="text-sm opacity-60 tajawal-medium">
            © 2025 الشركة السورية لتكنولوجيا المعلومات. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
