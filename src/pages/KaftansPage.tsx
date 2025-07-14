import { ArrowLeft, Heart, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
const kaftan1 = '/lovable-uploads/bf54b2a7-ef19-4e33-ab6f-c058fa8d0d1f.png';

const KaftansPage = () => {
  const kaftans = [
    {
      id: 1,
      name: 'Azure Dream Kaftan',
      price: '$299',
      originalPrice: '$399',
      image: kaftan1,
      rating: 5,
      reviews: 24,
      description: 'Elegant light blue kaftan with intricate silver embroidery and golden belt',
      features: ['Hand Embroidered', 'Premium Silk', 'Adjustable Belt', 'Custom Fit Available']
    },
    {
      id: 2,
      name: 'Royal Blue Kaftan',
      price: '$329',
      originalPrice: '$429',
      image: kaftan1,
      rating: 5,
      reviews: 18,
      description: 'Luxurious royal blue kaftan with traditional Moroccan patterns',
      features: ['Swarovski Details', 'Silk Blend', 'Traditional Design', 'Evening Wear']
    },
    {
      id: 3,
      name: 'Ocean Breeze Kaftan',
      price: '$279',
      originalPrice: '$359',
      image: kaftan1,
      rating: 4.8,
      reviews: 31,
      description: 'Light and airy kaftan perfect for special occasions',
      features: ['Breathable Fabric', 'Modern Cut', 'Easy Care', 'Versatile Style']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      <Navigation />
      
      {/* Header */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-primary hover:text-gold transition-colors mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="heading-primary mb-6">
              Luxury <span className="text-gold">Kaftan</span> Collection
            </h1>
            <p className="text-luxury max-w-3xl mx-auto">
              Discover our exquisite collection of handcrafted kaftans, where traditional Moroccan 
              artistry meets contemporary elegance. Each piece is meticulously designed for the modern woman.
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kaftans.map((kaftan) => (
            <Card key={kaftan.id} className="card-luxury group overflow-hidden">
              <div className="relative">
                <img 
                  src={kaftan.image} 
                  alt={kaftan.name}
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <Button
                  size="icon"
                  variant="outline"
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white border-0"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-3 w-3 ${i < Math.floor(kaftan.rating) ? 'fill-gold text-gold' : 'text-white/50'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm">({kaftan.reviews})</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{kaftan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{kaftan.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {kaftan.features.map((feature) => (
                    <span 
                      key={feature}
                      className="px-2 py-1 text-xs bg-secondary/10 text-secondary rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gold">{kaftan.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{kaftan.originalPrice}</span>
                  </div>
                </div>
                
                <Button className="btn-primary-luxury w-full">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default KaftansPage;