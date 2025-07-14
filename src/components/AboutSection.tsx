import { Award, Crown, Heart, Star, Users } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: <Award className="h-8 w-8" />, value: '25+', label: 'Years of Excellence' },
    { icon: <Users className="h-8 w-8" />, value: '10K+', label: 'Happy Customers' },
    { icon: <Star className="h-8 w-8" />, value: '50+', label: 'Master Artisans' },
    { icon: <Heart className="h-8 w-8" />, value: '100%', label: 'Handcrafted' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="heading-secondary mb-6">
                Proudly <span className="text-gold">Moroccan</span>,
                <br />
                Truly <span className="text-accent">International</span>
              </h2>
              <p className="text-luxury">
                For over two decades, Afinis Caftan has been at the forefront of Moroccan haute couture, 
                creating exquisite kaftans and traditional wear that celebrates our rich heritage while embracing 
                contemporary elegance.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3" style={{ fontFamily: 'Montserrat' }}>
                  Master Craftsmanship
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Each piece is meticulously handcrafted by our team of master artisans, using techniques passed down 
                  through generations. We combine traditional Moroccan embroidery with Swarovski crystals and precious 
                  stones to create truly unique pieces.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-3" style={{ fontFamily: 'Montserrat' }}>
                  Global Recognition
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our designs have graced international runways and adorned celebrities worldwide, bringing the 
                  beauty of Moroccan fashion to a global audience while maintaining authentic craftsmanship.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-cream to-warm-gray/30">
                  <div className="text-secondary mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: 'Montserrat' }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-luxury)]">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center text-primary/60">
                  <Crown className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Artisan at Work</p>
                  <p className="text-sm">Master Craftsperson</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-secondary to-secondary-light rounded-full opacity-20 blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-accent to-accent-light rounded-full opacity-15 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;