
import { useState } from 'react';
import LoginForm from '@/components/LoginForm';
import Navigation from '@/components/Navigation';
import IntroSection from '@/components/sections/IntroSection';
import FrontendSection from '@/components/sections/FrontendSection';
import BackendSection from '@/components/sections/BackendSection';
import ResourcesSection from '@/components/sections/ResourcesSection';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log('User logged in successfully');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveSection('intro');
    console.log('User logged out');
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    console.log('Section changed to:', section);
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'intro':
        return <IntroSection />;
      case 'frontend':
        return <FrontendSection />;
      case 'backend':
        return <BackendSection />;
      case 'resources':
        return <ResourcesSection />;
      default:
        return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        onLogout={handleLogout}
      />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="fade-in">
          {renderSection()}
        </div>
      </main>
      
      {/* Footer محسن */}
      <footer className="bg-slate-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4 text-center max-w-6xl">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">كود</span>
              </div>
              <h3 className="text-2xl font-bold">كود بالعربي</h3>
            </div>
            
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              تعلم البرمجة من الصفر باللغة العربية - Front-End و Back-End
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-8 text-center">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-blue-400">المهارات</h4>
                <ul className="space-y-1 text-slate-400">
                  <li>HTML & CSS</li>
                  <li>JavaScript & React</li>
                  <li>PHP & MySQL</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-green-400">المصادر</h4>
                <ul className="space-y-1 text-slate-400">
                  <li>فيديوهات عربية</li>
                  <li>مشاريع عملية</li>
                  <li>نصائح احترافية</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-purple-400">الهدف</h4>
                <ul className="space-y-1 text-slate-400">
                  <li>من الصفر للاحتراف</li>
                  <li>تطبيقات حقيقية</li>
                  <li>فرص عمل</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-slate-700 pt-6 mt-8">
              <p className="text-slate-400 text-lg">
                تم تطوير هذا الموقع بواسطة <span className="font-bold text-white">الباشمهندس عبد الحميد إبراهيم</span>
              </p>
              <p className="text-sm text-slate-500 mt-2">
                جميع الحقوق محفوظة © 2024 - كود بالعربي
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
