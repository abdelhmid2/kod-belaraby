
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, User, Code } from 'lucide-react';

interface LoginFormProps {
  onLogin: () => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === '123456') {
      onLogin();
    } else {
      setError('اسم المستخدم أو كلمة المرور غير صحيحة');
    }
  };

  return (
    <div className="min-h-screen particle-bg flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Particles */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        />
      ))}
      
      <Card className="w-full max-w-md backdrop-blur-lg bg-white/10 border-white/20 shadow-2xl">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center pulse-glow">
            <Code className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold text-white">كود بالعربي</CardTitle>
          <CardDescription className="text-white/80">
            تعلم البرمجة من الصفر - سجل دخولك للمتابعة
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-white flex items-center gap-2">
                <User className="w-4 h-4" />
                اسم المستخدم
              </Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                placeholder="أدخل اسم المستخدم"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white flex items-center gap-2">
                <Lock className="w-4 h-4" />
                كلمة المرور
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                placeholder="أدخل كلمة المرور"
                required
              />
            </div>
            
            {error && (
              <div className="text-red-300 text-sm bg-red-500/20 p-3 rounded-md">
                {error}
              </div>
            )}
            
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3"
            >
              تسجيل الدخول
            </Button>
          </form>
        </CardContent>
      </Card>
      
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <p className="text-white/60 text-sm">
          تم تطوير هذا الموقع بواسطة الباشمهندس عبد الحميد إبراهيم
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
