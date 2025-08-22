import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const products = [
    {
      id: 1,
      name: "URBAN",
      subtitle: "DESTRUCTION",
      price: "$300",
      image: "/img/d7735bb0-f6e1-45e1-8cf4-97f8da5e8bbf.jpg"
    },
    {
      id: 2,
      name: "CHAOS",
      subtitle: "EDITION",
      price: "$450",
      image: "/img/26dab2f6-eacf-4294-9998-89918379f4fa.jpg"
    },
    {
      id: 3,
      name: "BRUTAL",
      subtitle: "MINIMAL",
      price: "$250",
      image: "/img/d7735bb0-f6e1-45e1-8cf4-97f8da5e8bbf.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* CHAOTIC ANIMATED BACKGROUND */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Base gradient that follows scroll */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{ 
            background: `
              radial-gradient(circle at ${mousePos.x * 0.1}% ${mousePos.y * 0.1}%, #FF3333 0%, transparent 50%),
              linear-gradient(${scrollY * 0.5}deg, #FF0000, #FF6600, #FFFF00, #00FF00, #0099FF, #9900FF)
            `,
            transform: `scale(${1 + scrollY * 0.001}) rotate(${scrollY * 0.1}deg)`
          }}
        />
        
        {/* BRUTAL CIRCLES AND SHAPES */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute ${i % 4 === 0 ? 'rounded-full' : i % 4 === 1 ? 'rounded-none' : i % 4 === 2 ? 'rounded-lg' : 'rounded-[50%_20%_80%_40%]'}`}
            style={{
              width: `${50 + i * 15}px`,
              height: `${50 + i * 15}px`,
              left: `${5 + i * 4.5}%`,
              top: `${10 + i * 3}%`,
              backgroundColor: ['#FF3333', '#FF6600', '#FFFF00', '#00FF00', '#0099FF', '#9900FF'][i % 6],
              opacity: 0.3,
              transform: `
                translateY(${scrollY * (0.1 + i * 0.02)}px) 
                translateX(${scrollY * (i % 2 === 0 ? -0.05 : 0.05)}px)
                rotate(${scrollY * (0.3 + i * 0.1)}deg)
                scale(${1 + Math.sin(scrollY * 0.01 + i) * 0.3})
              `,
              mixBlendMode: 'multiply'
            }}
          />
        ))}

        {/* GLITCH EFFECTS */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`glitch-${i}`}
            className="absolute bg-white opacity-10 animate-glitch"
            style={{
              width: `${10 + i * 5}px`,
              height: `2px`,
              left: `${i * 10}%`,
              top: `${20 + i * 7}%`,
              transform: `translateY(${scrollY * (0.2 + i * 0.03)}px)`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>

      {/* TOP BRUTAL NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-sm border-b-4 border-red-500">
        <div className="px-6 py-3 flex justify-between items-center">
          <div 
            className="text-3xl font-black tracking-tight animate-glitch"
            style={{ transform: `translateX(${scrollY * -0.1}px)` }}
          >
            <span className="text-red-500">BACK</span>
            <span className="text-yellow-400">PACK</span>
            <span className="text-green-400">STORE</span>
          </div>
          
          <Button
            variant="ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-red-500 hover:bg-red-600 text-black font-black p-3 rounded-none border-2 border-white transform hover:scale-110 transition-all"
          >
            <div className="w-8 h-8 flex flex-col justify-center items-center">
              <div className={`w-full h-1 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <div className={`w-full h-1 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-full h-1 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </Button>
        </div>
      </nav>

      {/* SIDE MENU PANEL */}
      <div className={`fixed right-0 top-0 h-full w-[40%] bg-gradient-to-b from-red-500 via-purple-600 to-blue-500 z-40 transition-transform duration-700 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col justify-center px-8 relative overflow-hidden">
          {/* Background chaos */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-brutal-spin opacity-20"
              style={{
                width: `${30 + i * 10}px`,
                height: `${30 + i * 10}px`,
                left: `${i * 6}%`,
                top: `${i * 6}%`,
                backgroundColor: ['#FF0000', '#00FF00', '#0099FF', '#FFFF00'][i % 4],
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
          
          <div className="space-y-8 relative z-10">
            {/* MAIN NAVIGATION - BRUTAL STYLE */}
            <div className="space-y-6">
              <h2 className="text-6xl font-black text-black hover:text-white transition-colors duration-300 cursor-pointer transform hover:scale-105 hover:rotate-2 origin-left border-4 border-black hover:border-white p-4 bg-yellow-400 hover:bg-red-500 animate-glitch">
                ГАЛЕРЕЯ
              </h2>
              <h2 className="text-6xl font-black text-black hover:text-white transition-colors duration-300 cursor-pointer transform hover:scale-105 hover:rotate-2 origin-left border-4 border-black hover:border-white p-4 bg-green-400 hover:bg-blue-500 animate-glitch">
                СТАТЬИ
              </h2>
            </div>

            {/* SECONDARY LINKS */}
            <div className="space-y-4 pt-8">
              {['INSTAGRAM', 'TELEGRAM', 'ПОДДЕРЖКА'].map((item, index) => (
                <a 
                  key={item}
                  href="#" 
                  className="block text-2xl font-black text-black hover:text-yellow-400 transition-colors p-2 bg-white/90 hover:bg-black border-2 border-black hover:border-yellow-400 transform hover:skew-x-12"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* CHAOTIC GRID */}
            <div className="grid grid-cols-2 gap-3 pt-8">
              {['КАТАЛОГ', 'О НАС', 'ДОСТАВКА', 'КОНТАКТЫ', 'НОВОСТИ', 'БЛОГ'].map((item, index) => (
                <div 
                  key={item}
                  className={`p-3 text-center text-sm font-black border-2 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:rotate-12 animate-chaos-move
                    ${index % 3 === 0 ? 'bg-red-500 border-yellow-400 text-black' : 
                      index % 3 === 1 ? 'bg-blue-500 border-red-400 text-white' : 
                      'bg-green-500 border-purple-400 text-black'}
                  `}
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    clipPath: index % 2 === 0 ? 'polygon(20% 0%, 100% 20%, 80% 100%, 0% 80%)' : 'polygon(0% 0%, 80% 0%, 100% 80%, 20% 100%)'
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="relative z-10">
        {/* BRUTAL HERO SECTION */}
        <section className="min-h-screen flex items-center justify-center px-8 relative">
          <div className="text-center max-w-6xl relative">
            {/* CHAOTIC TITLE */}
            <div className="relative">
              <h1 className="text-8xl md:text-9xl font-black leading-none mb-8">
                <span 
                  className="block text-red-500 animate-glitch"
                  style={{ 
                    transform: `translateX(${scrollY * -0.5}px) rotate(${scrollY * 0.05}deg)`,
                    textShadow: '5px 5px 0px #FFFF00, 10px 10px 0px #00FF00'
                  }}
                >
                  BACK
                </span>
                <span 
                  className="block text-yellow-400 animate-brutal-spin"
                  style={{ 
                    transform: `translateX(${scrollY * 0.3}px) rotate(${scrollY * -0.03}deg)`,
                    textShadow: '5px 5px 0px #FF0000, 10px 10px 0px #0099FF'
                  }}
                >
                  PACK
                </span>
                <span 
                  className="block text-green-400 animate-chaos-move"
                  style={{ 
                    transform: `translateX(${scrollY * -0.2}px) rotate(${scrollY * 0.07}deg)`,
                    textShadow: '5px 5px 0px #9900FF, 10px 10px 0px #FF6600'
                  }}
                >
                  STORE
                </span>
              </h1>
              
              {/* FLOATING BRUTAL ELEMENTS */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full animate-brutal-spin"
                  style={{
                    width: `${40 + i * 10}px`,
                    height: `${40 + i * 10}px`,
                    left: `${10 + i * 12}%`,
                    top: `${i * 15}%`,
                    backgroundColor: ['#FF0000', '#00FF00', '#0099FF', '#FFFF00', '#FF6600', '#9900FF'][i % 6],
                    transform: `translateY(${scrollY * (0.2 + i * 0.05)}px) rotate(${scrollY * (0.5 + i * 0.1)}deg)`,
                    animationDelay: `${i * 0.3}s`,
                    opacity: 0.7,
                    mixBlendMode: 'multiply'
                  }}
                />
              ))}
            </div>

            <div 
              className="mt-12"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-green-500 hover:to-blue-500 text-black font-black px-12 py-6 text-2xl border-4 border-white rounded-none transform hover:scale-110 hover:rotate-3 transition-all duration-300 animate-pulse-glow"
              >
                ВОЙТИ В ХАОС
              </Button>
            </div>
          </div>
        </section>

        {/* BRUTAL PRODUCTS GALLERY */}
        <section className="py-20 px-8 relative">
          <h2 
            className="text-7xl font-black mb-16 text-center"
            style={{ 
              transform: `translateX(${scrollY * 0.15}px) rotate(${scrollY * 0.02}deg)`,
              background: 'linear-gradient(45deg, #FF0000, #FFFF00, #00FF00, #0099FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '3px 3px 0px #000000'
            }}
          >
            НОВАЯ КОЛЛЕКЦИЯ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {products.map((product, index) => (
              <Card 
                key={product.id}
                className="bg-transparent border-none overflow-hidden group cursor-pointer"
                style={{ 
                  transform: `
                    translateY(${scrollY * (0.1 + index * 0.03)}px) 
                    translateX(${scrollY * (index % 2 === 0 ? -0.05 : 0.05)}px)
                    rotate(${(index - 1) * 5 + scrollY * 0.02}deg)
                  `
                }}
              >
                <CardContent className="p-0 relative">
                  {/* BRUTAL FRAME */}
                  <div 
                    className="relative overflow-hidden border-8 group-hover:border-red-500 transition-all duration-300"
                    style={{
                      borderColor: ['#FF0000', '#00FF00', '#0099FF'][index % 3],
                      clipPath: index % 3 === 0 ? 'polygon(0% 0%, 90% 0%, 100% 90%, 10% 100%)' : 
                                 index % 3 === 1 ? 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 90%)' : 
                                 'polygon(0% 10%, 90% 0%, 100% 90%, 10% 100%)'
                    }}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-125 group-hover:rotate-12"
                        style={{ filter: 'contrast(1.2) saturate(1.5)' }}
                      />
                    </div>
                    
                    {/* BRUTAL OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/50 group-hover:from-red-500/30 group-hover:to-yellow-500/30 transition-all duration-300" />
                  </div>
                  
                  {/* BRUTAL INFO */}
                  <div 
                    className="p-6 bg-gradient-to-r from-yellow-400 to-red-500 border-4 border-black transform group-hover:skew-y-2 transition-all duration-300"
                    style={{ clipPath: 'polygon(0% 0%, 95% 0%, 100% 85%, 5% 100%)' }}
                  >
                    <h3 className="text-3xl font-black mb-1 text-black animate-glitch">{product.name}</h3>
                    <p className="text-lg font-bold text-black mb-3">{product.subtitle}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-3xl font-black text-black bg-white px-3 py-1 border-2 border-black transform rotate-2">
                        {product.price}
                      </span>
                      <Button 
                        variant="outline" 
                        className="bg-black text-white border-4 border-white hover:bg-white hover:text-black font-black px-6 py-2 rounded-none transform hover:scale-110 hover:rotate-3 transition-all duration-300"
                      >
                        КУПИТЬ
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* BRUTAL FOOTER */}
        <footer className="py-20 px-8 bg-gradient-to-r from-black via-red-900 to-black border-t-8 border-red-500 relative overflow-hidden">
          {/* CHAOTIC BACKGROUND */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-chaos-move opacity-20"
              style={{
                width: `${30 + i * 8}px`,
                height: `${30 + i * 8}px`,
                left: `${i * 8}%`,
                top: `${i * 7}%`,
                backgroundColor: ['#FF0000', '#FFFF00', '#00FF00', '#0099FF'][i % 4],
                clipPath: i % 4 === 0 ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : 
                          i % 4 === 1 ? 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' :
                          i % 4 === 2 ? 'circle(50% at 50% 50%)' : 'polygon(0% 0%, 100% 0%, 50% 100%)',
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            <div 
              className="bg-yellow-400 p-6 border-4 border-black transform rotate-2 hover:rotate-6 transition-all duration-300"
              style={{ clipPath: 'polygon(0% 0%, 90% 0%, 100% 80%, 10% 100%)' }}
            >
              <h3 className="text-3xl font-black mb-4 text-black animate-glitch">
                BACKPACK<span className="text-red-600">STORE</span>
              </h3>
              <p className="text-black font-bold">РЮКЗАКИ ДЛЯ ХАОСА</p>
            </div>
            
            <div 
              className="bg-green-400 p-6 border-4 border-black transform -rotate-1 hover:rotate-3 transition-all duration-300"
              style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 80%)' }}
            >
              <h4 className="font-black mb-4 text-2xl text-black">КАТАЛОГ</h4>
              <div className="space-y-2 text-black font-bold">
                <p>URBAN CHAOS</p>
                <p>BRUTAL TRAVEL</p>
                <p>STREET MADNESS</p>
              </div>
            </div>
            
            <div 
              className="bg-blue-400 p-6 border-4 border-black transform rotate-1 hover:-rotate-2 transition-all duration-300"
              style={{ clipPath: 'polygon(0% 20%, 80% 0%, 100% 80%, 20% 100%)' }}
            >
              <h4 className="font-black mb-4 text-2xl text-black">КОНТАКТЫ</h4>
              <div className="space-y-2 text-black font-bold">
                <p>chaos@backpack.ru</p>
                <p>+7 (666) 999-ХАОС</p>
              </div>
            </div>
            
            <div 
              className="bg-red-400 p-6 border-4 border-black transform -rotate-2 hover:rotate-1 transition-all duration-300"
              style={{ clipPath: 'polygon(20% 0%, 100% 20%, 80% 100%, 0% 80%)' }}
            >
              <h4 className="font-black mb-4 text-2xl text-black">ХАОС</h4>
              <div className="flex space-x-4">
                <Icon name="Instagram" className="w-8 h-8 text-black hover:text-yellow-500 cursor-pointer transition-colors animate-brutal-spin" />
                <Icon name="MessageCircle" className="w-8 h-8 text-black hover:text-green-500 cursor-pointer transition-colors animate-chaos-move" />
                <Icon name="Twitter" className="w-8 h-8 text-black hover:text-blue-500 cursor-pointer transition-colors animate-glitch" />
              </div>
            </div>
          </div>
          
          <div className="border-t-4 border-yellow-500 pt-8 mt-12 text-center">
            <p className="text-2xl font-black text-white bg-black inline-block px-6 py-2 border-4 border-white transform rotate-1 animate-glitch">
              &copy; 2024 ХАОС ПРОДОЛЖАЕТСЯ
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;