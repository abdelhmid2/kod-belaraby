
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Server, Database, Code2, Shield, ExternalLink, PlayCircle, Zap } from 'lucide-react';

const BackendSection = () => {
  const technologies = [
    {
      name: 'PHP',
      description: 'لغة برمجة الخادم الأكثر شيوعاً',
      color: 'bg-indigo-100 text-indigo-800',
      icon: '🐘'
    },
    {
      name: 'MySQL',
      description: 'إدارة قواعد البيانات',
      color: 'bg-blue-100 text-blue-800',
      icon: '🗄️'
    },
    {
      name: 'REST API',
      description: 'ربط الأنظمة والتطبيقات',
      color: 'bg-green-100 text-green-800',
      icon: '🔗'
    },
    {
      name: 'Postman',
      description: 'اختبار APIs',
      color: 'bg-orange-100 text-orange-800',
      icon: '📨'
    },
    {
      name: 'Apache',
      description: 'خادم الويب',
      color: 'bg-red-100 text-red-800',
      icon: '🌐'
    },
    {
      name: 'XAMPP',
      description: 'بيئة التطوير المحلية',
      color: 'bg-purple-100 text-purple-800',
      icon: '⚙️'
    }
  ];

  const videos = [
    {
      title: 'كورس PHP كامل للمبتدئين - الزيرو ويب سكول',
      channel: 'Elzero Web School',
      url: 'https://www.youtube.com/watch?v=xcg9qq6SZ0w&list=PLDoPjvoNmBAy41u35AqJUrI-H83DObUDq',
      duration: '20 ساعة',
      level: 'مبتدئ'
    },
    {
      title: 'MySQL Database شرح كامل بالعربي',
      channel: 'Elzero Web School',
      url: 'https://www.youtube.com/watch?v=DUg1QbUgYPY&list=PLDoPjvoNmBAz6DT8SzQ1CODJTH-NIA7R9',
      duration: '15 ساعة',
      level: 'مبتدئ'
    },
    {
      title: 'REST API شرح مفصل مع PHP',
      channel: 'Programming Solutions - Academy',
      url: 'https://www.youtube.com/watch?v=OEWXbpUMODk&list=PLrwRNJX9gLs3kkSDgwBltIX9QqVyqTXt_',
      duration: '8 ساعات',
      level: 'متوسط'
    },
    {
      title: 'Laravel Framework شرح عربي',
      channel: 'Ahmed Fouad',
      url: 'https://www.youtube.com/watch?v=376vZ1wNYPA&list=PLCm7ZeRfGSP6YDlcjCqoirKG0lYbXjuO4',
      duration: '25 ساعة',
      level: 'متقدم'
    },
    {
      title: 'قواعد البيانات من الصفر - MySQL',
      channel: 'محمد الدسوقي',
      url: 'https://www.youtube.com/watch?v=h8xQ7g4ydQY&list=PLnzqK5HvcpwTuuLyDNDUiswdDwH_rKGiZ',
      duration: '12 ساعة',
      level: 'مبتدئ'
    }
  ];

  const concepts = [
    {
      title: 'Server-Side Programming',
      description: 'البرمجة من جانب الخادم',
      details: 'معالجة البيانات وتنفيذ العمليات على الخادم قبل إرسالها للمستخدم'
    },
    {
      title: 'Database Management',
      description: 'إدارة قواعد البيانات',
      details: 'تخزين واسترجاع وتحديث البيانات بطريقة آمنة ومنظمة'
    },
    {
      title: 'API Development',
      description: 'تطوير واجهات البرمجة',
      details: 'إنشاء نقاط اتصال تسمح للتطبيقات بالتواصل مع بعضها البعض'
    },
    {
      title: 'Security & Authentication',
      description: 'الأمان والمصادقة',
      details: 'حماية البيانات والتحقق من هوية المستخدمين'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-6 code-bg rounded-2xl p-12 text-white">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center floating-animation">
            <Server className="w-12 h-12" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Back-End Development
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
          تطوير الخادم وقواعد البيانات - العقل المدبر خلف كل موقع وتطبيق
        </p>
      </div>

      {/* What is Backend */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Database className="w-6 h-6 text-primary" />
            ما هو الـ Back-End؟
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg leading-relaxed">
          <p>
            الـ Back-End هو الجزء غير المرئي من أي موقع أو تطبيق - وهو المسؤول عن معالجة البيانات، 
            قواعد البيانات، الأمان، والمنطق التجاري للتطبيق.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                <Server className="w-5 h-5" />
                يشمل Back-End:
              </h4>
              <ul className="space-y-2 text-purple-700">
                <li>• معالجة طلبات المستخدمين</li>
                <li>• إدارة قواعد البيانات</li>
                <li>• المصادقة والأمان</li>
                <li>• APIs وربط الأنظمة</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold text-indigo-800 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                أمثلة من الحياة اليومية:
              </h4>
              <ul className="space-y-2 text-indigo-700">
                <li>• نظام تسجيل الدخول</li>
                <li>• معالجة المدفوعات</li>
                <li>• حفظ المنشورات والتعليقات</li>
                <li>• إرسال الإشعارات</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Core Concepts */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">المفاهيم الأساسية</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {concepts.map((concept, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{concept.title}</CardTitle>
                <CardDescription className="text-lg font-medium text-primary">
                  {concept.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{concept.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">التقنيات المطلوبة</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{tech.icon}</div>
                <CardTitle className="text-xl">{tech.name}</CardTitle>
                <Badge className={tech.color}>{tech.name}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Learning Path */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Code2 className="w-6 h-6 text-primary" />
            مسار التعلم المقترح
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-lg">
              <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="font-semibold">PHP - أساسيات البرمجة</h4>
                <p className="text-sm text-gray-600">تعلم المتغيرات، الحلقات، الدوال، والكلاسات</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="font-semibold">MySQL - قواعد البيانات</h4>
                <p className="text-sm text-gray-600">إنشاء الجداول، الاستعلامات، والعلاقات</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="font-semibold">PHP + MySQL - ربط قاعدة البيانات</h4>
                <p className="text-sm text-gray-600">التفاعل مع قاعدة البيانات من PHP</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h4 className="font-semibold">REST API - واجهات البرمجة</h4>
                <p className="text-sm text-gray-600">إنشاء APIs للتواصل مع التطبيقات</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Videos */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">فيديوهات تعليمية باللغة العربية</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <PlayCircle className="w-6 h-6 text-red-500 mt-1" />
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight">{video.title}</CardTitle>
                    <CardDescription className="mt-2">
                      بواسطة: {video.channel}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="secondary">{video.duration}</Badge>
                  <Badge variant={video.level === 'مبتدئ' ? 'default' : video.level === 'متوسط' ? 'secondary' : 'destructive'}>
                    {video.level}
                  </Badge>
                </div>
                <Button asChild className="w-full">
                  <a href={video.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 ml-2" />
                    مشاهدة الكورس
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Zap className="w-6 h-6 text-primary" />
            أدوات مهمة للـ Back-End Developer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">بيئة التطوير:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  XAMPP - خادم محلي للتطوير
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  phpMyAdmin - إدارة قواعد البيانات
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  VS Code - محرر الأكواد
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">أدوات الاختبار:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Postman - اختبار APIs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  Insomnia - بديل Postman
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  PHPUnit - اختبار الكود
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BackendSection;
