export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-bg text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl hthelios-heavy mb-6">حلول تقنية إبداعية</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 hthelios-bold">نحن شركة تكنولوجيا معلومات ذات طابع اقتصادي استثماري</p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-reverse md:space-x-6">
          <button 
            onClick={scrollToContact}
            className="bg-white text-ibm-blue-60 px-8 py-4 rounded-lg hthelios-black hover:bg-ibm-blue-20 transition-colors"
          >
            تواصل معنا
          </button>
          <button 
            onClick={scrollToProjects}
            className="border-2 border-white text-white px-8 py-4 rounded-lg hthelios-bold hover:bg-white hover:text-ibm-blue-60 transition-colors"
          >
            عرض مشاريعنا
          </button>
        </div>
      </div>
    </section>
  );
}
