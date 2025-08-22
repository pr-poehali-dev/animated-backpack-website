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
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute top-10 left-10 w-32 h-32 border border-primary/20 rotate-12 animate-float"
          style={{ transform: `translateY(${scrollY * 0.1}px) rotate(12deg)` }}
        />
        <div 
          className="absolute top-1/2 right-20 w-24 h-24 bg-primary/10 rotate-45 animate-pulse-glow"
          style={{ transform: `translateY(${scrollY * -0.05}px) rotate(45deg)` }}
        />
        <div 
          className="absolute bottom-20 left-1/4 w-40 h-40 border-2 border-muted/20 rotate-45"
          style={{ transform: `translateY(${scrollY * 0.15}px) rotate(45deg)` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-wider">
            BACKPACK<span className="text-primary">STORE</span>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 hover:bg-primary/20"
          >
            <div className={`w-6 h-6 flex flex-col justify-center items-center transition-all duration-300 ${isMenuOpen ? 'rotate-45' : ''}`}>
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-90 translate-y-0' : 'translate-y-1'}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-90 -translate-y-0' : '-translate-y-1'}`} />
            </div>
          </Button>
        </div>

        {/* Full Screen Menu */}
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-all duration-700 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="h-full flex items-center justify-center">
            <div className="text-center space-y-8">
              <div className={`space-y-6 transition-all duration-500 delay-200 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <a href="#" className="block text-6xl font-black hover:text-primary transition-colors duration-300 transform hover:scale-105">ГАЛЕРЕЯ</a>
                <a href="#" className="block text-6xl font-black hover:text-primary transition-colors duration-300 transform hover:scale-105">СТАТЬИ</a>
              </div>
              <div className={`space-y-4 pt-8 border-t border-primary/20 transition-all duration-500 delay-400 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <a href="#" className="block text-2xl text-muted-foreground hover:text-white transition-colors">INSTAGRAM</a>
                <a href="#" className="block text-2xl text-muted-foreground hover:text-white transition-colors">TELEGRAM</a>
                <a href="#" className="block text-2xl text-muted-foreground hover:text-white transition-colors">SUPPORT</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-8xl md:text-9xl font-black mb-8 animate-slide-up">
            BACK
            <span className="block text-primary transform -rotate-2 animate-float">PACK</span>
            STORE
          </h1>
          <p className="text-xl text-muted-foreground mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Революционные рюкзаки для городских приключений
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/80 text-black font-bold px-8 py-4 text-lg animate-slide-up transform hover:scale-105 transition-all duration-300"
            style={{ animationDelay: '0.4s' }}
          >
            ОТКРЫТЬ КАТАЛОГ
          </Button>
        </div>
      </section>

      {/* Products Section - Chaotic Layout */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-black mb-16 text-center transform -rotate-1">
            НОВАЯ КОЛЛЕКЦИЯ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {products.map((product, index) => (
              <Card 
                key={product.id}
                className={`bg-card border-primary/20 transform transition-all duration-500 hover:scale-105 hover:rotate-1 cursor-pointer animate-slide-up
                  ${index === 0 ? 'rotate-2 mt-8' : index === 1 ? '-rotate-1 mb-8' : 'rotate-1 mt-4'}
                `}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  transform: `translateY(${scrollY * (0.02 + index * 0.01)}px) rotate(${index === 0 ? 2 : index === 1 ? -1 : 1}deg)`
                }}
              >
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-black mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-4">{product.brand}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <Button 
                        variant="outline" 
                        className="border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300"
                      >
                        В КОРЗИНУ
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Split Layout */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="transform rotate-1">
            <h2 className="text-5xl font-black mb-8 text-black">
              ПОЧЕМУ ВЫБИРАЮТ НАС?
            </h2>
            <div className="space-y-6">
              {[
                { icon: "Shield", title: "ПРОЧНОСТЬ", desc: "Материалы военного класса" },
                { icon: "Zap", title: "ИННОВАЦИИ", desc: "Передовые технологии" },
                { icon: "Award", title: "КАЧЕСТВО", desc: "Пожизненная гарантия" }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-primary p-3 rounded-full">
                    <Icon name={feature.icon} className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black text-lg">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative transform -rotate-2">
            <div className="bg-gradient-to-br from-black to-primary p-8 rounded-3xl shadow-2xl animate-float">
              <h3 className="text-3xl font-black mb-4 text-white">LIMITED EDITION</h3>
              <p className="text-white/80 mb-6">Эксклюзивная коллекция всего 100 штук</p>
              <Button size="lg" variant="secondary" className="w-full font-bold">
                ЗАКАЗАТЬ СЕЙЧАС
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-16 px-6 border-t border-primary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="transform rotate-1">
              <h3 className="text-2xl font-black mb-4">BACKPACK<span className="text-primary">STORE</span></h3>
              <p className="text-muted-foreground">Рюкзаки для тех, кто не стоит на месте</p>
            </div>
            
            <div className="transform -rotate-1">
              <h4 className="font-bold mb-4">КАТАЛОГ</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Городские рюкзаки</p>
                <p>Туристические</p>
                <p>Спортивные</p>
              </div>
            </div>
            
            <div className="transform rotate-1">
              <h4 className="font-bold mb-4">ПОДДЕРЖКА</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Доставка</p>
                <p>Возврат</p>
                <p>Гарантия</p>
              </div>
            </div>
            
            <div className="transform -rotate-1">
              <h4 className="font-bold mb-4">КОНТАКТЫ</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>hello@backpackstore.ru</p>
                <p>+7 (999) 123-45-67</p>
                <div className="flex space-x-4 pt-4">
                  <Icon name="Instagram" className="w-6 h-6 hover:text-primary cursor-pointer transition-colors" />
                  <Icon name="MessageCircle" className="w-6 h-6 hover:text-primary cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary/20 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 BACKPACKSTORE. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;