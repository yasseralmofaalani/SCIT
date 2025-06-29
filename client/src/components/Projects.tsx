import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "نظام معلومات جغرافي - وزارة التربية",
      description: "نظام شامل لإدارة البيانات الجغرافية للمؤسسات التعليمية",
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      url: "https://www.scit-sy.com/ar/portfolio"
    },
    {
      title: "نظام معلومات جغرافي - وزارة الصحة",
      description: "حلول تقنية لإدارة المرافق الصحية والخدمات الطبية",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      url: "https://www.scit-sy.com/ar/portfolio"
    },
    {
      title: "نظام معلومات جغرافي - وزارة الدفاع",
      description: "أنظمة متطورة لإدارة البيانات الجغرافية العسكرية",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      url: "https://www.scit-sy.com/ar/portfolio"
    },
    {
      title: "نظام معلومات جغرافي - وزارة الاتصالات",
      description: "إدارة البنية التحتية للاتصالات والموارد التقنية",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      url: "https://www.scit-sy.com/ar/portfolio"
    },
    {
      title: "بوابة الحكومة الالكترونية",
      description: "منصة موحدة للخدمات الحكومية الرقمية",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      url: "https://www.scit-sy.com/ar/portfolio"
    },
    {
      title: "نظام إدارة الهوية الرقمية",
      description: "حلول متقدمة للتحقق من الهوية والأمان الرقمي",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      url: "https://www.scit-sy.com/ar/portfolio"
    },
    {
      title: "منصة إدارة المدينة الذكية",
      description: "نظام متكامل لإدارة الخدمات الحضرية الذكية",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      url: "https://www.scit-sy.com/ar/portfolio"
    },
    {
      title: "مركز عمليات الأمن السيبراني",
      description: "مراقبة وحماية شاملة للبنية التحتية الرقمية",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      url: "https://www.scit-sy.com/ar/portfolio"
    },
    {
      title: "نظام الإدارة المالية",
      description: "حلول تقنية شاملة للإدارة المالية والمحاسبية",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      url: "https://www.scit-sy.com/ar/portfolio"
    },
    {
      title: "نظام إدارة الوثائق",
      description: "أرشفة وإدارة رقمية متطورة للوثائق الحكومية",
      image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      url: "https://www.scit-sy.com/ar/portfolio"
    },
    {
      title: "منصة التحليلات الذكية",
      description: "حلول الذكاء الاصطناعي للتحليل واتخاذ القرارات",
      image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      url: "https://www.scit-sy.com/ar/portfolio"
    },
    {
      title: "نظام تخطيط موارد المؤسسة",
      description: "إدارة شاملة لموارد وعمليات المؤسسات الحكومية",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      url: "https://www.scit-sy.com/ar/portfolio"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-ibm-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl tajawal-black text-ibm-gray-100 mb-4">مشاريعنا</h2>
          <p className="text-lg md:text-xl text-ibm-gray-60 tajawal-regular">معرض أعمالنا في مجال الحلول التقنية الحكومية</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-ibm-white rounded-lg shadow-sm border border-ibm-gray-20 overflow-hidden cursor-pointer group hover:shadow-lg hover:border-ibm-blue-30 transition-all duration-300"
              onClick={() => window.open(project.url, '_blank')}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-ibm-blue-60 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="text-ibm-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg tajawal-bold text-ibm-blue-60 mb-3 group-hover:text-ibm-blue-70 transition-colors">
                  {project.title}
                </h3>
                <p className="text-ibm-gray-60 text-sm leading-relaxed tajawal-regular">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
