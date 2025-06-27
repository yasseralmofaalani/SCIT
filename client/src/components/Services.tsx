import { Code, Shield, Network } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl hthelios-heavy text-ibm-gray-100 mb-4">خدماتنا</h2>
          <p className="text-xl text-ibm-gray-60">نقدم مجموعة شاملة من الخدمات التقنية المتطورة</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-ibm-blue-20 p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="bg-ibm-blue-60 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Code className="text-white" size={32} />
            </div>
            <h3 className="text-2xl hthelios-bold text-ibm-gray-100 mb-4">خدمات برمجية</h3>
            <ul className="text-ibm-gray-60 space-y-2">
              <li>• دراسات تحليلية وتصميمية للأنظمة</li>
              <li>• تنفيذ مشاريع برمجية</li>
              <li>• استضافة قواعد البيانات</li>
              <li>• دعم فني للمشاريع</li>
              <li>• استشارات تقنية</li>
            </ul>
          </div>
          
          <div className="bg-ibm-blue-20 p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="bg-ibm-blue-60 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Shield className="text-white" size={32} />
            </div>
            <h3 className="text-2xl hthelios-bold text-ibm-gray-100 mb-4">أمن المعلومات</h3>
            <ul className="text-ibm-gray-60 space-y-2">
              <li>• حماية الشبكات</li>
              <li>• أمن التطبيقات</li>
              <li>• أمن البيانات</li>
              <li>• إدارة الهوية والتحقق</li>
              <li>• مكافحة الهجمات السيبرانية</li>
            </ul>
          </div>
          
          <div className="bg-ibm-blue-20 p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="bg-ibm-blue-60 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Network className="text-white" size={32} />
            </div>
            <h3 className="text-2xl hthelios-bold text-ibm-gray-100 mb-4">خدمات شبكية</h3>
            <ul className="text-ibm-gray-60 space-y-2">
              <li>• دراسات واستشارات فنية للشبكات</li>
              <li>• مد شبكات وإدارتها</li>
              <li>• إدارة أنظمة التشغيل</li>
              <li>• عقود الصيانة</li>
              <li>• الدعم التقني</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
