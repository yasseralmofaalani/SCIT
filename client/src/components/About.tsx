export default function About() {
  return (
    <section id="about" className="py-24 bg-ibm-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl tajawal-black text-ibm-gray-100 mb-8">من نحن</h2>
            <p className="text-lg text-ibm-gray-60 mb-6 leading-relaxed tajawal-medium">
              نحن شركة تكنولوجيا معلومات ذات طابع اقتصادي استثماري متخصصين في تطوير البرمجيات والاستشارات وتحليل الأنظمة، والخدمات الشبكية، وخدمات أنظمة التشغيل، وأمن المعلومات، والذكاء الاصطناعي AI. نعمل وفق مقتضيات المصلحة الوطنية.
            </p>
            <p className="text-lg text-ibm-gray-60 mb-8 leading-relaxed tajawal-medium">
              يقع مقرنا في مدينة دمشق، ونخدم الحكومات والوزارات والشركات الكبيرة والشركات الصغيرة والمتوسطة في مختلف القطاعات، ونقدم حلولاً مصممة خصيصاً لتحقيق نتائج ملموسة.
            </p>
            <a
              href="https://www.scit-sy.com/ar/about-us"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-ibm-blue-60 text-ibm-white px-8 py-4 rounded-md tajawal-bold hover:bg-ibm-blue-70 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              اقرأ المزيد
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="مكتب تكنولوجيا حديث"
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="اجتماع فريق مهني"
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow mt-8"
            />
            <img
              src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="تكنولوجيا رقمية"
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow -mt-8"
            />
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="غرفة خوادم حديثة"
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
