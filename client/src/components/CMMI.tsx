export default function CMMI() {
  const skills = [
    { name: "تطوير تطبيقات برمجية", percentage: 93 },
    { name: "استشارات وتحليل أنظمة", percentage: 90 },
    { name: "إدارة شبكات وأنظمة تشغيل", percentage: 85 },
    { name: "أمن معلومات", percentage: 80 },
    { name: "استضافة بيانات وقواعد البيانات", percentage: 75 }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="http://scit-sy.com/sites/default/files/2025-04/cmmiglobe_0.png" 
              alt="CMMI Certification" 
              className="w-full max-w-md mx-auto"
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23D0E2FF'/%3E%3Ctext x='150' y='100' text-anchor='middle' fill='%230F62FE' font-size='24' font-weight='bold'%3ECMMI%3C/text%3E%3Ctext x='150' y='130' text-anchor='middle' fill='%230F62FE' font-size='16'%3ECertification%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
          <div>
            <h2 className="text-4xl hthelios-heavy text-ibm-gray-100 mb-6">شهادة الجودة في البرمجيات CMMI</h2>
            <p className="text-lg text-ibm-gray-60 mb-6 leading-relaxed">
              تسعى الشركة السورية لتكنولوجيا المعلومات في تنفيذ مشاريعها لاعتماد مجموعة من الممارسات المثلى المستقاة من بنية وإطار عمل (نموذج نضج القدرات المتكامل CMMI) الذي يقدم مجموعة من الإرشادات الشاملة والمتكاملة.
            </p>
            <p className="text-lg text-ibm-gray-60 mb-8 leading-relaxed">
              كما تسعى الشركة في الفترة الحالية إلى الحصول على الاعتمادية وفق نموذج CMMI لضمان أعلى معايير الجودة في تطوير البرمجيات.
            </p>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-ibm-gray-100 hthelios-bold">{skill.name}</span>
                    <span className="text-ibm-blue-60 hthelios-bold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-ibm-gray-20 rounded-full h-3">
                    <div 
                      className="bg-ibm-blue-60 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
