
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Code, Menu, X, LogOut } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  onLogout: () => void;
}

const Navigation = ({ activeSection, onSectionChange, onLogout }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'intro', label: 'مقدمة عن البرمجة', icon: '📚' },
    { id: 'frontend', label: 'Front-End', icon: '💻' },
    { id: 'backend', label: 'Back-End', icon: '⚙️' },
    { id: 'resources', label: 'النصائح والمصادر', icon: '🎯' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-slate-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo محسن */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-slate-800">كود بالعربي</span>
              <p className="text-xs text-slate-500">تعلم البرمجة</p>
            </div>
          </div>

          {/* Desktop Menu محسن */}
          <div className="hidden md:flex items-center space-x-2 space-x-reverse">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 font-medium ${
                  activeSection === item.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-blue-600'
                }`}
              >
                <span>{item.icon}</span>
                {item.label}
              </button>
            ))}
            <Button
              onClick={onLogout}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 mr-4 hover:bg-red-50 hover:text-red-600 hover:border-red-200"
            >
              <LogOut className="w-4 h-4" />
              خروج
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu محسن */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 bg-white">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-3 text-right rounded-lg transition-all duration-300 flex items-center gap-3 ${
                    activeSection === item.id
                      ? 'bg-blue-500 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </button>
              ))}
              <Button
                onClick={onLogout}
                variant="outline"
                className="flex items-center justify-center gap-2 mt-4 hover:bg-red-50 hover:text-red-600"
              >
                <LogOut className="w-4 h-4" />
                خروج
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
