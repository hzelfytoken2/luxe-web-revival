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
          <p className="text-secondary-light font-medium tracking-widest uppercase mb-4 text-sm md:text-base">
            Time to bag the best of Moroccan Dress
          </p>
          
          <h1 className="heading-primary text-white mb-6">
            Swarovski Crystal
            <br />
            <span className="text-gold">Embellishments</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-cream mb-8 max-w-2xl mx-auto leading-relaxed">
            Adorned With <span className="text-gold font-semibold">Precious Stones</span>
          </p>
          
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