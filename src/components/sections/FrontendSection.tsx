
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Monitor, Code, Palette, Smartphone, ExternalLink, PlayCircle } from 'lucide-react';

const FrontendSection = () => {
  const technologies = [
    {
      name: 'HTML',
      description: 'هيكل وبنية صفحات الويب',
      color: 'bg-orange-100 text-orange-800',
      icon: '🏗️'
    },
    {
      name: 'CSS',
      description: 'تنسيق وتصميم المواقع',
      color: 'bg-blue-100 text-blue-800',
      icon: '🎨'
    },
    {
      name: 'JavaScript',
      description: 'إضافة التفاعل والحيوية',
      color: 'bg-yellow-100 text-yellow-800',
      icon: '⚡'
    },
    {
      name: 'React',
      description: 'مكتبة لبناء واجهات المستخدم',
      color: 'bg-cyan-100 text-cyan-800',
      icon: '⚛️'
    },
    {
      name: 'Bootstrap',
      description: 'إطار عمل للتصميم السريع',
      color: 'bg-purple-100 text-purple-800',
      icon: '🚀'
    },
    {
      name: 'DOM',
      description: 'التحكم في عناصر الصفحة',
      color: 'bg-green-100 text-green-800',
      icon: '🌳'
    }
  ];

  const videos = [
    {
      title: 'كورس HTML كامل للمبتدئين - الزيرو ويب سكول',
      channel: 'Elzero Web School',
      url: 'https://www.youtube.com/watch?v=6QAELgirvjs&list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPiPLU',
      duration: '10 ساعات',
      level: 'مبتدئ'
    },
    {
      title: 'تعلم CSS من الصفر - الزيرو ويب سكول',
      channel: 'Elzero Web School',
      url: 'https://www.youtube.com/watch?v=X1ulCwyhCVM&list=PLDoPjvoNmBAzjsz06LkzlmMpkx2kFhHuT',
      duration: '15 ساعة',
      level: 'مبتدئ'
    },
    {
      title: 'JavaScript شرح مفصل - الزيرو ويب سكول',
      channel: 'Elzero Web School',
      url: 'https://www.youtube.com/watch?v=GM6dQBmc-Xg&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv',
      duration: '25 ساعة',
      level: 'متوسط'
    },
    {
      title: 'React JS Course Arabic - ابراهيم عادل',
      channel: 'Ibrahim Adel',
      url: 'https://www.youtube.com/watch?v=d2FOp6UjXzs&list=PLQtNtS-WfRa8AS_dHhD_P2uxhq6o7vP8c',
      duration: '12 ساعة',
      level: 'متقدم'
    },
    {
      title: 'Bootstrap 5 كورس كامل بالعربي',
      channel: 'Unique Coderz Academy',
      url: 'https://www.youtube.com/watch?v=kQKvOVJJwYk&list=PLF8OvnCBlEY1cw8qrYMGYSRXrGbwJmHZ7',
      duration: '8 ساعات',
      level: 'مبتدئ'
    }
  ];

  const resources = [
    {
      name: 'MDN Web Docs',
      description: 'الدليل الشامل لتقنيات الويب',
      url: 'https://developer.mozilla.org/ar/',
      type: 'مرجع'
    },
    {
      name: 'FreeCodeCamp',
      description: 'دورات مجانية تفاعلية',
      url: 'https://www.freecodecamp.org/',
      type: 'دورات'
    },
    {
      name: 'W3Schools',
      description: 'دروس وأمثلة تطبيقية',
      url: 'https://www.w3schools.com/',
      type: 'تعليمي'
    },
    {
      name: 'CSS Tricks',
      description: 'نصائح وحيل متقدمة في CSS',
      url: 'https://css-tricks.com/',
      type: 'نصائح'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-6 gradient-bg rounded-2xl p-12 text-white">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center floating-animation">
            <Monitor className="w-12 h-12" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Front-End Development
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
          تطوير الواجهات الأمامية - كل ما يراه ويتفاعل معه المستخدم في المواقع والتطبيقات
        </p>
      </div>

      {/* What is Frontend */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Palette className="w-6 h-6 text-primary" />
            ما هو الـ Front-End؟
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg leading-relaxed">
          <p>
            الـ Front-End هو الجزء المرئي من أي موقع أو تطبيق ويب - وهو كل ما يراه المستخدم ويتفاعل معه مباشرة. 
            يشمل التصميم، الألوان، الخطوط، الأزرار، القوائم، والحركات التفاعلية.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                <Monitor className="w-5 h-5" />
                يشمل Front-End:
              </h4>
              <ul className="space-y-2 text-green-700">
                <li>• تصميم الصفحات والواجهات</li>
                <li>• التفاعل مع المستخدم</li>
                <li>• الاستجابة للأجهزة المختلفة</li>
                <li>• الحركات والتأثيرات البصرية</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                أمثلة من الحياة اليومية:
              </h4>
              <ul className="space-y-2 text-blue-700">
                <li>• صفحة فيسبوك الرئيسية</li>
                <li>• قائمة مطعم أونلاين</li>
                <li>• نموذج التسجيل في Gmail</li>
                <li>• سلة التسوق في أمازون</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

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
            <Code className="w-6 h-6 text-primary" />
            مسار التعلم المقترح
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="font-semibold">HTML - هيكل الصفحة</h4>
                <p className="text-sm text-gray-600">تعلم كيفية إنشاء هيكل صفحات الويب باستخدام HTML</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="font-semibold">CSS - التصميم والتنسيق</h4>
                <p className="text-sm text-gray-600">إضافة الألوان والخطوط والتنسيق للصفحات</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-lg">
              <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="font-semibold">JavaScript - التفاعل</h4>
                <p className="text-sm text-gray-600">إضافة الحيوية والتفاعل للمواقع</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-cyan-50 rounded-lg">
              <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h4 className="font-semibold">React - مكتبات متقدمة</h4>
                <p className="text-sm text-gray-600">بناء تطبيقات ويب معقدة وتفاعلية</p>
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

      {/* Resources */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">مصادر إضافية مفيدة</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{resource.name}</CardTitle>
                <Badge variant="outline">{resource.type}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 ml-2" />
                    زيارة الموقع
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrontendSection;
