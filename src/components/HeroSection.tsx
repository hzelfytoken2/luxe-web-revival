import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in fade-in-visible">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/c2322f86-608f-408f-8179-5a9f3d63175f.png" 
              alt="Afinis Logo" 
              className="mx-auto max-w-xs md:max-w-sm h-auto"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-luxury group">
              <Sparkles className="mr-2 h-5 w-5" />
              Shop Kaftan
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button className="btn-outline-luxury group">
              Shop Djellaba
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-cream/70 animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cream/70 rounded-full mt-2 animate-pulse" />
          </div>
          <p className="text-xs mt-2 tracking-wider">SCROLL</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;