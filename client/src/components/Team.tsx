export default function Team() {
  const teamMembers = [
    {
      name: "المهندس محمد عبد الله",
      position: "مدير عام الشركة",
      description: "استشاري هندسة البرمجيات / خبرة 25 عاماً في هندسة البرمجيات",
      image: "http://scit-sy.com/sites/default/files/2025-04/scit-manager.jpg"
    },
    {
      name: "الدكتور محمد الشايطة",
      position: "مستشار ومدير المشاريع",
      description: "استشاري تحليل وتنفيذ المشاريع البرمجية وأتمتة المؤسسات",
      image: "http://scit-sy.com/sites/default/files/2025-04/mohammad-shaita.jpeg"
    },
    {
      name: "الدكتور محمد الجنيدي",
      position: "استشاري شبكات الحاسوب والأمن السيبراني",
      description: "استشاري وباحث رئيسي في مركز الدراسات والبحوث العلمية",
      image: "http://scit-sy.com/sites/default/files/2025-04/mohammad-jnaide.jpeg"
    }
  ];

  return (
    <section id="team" className="py-24 bg-ibm-gray-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl tajawal-black text-ibm-gray-100 mb-4">فريقنا</h2>
          <p className="text-lg md:text-xl text-ibm-gray-60 tajawal-regular">خبراء متميزون في مجال تكنولوجيا المعلومات</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-ibm-white rounded-lg shadow-sm border border-ibm-gray-20 overflow-hidden text-center hover:shadow-md transition-shadow">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80`;
                }}
              />
              <div className="p-6">
                <h3 className="text-lg tajawal-bold text-ibm-gray-100 mb-2">{member.name}</h3>
                <p className="text-ibm-blue-60 tajawal-bold mb-3 text-sm">{member.position}</p>
                <p className="text-sm text-ibm-gray-60 tajawal-regular leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
