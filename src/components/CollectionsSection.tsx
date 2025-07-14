import { ArrowRight, Crown, Gem, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const kaftan1 = '/lovable-uploads/bf54b2a7-ef19-4e33-ab6f-c058fa8d0d1f.png';
const djellaba1 = '/lovable-uploads/0f1d0875-35ab-48ea-b009-a2229e63467d.png';
const bridal1 = '/lovable-uploads/90cde7de-9e8f-4ecb-a5f7-199eb8b1e8fd.png';

const CollectionsSection = () => {
  const collections = [
    {
      id: 1,
      title: 'Luxury Kaftan Collection',
      description: 'Exquisite hand-embroidered kaftans with Swarovski crystals and gold threadwork',
      image: kaftan1,
      icon: <Crown className="h-8 w-8" />,
      features: ['Swarovski Crystals', 'Gold Embroidery', 'Premium Silk'],
      cta: 'Shop Kaftans',
      link: '/kaftans'
    },
    {
      id: 2,
      title: 'Traditional Djellaba',
      description: 'Timeless Moroccan robes crafted with authentic techniques and modern elegance',
      image: djellaba1,
      icon: <Sparkles className="h-8 w-8" />,
      features: ['Traditional Design', 'Premium Cotton', 'Modern Fit'],
      cta: 'Shop Djellabas',
      link: '/djellabas'
    },
    {
      id: 3,
      title: 'Bridal Takchita',
      description: 'Ceremonial masterpieces for your special day, adorned with precious stones',
      image: bridal1,
      icon: <Gem className="h-8 w-8" />,
      features: ['Bridal Exclusive', 'Precious Stones', 'Custom Sizing'],
      cta: 'Bridal Collection',
      link: '/bridal'
    }
  ];

  return (
    <section id="collections" className="py-20 bg-gradient-to-b from-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">
            Our <span className="text-gold">Exclusive</span> Collections
          </h2>
          <p className="text-luxury max-w-3xl mx-auto">
            Discover the finest Moroccan fashion, where traditional craftsmanship meets contemporary luxury. 
            Each piece is meticulously handcrafted by master artisans.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div 
              key={collection.id}
              className="card-luxury group cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 text-secondary opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {collection.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary" style={{ fontFamily: 'Montserrat' }}>
                  {collection.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {collection.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {collection.features.map((feature) => (
                    <span 
                      key={feature}
                      className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link to={collection.link}>
                  <Button className="btn-primary-luxury w-full group">
                    {collection.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button className="btn-luxury text-lg px-12 py-4">
            View Complete Collection
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;