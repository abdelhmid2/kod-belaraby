
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Zap, TrendingUp, Lightbulb, Star, Target, Users, Globe } from 'lucide-react';

const IntroSection = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'مهارة المستقبل',
      description: 'البرمجة هي لغة العصر الرقمي وأساس جميع التقنيات الحديثة التي نستخدمها يومياً'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: 'فرص وظيفية لا محدودة',
      description: 'أعلى الرواتب والطلب المتزايد على المبرمجين في جميع أنحاء العالم مع إمكانية العمل عن بُعد'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
      title: 'تطوير التفكير المنطقي',
      description: 'تعلم حل المشاكل المعقدة وتحليل البيانات بطريقة منهجية ومنطقية'
    },
    {
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: 'إنشاء مشاريعك الخاصة',
      description: 'تحويل أفكارك الإبداعية إلى تطبيقات ومواقع حقيقية يستخدمها الناس'
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: 'مجتمع عالمي',
      description: 'انضم لمجتمع المطورين العالمي وشارك خبراتك مع ملايين المبرمجين'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'تأثير حقيقي',
      description: 'اصنع تطبيقات تحل مشاكل حقيقية وتؤثر إيجابياً في حياة الناس'
    }
  ];

  const programmingSteps = [
    {
      step: '1',
      title: 'فهم المشكلة',
      description: 'تحديد المشكلة التي تريد حلها بوضوح'
    },
    {
      step: '2', 
      title: 'التخطيط',
      description: 'رسم خطة مفصلة لكيفية حل المشكلة'
    },
    {
      step: '3',
      title: 'كتابة الكود',
      description: 'تحويل الخطة إلى تعليمات يفهمها الحاسوب'
    },
    {
      step: '4',
      title: 'الاختبار',
      description: 'التأكد من أن الحل يعمل كما هو مطلوب'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section محسن */}
      <div className="text-center space-y-8 gradient-bg rounded-3xl p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex justify-center mb-8">
            <div className="w-28 h-28 bg-white/20 rounded-full flex items-center justify-center floating-animation backdrop-blur-sm">
              <Code className="w-14 h-14" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            ما هي البرمجة؟
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-95">
            البرمجة هي فن كتابة التعليمات للحاسوب لأداء مهام محددة. إنها طريقة التواصل مع الآلات 
            وتحويل الأفكار الإبداعية إلى حلول رقمية تخدم البشرية وتسهل حياتنا اليومية.
          </p>
        </div>
      </div>

      {/* What is Programming - محسن */}
      <div className="slide-up">
        <Card className="shadow-xl border-0 bg-white">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg">
            <CardTitle className="text-3xl flex items-center gap-4 text-slate-800">
              <Code className="w-8 h-8 text-blue-600" />
              تعريف البرمجة بشكل مبسط
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-lg leading-relaxed p-8">
            <p className="text-slate-700">
              البرمجة هي عملية إنشاء برامج الحاسوب من خلال كتابة مجموعة من التعليمات والأوامر 
              باستخدام لغات برمجة مختلفة مثل HTML، CSS، JavaScript، PHP وغيرها.
            </p>
            <p className="text-slate-700">
              تشبه البرمجة كتابة وصفة طبخ مفصلة، حيث تخبر الحاسوب خطوة بخطوة ما يجب عليه فعله 
              لتحقيق النتيجة المطلوبة، سواء كان ذلك موقع ويب، تطبيق موبايل، أو نظام إدارة.
            </p>
            
            {/* خطوات البرمجة */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {programmingSteps.map((item, index) => (
                <div key={index} className="text-center p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border-r-4 border-blue-500 mt-8">
              <h4 className="font-bold text-blue-800 mb-4 text-xl">مثال بسيط من الحياة اليومية:</h4>
              <p className="text-blue-700 text-lg leading-relaxed">
                عندما تضغط على زر "إعجاب" في فيسبوك، يقوم المبرمج بكتابة كود يخبر الموقع:
                "إذا ضغط المستخدم على الزر، قم بزيادة عدد الإعجابات بواحد وغير لون الزر إلى الأزرق وأرسل إشعاراً لصاحب المنشور"
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Benefits Grid محسن */}
      <div className="slide-up">
        <h2 className="section-title">لماذا تتعلم البرمجة؟</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="card-hover bg-white border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center">
                    {benefit.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-slate-800">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed text-center">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Programming Languages Overview محسن */}
      <div className="slide-up">
        <Card className="shadow-xl border-0 bg-white">
          <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-t-lg">
            <CardTitle className="text-3xl flex items-center gap-4 text-slate-800">
              <Star className="w-8 h-8 text-amber-500" />
              أشهر لغات البرمجة المطلوبة في السوق
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl shadow-md">
                <div className="text-4xl mb-4">🎨</div>
                <h4 className="font-bold text-orange-800 mb-3 text-xl">Front-End</h4>
                <p className="text-orange-600 font-medium">ما يراه المستخدم</p>
                <div className="mt-4 space-y-2">
                  <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">HTML</span>
                  <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm mr-2">CSS</span>
                  <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm mr-2">React</span>
                </div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-md">
                <div className="text-4xl mb-4">⚙️</div>
                <h4 className="font-bold text-purple-800 mb-3 text-xl">Back-End</h4>
                <p className="text-purple-600 font-medium">منطق التطبيق</p>
                <div className="mt-4 space-y-2">
                  <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">PHP</span>
                  <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm mr-2">Python</span>
                  <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">MySQL</span>
                  <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm mr-2">Node.js</span>
                </div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-md">
                <div className="text-4xl mb-4">📱</div>
                <h4 className="font-bold text-green-800 mb-3 text-xl">Mobile</h4>
                <p className="text-green-600 font-medium">تطبيقات الهاتف</p>
                <div className="mt-4 space-y-2">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">React Native</span>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mr-2">Flutter</span>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Swift</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action محسن */}
      <div className="text-center code-bg rounded-3xl p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">مستعد لبدء رحلتك في عالم البرمجة؟</h3>
          <p className="text-xl mb-8 opacity-95 max-w-3xl mx-auto">
            ابدأ بتعلم أساسيات Front-End وBack-End من خلال الأقسام التالية، واكتسب مهارات حقيقية تؤهلك لسوق العمل
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <span className="font-medium">✨ تعلم بالعربية</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <span className="font-medium">🎯 مصادر موثوقة</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <span className="font-medium">🚀 مشاريع عملية</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
              <span className="font-medium">💼 فرص وظيفية</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
