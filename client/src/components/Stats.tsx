import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Stats() {
  const [counters, setCounters] = useState({ years: 0, clients: 0, projects: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { years: 91, clients: 61, projects: 45 };
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        years: Math.floor(targets.years * progress),
        clients: Math.floor(targets.clients * progress),
        projects: Math.floor(targets.projects * progress),
      });

      if (currentStep >= steps) {
        setCounters(targets);
        clearInterval(timer);
      }
    }, increment);
  };

  return (
    <section ref={sectionRef} className="bg-ibm-gray-10 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-ibm-white rounded-lg shadow-sm border border-ibm-gray-20 hover:shadow-md transition-shadow">
            <div className="text-5xl md:text-6xl tajawal-black text-ibm-blue-60 mb-4 counter-animate">
              {counters.years}
            </div>
            <h3 className="text-lg tajawal-bold text-ibm-gray-70">{t('stats.years')}</h3>
          </div>
          <div className="p-8 bg-ibm-white rounded-lg shadow-sm border border-ibm-gray-20 hover:shadow-md transition-shadow">
            <div className="text-5xl md:text-6xl tajawal-black text-ibm-blue-60 mb-4 counter-animate">
              {counters.clients}
            </div>
            <h3 className="text-lg tajawal-bold text-ibm-gray-70">{t('stats.clients')}</h3>
          </div>
          <div className="p-8 bg-ibm-white rounded-lg shadow-sm border border-ibm-gray-20 hover:shadow-md transition-shadow">
            <div className="text-5xl md:text-6xl tajawal-black text-ibm-blue-60 mb-4 counter-animate">
              {counters.projects}
            </div>
            <h3 className="text-lg tajawal-bold text-ibm-gray-70">{t('stats.projects')}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
