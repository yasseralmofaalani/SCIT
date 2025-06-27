import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-reverse space-x-4">
            <img 
              src="http://scit-sy.com/sites/default/files/2025-04/scit-logo.png" 
              alt="SCIT Logo" 
              className="h-12 w-auto"
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='%230F62FE'/%3E%3Ctext x='24' y='30' text-anchor='middle' fill='white' font-size='16' font-weight='bold'%3ESCIT%3C/text%3E%3C/svg%3E";
              }}
            />
            <div>
              <h1 className="text-xl hthelios-heavy text-ibm-gray-100">SCIT</h1>
              <p className="text-sm text-ibm-gray-60">الشركة السورية لتكنولوجيا المعلومات</p>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-reverse space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-ibm-gray-100 hover:text-ibm-blue-60 transition-colors hthelios-bold">الرئيسية</button>
            <button onClick={() => scrollToSection('about')} className="text-ibm-gray-100 hover:text-ibm-blue-60 transition-colors hthelios-bold">من نحن</button>
            <button onClick={() => scrollToSection('services')} className="text-ibm-gray-100 hover:text-ibm-blue-60 transition-colors hthelios-bold">خدماتنا</button>
            <button onClick={() => scrollToSection('projects')} className="text-ibm-gray-100 hover:text-ibm-blue-60 transition-colors hthelios-bold">مشاريعنا</button>
            <button onClick={() => scrollToSection('team')} className="text-ibm-gray-100 hover:text-ibm-blue-60 transition-colors hthelios-bold">فريقنا</button>
            <button onClick={() => scrollToSection('contact')} className="text-ibm-gray-100 hover:text-ibm-blue-60 transition-colors hthelios-bold">تواصل معنا</button>
          </div>
          
          <button 
            className="md:hidden text-ibm-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-ibm-gray-20">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-ibm-gray-100 hover:text-ibm-blue-60 transition-colors hthelios-bold text-right">الرئيسية</button>
              <button onClick={() => scrollToSection('about')} className="text-ibm-gray-100 hover:text-ibm-blue-60 transition-colors hthelios-bold text-right">من نحن</button>
              <button onClick={() => scrollToSection('services')} className="text-ibm-gray-100 hover:text-ibm-blue-60 transition-colors hthelios-bold text-right">خدماتنا</button>
              <button onClick={() => scrollToSection('projects')} className="text-ibm-gray-100 hover:text-ibm-blue-60 transition-colors hthelios-bold text-right">مشاريعنا</button>
              <button onClick={() => scrollToSection('team')} className="text-ibm-gray-100 hover:text-ibm-blue-60 transition-colors hthelios-bold text-right">فريقنا</button>
              <button onClick={() => scrollToSection('contact')} className="text-ibm-gray-100 hover:text-ibm-blue-60 transition-colors hthelios-bold text-right">تواصل معنا</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
