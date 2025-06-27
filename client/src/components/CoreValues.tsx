import { Star, Lightbulb, Handshake } from "lucide-react";

export default function CoreValues() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl hthelios-heavy text-ibm-gray-100 mb-4">قيمنا الأساسية</h2>
          <p className="text-xl text-ibm-gray-60">المبادئ التي تحكم عملنا وتوجه رؤيتنا</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8">
            <div className="bg-ibm-blue-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="text-ibm-blue-60" size={32} />
            </div>
            <h3 className="text-2xl hthelios-bold text-ibm-gray-100 mb-4">التميز</h3>
            <p className="text-ibm-gray-60 leading-relaxed">
              التميز هو معيارنا الأساسي في كل ما نقدمه، حيث نحرص على تقديم حلول تقنية عالية الجودة تفوق توقعات عملائنا.
            </p>
          </div>
          
          <div className="text-center p-8">
            <div className="bg-ibm-blue-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="text-ibm-blue-60" size={32} />
            </div>
            <h3 className="text-2xl hthelios-bold text-ibm-gray-100 mb-4">الابتكار</h3>
            <p className="text-ibm-gray-60 leading-relaxed">
              الابتكار هو محرك نجاحنا، حيث نسعى دائماً لتقديم حلول تقنية متطورة تلبي احتياجات عملائنا بطرق إبداعية وفعالة.
            </p>
          </div>
          
          <div className="text-center p-8">
            <div className="bg-ibm-blue-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Handshake className="text-ibm-blue-60" size={32} />
            </div>
            <h3 className="text-2xl hthelios-bold text-ibm-gray-100 mb-4">النزاهة</h3>
            <p className="text-ibm-gray-60 leading-relaxed">
              النزاهة هي جوهر عملنا، حيث نلتزم بالشفافية والمصداقية في كل تعاملاتنا مع عملائنا وشركائنا.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
