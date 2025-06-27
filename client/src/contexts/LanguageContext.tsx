import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ar: {
    // Header
    'header.home': 'الرئيسية',
    'header.about': 'من نحن',
    'header.services': 'خدماتنا',
    'header.projects': 'مشاريعنا',
    'header.team': 'فريقنا',
    'header.contact': 'تواصل معنا',
    
    // Hero
    'hero.title': 'حلول تقنية إبداعية',
    'hero.subtitle': 'نحن شركة تكنولوجيا معلومات ذات طابع اقتصادي استثماري',
    'hero.contact': 'تواصل معنا',
    'hero.projects': 'عرض مشاريعنا',
    
    // Stats
    'stats.years': 'سنة خبرة',
    'stats.clients': 'عميل',
    'stats.projects': 'مشروع',
    
    // About
    'about.title': 'من نحن',
    'about.subtitle': 'نحن شركة تكنولوجيا معلومات',
    'about.description1': 'نحن شركة تكنولوجيا معلومات ذات طابع اقتصادي استثماري متخصصين في تطوير البرمجيات والاستشارات وتحليل الأنظمة، والخدمات الشبكية، وخدمات أنظمة التشغيل، وأمن المعلومات، والذكاء الاصطناعي AI. نعمل وفق مقتضيات المصلحة الوطنية.',
    'about.description2': 'يقع مقرنا في مدينة دمشق، ونخدم الحكومات والوزارات والشركات الكبيرة والشركات الصغيرة والمتوسطة في مختلف القطاعات، ونقدم حلولاً مصممة خصيصاً لتحقيق نتائج ملموسة.',
    'about.readMore': 'اقرأ المزيد',
    
    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'نقدم مجموعة شاملة من الخدمات التقنية المتطورة',
    'services.software': 'خدمات برمجية',
    'services.software.desc1': '• دراسات تحليلية وتصميمية للأنظمة',
    'services.software.desc2': '• تنفيذ مشاريع برمجية',
    'services.software.desc3': '• استضافة قواعد البيانات',
    'services.software.desc4': '• دعم فني للمشاريع',
    'services.software.desc5': '• استشارات تقنية',
    'services.security': 'أمن المعلومات',
    'services.security.desc1': '• حماية الشبكات',
    'services.security.desc2': '• أمن التطبيقات',
    'services.security.desc3': '• أمن البيانات',
    'services.security.desc4': '• إدارة الهوية والتحقق',
    'services.security.desc5': '• مكافحة الهجمات السيبرانية',
    'services.network': 'خدمات شبكية',
    'services.network.desc1': '• دراسات واستشارات فنية للشبكات',
    'services.network.desc2': '• مد شبكات وإدارتها',
    'services.network.desc3': '• إدارة أنظمة التشغيل',
    'services.network.desc4': '• عقود الصيانة',
    'services.network.desc5': '• الدعم التقني',
    'services.gis': 'نظم المعلومات الجغرافية',
    'services.gis.desc1': '• تطوير أنظمة المعلومات الجغرافية',
    'services.gis.desc2': '• التحليلات المكانية المتقدمة',
    'services.gis.desc3': '• رسم الخرائط الرقمية',
    'services.gis.desc4': '• إدارة قواعد البيانات المكانية',
    'services.gis.desc5': '• الشركة رقم 1 في سوريا',
    
    // Projects
    'projects.title': 'مشاريعنا',
    'projects.subtitle': 'معرض أعمالنا في مجال الحلول التقنية الحكومية',
    
    // Core Values
    'values.title': 'قيمنا الأساسية',
    'values.subtitle': 'المبادئ التي تحكم عملنا وتوجه رؤيتنا',
    'values.excellence': 'التميز',
    'values.innovation': 'الابتكار',
    'values.integrity': 'النزاهة',
    
    // Team
    'team.title': 'فريقنا',
    'team.subtitle': 'خبراء متميزون في مجال تكنولوجيا المعلومات',
    
    // CMMI
    'cmmi.title': 'شهادة الجودة في البرمجيات CMMI',
    'cmmi.description1': 'تسعى الشركة السورية لتكنولوجيا المعلومات في تنفيذ مشاريعها لاعتماد مجموعة من الممارسات المثلى المستقاة من بنية وإطار عمل (نموذج نضج القدرات المتكامل CMMI) الذي يقدم مجموعة من الإرشادات الشاملة والمتكاملة.',
    'cmmi.description2': 'كما تسعى الشركة في الفترة الحالية إلى الحصول على الاعتمادية وفق نموذج CMMI لضمان أعلى معايير الجودة في تطوير البرمجيات.',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'نتطلع للعمل معكم في مشاريعكم التقنية المقبلة',
    'contact.info': 'معلومات التواصل',
    'contact.email': 'البريد الإلكتروني',
    'contact.address': 'العنوان',
    'contact.website': 'الموقع الإلكتروني',
    'contact.now': 'تواصل معنا الآن',
    
    // Company
    'company.name': 'الشركة السورية لتكنولوجيا المعلومات',
    'company.shortName': 'SCIT',
  },
  en: {
    // Header
    'header.home': 'Home',
    'header.about': 'About Us',
    'header.services': 'Services',
    'header.projects': 'Projects',
    'header.team': 'Team',
    'header.contact': 'Contact Us',
    
    // Hero
    'hero.title': 'Creative Technology Solutions',
    'hero.subtitle': 'We are an investment-oriented information technology company',
    'hero.contact': 'Contact Us',
    'hero.projects': 'View Our Projects',
    
    // Stats
    'stats.years': 'Years Experience',
    'stats.clients': 'Clients',
    'stats.projects': 'Projects',
    
    // About
    'about.title': 'About Us',
    'about.subtitle': 'We are an information technology company',
    'about.description1': 'We are an investment-oriented information technology company specializing in software development, consulting, systems analysis, network services, operating system services, information security, and artificial intelligence (AI). We operate in accordance with national interests.',
    'about.description2': 'Our headquarters is located in Damascus, and we serve governments, ministries, large corporations, as well as small and medium-sized enterprises across various sectors. We provide tailor-made solutions designed to deliver tangible results.',
    'about.readMore': 'Read More',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'We provide a comprehensive range of advanced technical services',
    'services.software': 'Software Services',
    'services.software.desc1': '• Analytical and design studies for systems',
    'services.software.desc2': '• Software project implementation',
    'services.software.desc3': '• Database hosting',
    'services.software.desc4': '• Technical support for projects',
    'services.software.desc5': '• Technical consulting',
    'services.security': 'Information Security',
    'services.security.desc1': '• Network protection',
    'services.security.desc2': '• Application security',
    'services.security.desc3': '• Data security',
    'services.security.desc4': '• Identity management and verification',
    'services.security.desc5': '• Cyber attack prevention',
    'services.network': 'Network Services',
    'services.network.desc1': '• Network technical studies and consulting',
    'services.network.desc2': '• Network installation and management',
    'services.network.desc3': '• Operating system management',
    'services.network.desc4': '• Maintenance contracts',
    'services.network.desc5': '• Technical support',
    'services.gis': 'Geographic Information Systems',
    'services.gis.desc1': '• GIS system development',
    'services.gis.desc2': '• Advanced spatial analysis',
    'services.gis.desc3': '• Digital mapping',
    'services.gis.desc4': '• Spatial database management',
    'services.gis.desc5': '• #1 Company in Syria',
    
    // Projects
    'projects.title': 'Our Projects',
    'projects.subtitle': 'Our portfolio in government technology solutions',
    
    // Core Values
    'values.title': 'Our Core Values',
    'values.subtitle': 'The principles that govern our work and guide our vision',
    'values.excellence': 'Excellence',
    'values.innovation': 'Innovation',
    'values.integrity': 'Integrity',
    
    // Team
    'team.title': 'Our Team',
    'team.subtitle': 'Distinguished experts in information technology',
    
    // CMMI
    'cmmi.title': 'CMMI Software Quality Certification',
    'cmmi.description1': 'The Syrian Company for Information Technology seeks to adopt a set of best practices derived from the structure and framework of the Capability Maturity Model Integration (CMMI) in implementing its projects, which provides a set of comprehensive and integrated guidelines.',
    'cmmi.description2': 'The company is currently seeking to obtain accreditation according to the CMMI model to ensure the highest quality standards in software development.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We look forward to working with you on your upcoming technical projects',
    'contact.info': 'Contact Information',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.website': 'Website',
    'contact.now': 'Contact Us Now',
    
    // Company
    'company.name': 'Syrian Company for Information Technology',
    'company.shortName': 'SCIT',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    const currentTranslations = translations[language] as Record<string, string>;
    return currentTranslations[key] || key;
  };

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    document.documentElement.lang = newLanguage;
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}