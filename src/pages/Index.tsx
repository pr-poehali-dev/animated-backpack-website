import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      id: 1,
      name: "BACKPACK",
      brand: "Urban & Street",
      price: "$300",
      image: "/img/d7735bb0-f6e1-45e1-8cf4-97f8da5e8bbf.jpg"
    },
    {
      id: 2,
      name: "TRAVEL PACK",
      brand: "Adventure Series",
      price: "$450",
      image: "/img/26dab2f6-eacf-4294-9998-89918379f4fa.jpg"
    },
    {
      id: 3,
      name: "DAILY PACK",
      brand: "Minimal Design",
      price: "$250",
      image: "/img/d7735bb0-f6e1-45e1-8cf4-97f8da5e8bbf.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black animate-bg-scale"
          style={{ 
            background: `radial-gradient(circle at ${50 + Math.sin(scrollY * 0.01) * 20}% ${50 + Math.cos(scrollY * 0.01) * 20}%, #FF6B35 0%, transparent 70%)`,
            opacity: 0.1 
          }}
        />
        
        {/* Floating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-morph opacity-20"
            style={{
              width: `${80 + i * 20}px`,
              height: `${80 + i * 20}px`,
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
              backgroundColor: i % 2 === 0 ? '#FF6B35' : '#FFFFFF',
              transform: `translateY(${scrollY * (0.1 + i * 0.05)}px) rotate(${scrollY * (0.2 + i * 0.1)}deg)`,
              animationDelay: `${i * 0.5}s`,
              borderRadius: i % 3 === 0 ? '20% 80% 40% 60%' : i % 3 === 1 ? '60% 40% 80% 20%' : '40% 60% 20% 80%'
            }}
          />
        ))}
      </div>

      {/* Split Screen Layout */}
      <div className="flex min-h-screen relative z-10">
        {/* Main Content Area - 70% */}
        <div className="w-[70%] relative">



          {/* Hero Section with Irregular Shapes */}
          <section className="min-h-screen flex items-center justify-center px-8 relative">
            <div className="text-center max-w-4xl relative z-10">
              <h1 className="text-7xl md:text-8xl font-black mb-8 leading-none">
                <span 
                  className="block animate-slide-in"
                  style={{ transform: `translateX(${scrollY * -0.3}px)` }}
                >
                  BACK
                </span>
                <span 
                  className="block text-primary animate-float transform -rotate-2"
                  style={{ transform: `translateX(${scrollY * 0.2}px) rotate(-2deg)` }}
                >
                  PACK
                </span>
                <span 
                  className="block animate-slide-in"
                  style={{ transform: `translateX(${scrollY * -0.1}px)` }}
                >
                  STORE
                </span>
              </h1>
            </div>

            {/* Irregular background shapes */}
            <div 
              className="absolute top-20 left-10 w-64 h-64 bg-primary/10 animate-morph"
              style={{ 
                transform: `translateY(${scrollY * 0.15}px)`,
                borderRadius: '20% 80% 40% 60%'
              }}
            />
            <div 
              className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 animate-morph"
              style={{ 
                transform: `translateY(${scrollY * -0.1}px) rotate(${scrollY * 0.1}deg)`,
                animationDelay: '2s',
                borderRadius: '60% 40% 80% 20%'
              }}
            />
          </section>

          {/* Products Gallery - Chaotic Grid */}
          <section className="py-20 px-8 relative">
            <h2 
              className="text-6xl font-black mb-16 transform -rotate-1"
              style={{ transform: `translateX(${scrollY * 0.1}px) rotate(-1deg)` }}
            >
              НОВАЯ КОЛЛЕКЦИЯ
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative">
              {products.map((product, index) => (
                <Card 
                  key={product.id}
                  className="bg-card/90 backdrop-blur-sm border-none overflow-hidden group cursor-pointer animate-morph"
                  style={{ 
                    transform: `
                      translateY(${scrollY * (0.05 + index * 0.02)}px) 
                      translateX(${scrollY * (index % 2 === 0 ? -0.02 : 0.02)}px)
                      rotate(${index * 2 - 2}deg)
                    `,
                    animationDelay: `${index * 0.3}s`,
                    borderRadius: index % 2 === 0 ? '20% 80% 40% 60%' : '60% 40% 80% 20%'
                  }}
                >
                  <CardContent className="p-0 relative overflow-hidden">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-black mb-1">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
                      <span className="text-lg font-bold text-primary">{product.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-8 relative">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  title: "ПРОЧНОСТЬ", 
                  desc: "Материалы военного класса для экстремальных условий",
                  icon: "Shield"
                },
                { 
                  title: "ИННОВАЦИИ", 
                  desc: "Передовые технологии в каждой детали",
                  icon: "Zap"
                },
                { 
                  title: "ДИЗАЙН", 
                  desc: "Уникальный стиль для городских джунглей",
                  icon: "Palette"
                },
                { 
                  title: "КАЧЕСТВО", 
                  desc: "Пожизненная гарантия на все изделия",
                  icon: "Award"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="p-6 bg-white/5 backdrop-blur-sm animate-morph hover:bg-white/10 transition-all duration-500 group cursor-pointer"
                  style={{ 
                    transform: `
                      translateY(${scrollY * (0.03 + index * 0.01)}px) 
                      rotate(${(index % 2 === 0 ? 1 : -1) * 2}deg)
                    `,
                    borderRadius: index % 2 === 0 ? '30% 70% 40% 60%' : '40% 60% 70% 30%',
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary p-3 animate-morph" style={{ borderRadius: '40% 60% 30% 70%' }}>
                      <Icon name={feature.icon} className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-black text-xl mb-2 group-hover:text-red-500 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="py-16 px-8 border-t border-white/10 relative">
            <div className="grid md:grid-cols-3 gap-8">
              <div 
                className="animate-morph"
                style={{ 
                  transform: `translateY(${scrollY * 0.02}px) rotate(1deg)`,
                  borderRadius: '20% 80% 40% 60%'
                }}
              >
                <h3 className="text-2xl font-black mb-4">
                  BACKPACK<span className="text-primary">STORE</span>
                </h3>
                <p className="text-muted-foreground">Рюкзаки для тех, кто не стоит на месте</p>
              </div>
              
              <div 
                className="animate-morph"
                style={{ 
                  transform: `translateY(${scrollY * -0.01}px) rotate(-1deg)`,
                  animationDelay: '1s'
                }}
              >
                <h4 className="font-bold mb-4">КОНТАКТЫ</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>hello@backpackstore.ru</p>
                  <p>+7 (999) 123-45-67</p>
                </div>
              </div>
              
              <div 
                className="animate-morph"
                style={{ 
                  transform: `translateY(${scrollY * 0.015}px) rotate(0.5deg)`,
                  animationDelay: '2s'
                }}
              >
                <h4 className="font-bold mb-4">СОЦИАЛЬНЫЕ СЕТИ</h4>
                <div className="flex space-x-4">
                  <Icon name="Instagram" className="w-6 h-6 hover:text-red-500 cursor-pointer transition-colors" />
                  <Icon name="MessageCircle" className="w-6 h-6 hover:text-red-500 cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </footer>
        </div>

        {/* Side Menu Panel - 30% */}
        <div className="w-[30%] fixed right-0 top-0 h-full bg-black/90 backdrop-blur-xl border-l border-primary/30 z-50">
          {/* Menu Toggle */}
          <div className="absolute -left-12 top-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-primary/20 backdrop-blur-sm hover:bg-primary/30 border border-primary/50"
            >
              <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
                <Icon name="ChevronLeft" className="w-6 h-6" />
              </div>
            </Button>
          </div>

          {/* Menu Content */}
          <div className={`h-full flex flex-col justify-center px-8 transition-all duration-700 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="space-y-12">
              {/* Main Navigation */}
              <div className="space-y-8">
                <h2 className="text-7xl font-black hover:text-red-500 transition-colors duration-300 cursor-pointer transform hover:scale-105 origin-left">
                  ГАЛЕРЕЯ
                </h2>
                <h2 className="text-7xl font-black hover:text-red-500 transition-colors duration-300 cursor-pointer transform hover:scale-105 origin-left">
                  СТАТЬИ
                </h2>
              </div>

              {/* Secondary Links */}
              <div className="space-y-4 pt-8 border-t border-primary/30">
                <a href="#" className="block text-2xl font-bold text-muted-foreground hover:text-red-500 transition-colors">
                  INSTAGRAM
                </a>
                <a href="#" className="block text-2xl font-bold text-muted-foreground hover:text-red-500 transition-colors">
                  TELEGRAM
                </a>
                <a href="#" className="block text-2xl font-bold text-muted-foreground hover:text-red-500 transition-colors">
                  ПОДДЕРЖКА
                </a>
              </div>

              {/* Small Menu Items */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                {['КАТАЛОГ', 'О НАС', 'ДОСТАВКА', 'КОНТАКТЫ'].map((item, index) => (
                  <div 
                    key={item}
                    className="p-3 bg-white/5 text-center text-sm font-bold hover:bg-red-500/20 cursor-pointer transition-all duration-300 animate-morph"
                    style={{ 
                      borderRadius: index % 2 === 0 ? '30% 70% 40% 60%' : '60% 40% 70% 30%',
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;