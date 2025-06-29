
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Youtube, Globe, Star, ExternalLink, Lightbulb, Target, Trophy } from 'lucide-react';

const ResourcesSection = () => {
  const arabicPlatforms = [
    {
      name: 'الزيرو ويب سكول',
      description: 'أفضل منصة عربية لتعليم تقنيات الويب',
      url: 'https://www.youtube.com/@ElzeroWebSchool',
      type: 'يوتيوب',
      subjects: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Python'],
      rating: 5
    },
    {
      name: 'أكاديمية حسونة',
      description: 'دورات شاملة في البرمجة والتقنية',
      url: 'https://www.youtube.com/@HassonaAcademy',
      type: 'يوتيوب',
      subjects: ['C#', 'PHP', 'JavaScript', 'قواعد البيانات'],
      rating: 5
    },
    {
      name: 'برمج',
      description: 'منصة عربية لتعليم البرمجة بطريقة تفاعلية',
      url: 'https://www.barmej.com/',
      type: 'منصة',
      subjects: ['Java', 'Python', 'Web Development'],
      rating: 4
    },
    {
      name: 'محمد الدسوقي',
      description: 'دورات متخصصة في قواعد البيانات والبرمجة',
      url: 'https://www.youtube.com/@mohameddesoki',
      type: 'يوتيوب',
      subjects: ['MySQL', 'Oracle', 'PHP'],
      rating: 5
    }
  ];

  const englishPlatforms = [
    {
      name: 'FreeCodeCamp',
      description: 'دورات مجانية شاملة مع شهادات',
      url: 'https://www.freecodecamp.org/',
      type: 'منصة',
      subjects: ['Full Stack', 'Data Science', 'Machine Learning'],
      rating: 5
    },
    {
      name: 'The Net Ninja',
      description: 'دروس عملية وسهلة الفهم',
      url: 'https://www.youtube.com/@NetNinja',
      type: 'يوتيوب',
      subjects: ['Vue.js', 'React', 'Node.js', 'Flutter'],
      rating: 5
    },
    {
      name: 'Traversy Media',
      description: 'أحدث التقنيات والمشاريع العملية',
      url: 'https://www.youtube.com/@TraversyMedia',
      type: 'يوتيوب',
      subjects: ['JavaScript', 'React', 'Node.js', 'Python'],
      rating: 5
    },
    {
      name: 'Codecademy',
      description: 'تعلم تفاعلي مع مشاريع عملية',
      url: 'https://www.codecademy.com/',
      type: 'منصة',
      subjects: ['Web Development', 'Data Science', 'Computer Science'],
      rating: 4
    }
  ];

  const tips = [
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: 'ابدأ بهدف واضح',
      description: 'حدد ماذا تريد أن تبني؟ موقع؟ تطبيق؟ متجر إلكتروني؟',
      details: 'لا تحاول تعلم كل شيء مرة واحدة. ركز على مسار واحد حتى تتقنه.'
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      title: 'اصنع مشاريع حقيقية',
      description: 'التطبيق العملي أهم من الحفظ النظري',
      details: 'اصنع موقع شخصي، متجر صغير، أو تطبيق بسيط لتطبيق ما تعلمته.'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-green-500" />,
      title: 'لا تخف من الأخطاء',
      description: 'الأخطاء جزء طبيعي من التعلم',
      details: 'كل مبرمج يواجه أخطاء يومياً. تعلم كيفية البحث عن الحلول وقراءة رسائل الخطأ.'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-purple-500" />,
      title: 'اقرأ الوثائق الرسمية',
      description: 'تعود على قراءة المصادر الرسمية',
      details: 'مواقع مثل MDN و PHP.net تحتوي على أحدث المعلومات والأمثلة.'
    }
  ];

  const workingLinks = [
    {
      title: 'كورس HTML كامل - الزيرو ويب سكول',
      url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPiPLU',
      type: 'HTML',
      duration: '37 فيديو'
    },
    {
      title: 'كورس CSS كامل - الزيرو ويب سكول',
      url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAzjsz06LkzlmMpkx2kFhHuT',
      type: 'CSS',
      duration: '86 فيديو'
    },
    {
      title: 'JavaScript كورس كامل - الزيرو ويب سكول',
      url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv',
      type: 'JavaScript',
      duration: '188 فيديو'
    },
    {
      title: 'PHP كورس كامل - الزيرو ويب سكول',
      url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAy41u35AqJUrI-H83DObUDq',
      type: 'PHP',
      duration: '120 فيديو'
    },
    {
      title: 'MySQL Database - الزيرو ويب سكول',
      url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAz6DT8SzQ1CODJTH-NIA7R9',
      type: 'MySQL',
      duration: '42 فيديو'
    },
    {
      title: 'React.js Complete Course - Net Ninja',
      url: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d',
      type: 'React',
      duration: '30+ فيديو'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-6 gradient-bg rounded-2xl p-12 text-white">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center floating-animation">
            <BookOpen className="w-12 h-12" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          النصائح والمصادر
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
          أفضل المنصات التعليمية والنصائح العملية لتسريع رحلة تعلمك للبرمجة
        </p>
      </div>

      {/* Pro Tips */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">نصائح احترافية للمبتدئين</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {tips.map((tip, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {tip.icon}
                  <div>
                    <CardTitle className="text-xl">{tip.title}</CardTitle>
                    <CardDescription className="text-base mt-1">{tip.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{tip.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Arabic Platforms */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-2">منصات تعليمية باللغة العربية</h2>
        <p className="text-center text-gray-600 mb-8">أفضل القنوات والمنصات العربية لتعلم البرمجة</p>
        <div className="grid md:grid-cols-2 gap-6">
          {arabicPlatforms.map((platform, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{platform.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline">{platform.type}</Badge>
                      <div className="flex">
                        {[...Array(platform.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Youtube className="w-6 h-6 text-red-500" />
                </div>
                <CardDescription className="text-base">{platform.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">التخصصات:</h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.subjects.map((subject, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <a href={platform.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 ml-2" />
                      زيارة المنصة
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* English Platforms */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-2">منصات تعليمية باللغة الإنجليزية</h2>
        <p className="text-center text-gray-600 mb-8">أفضل المنصات العالمية لتطوير مهاراتك البرمجية</p>
        <div className="grid md:grid-cols-2 gap-6">
          {englishPlatforms.map((platform, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{platform.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline">{platform.type}</Badge>
                      <div className="flex">
                        {[...Array(platform.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Globe className="w-6 h-6 text-blue-500" />
                </div>
                <CardDescription className="text-base">{platform.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">التخصصات:</h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.subjects.map((subject, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full" variant="outline">
                    <a href={platform.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 ml-2" />
                      زيارة المنصة
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Working YouTube Links */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">روابط يوتيوب شغالة ومؤكدة</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workingLinks.map((link, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-base leading-tight">{link.title}</CardTitle>
                <div className="flex justify-between items-center">
                  <Badge variant="default">{link.type}</Badge>
                  <span className="text-sm text-gray-500">{link.duration}</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild size="sm" className="w-full">
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <Youtube className="w-4 h-4 ml-2" />
                    مشاهدة الآن
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Final Motivation */}
      <Card className="shadow-xl code-bg text-white">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl mb-4">رسالة تحفيزية</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-lg leading-relaxed">
            "كل خبير كان يوماً مبتدئاً. لا تقارن بدايتك بوسط رحلة شخص آخر."
          </p>
          <p className="text-base opacity-90">
            البرمجة ليست مجرد مهارة تقنية، بل طريقة تفكير تفتح أمامك أبواب الإبداع والابتكار. 
            استمر في التعلم والممارسة، وتذكر أن كل سطر كود تكتبه يجعلك أقرب إلى هدفك.
          </p>
          <div className="flex justify-center space-x-4 space-x-reverse mt-6">
            <Badge variant="secondary" className="bg-white/20 text-white">
              💪 استمر في المحاولة
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white">
              🚀 اصنع مشاريع
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white">
              🎯 حقق أحلامك
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourcesSection;
