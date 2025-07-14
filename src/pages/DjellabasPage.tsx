import { ArrowLeft, Heart, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
const djellaba1 = '/lovable-uploads/0f1d0875-35ab-48ea-b009-a2229e63467d.png';

const DjellabasPage = () => {
  const djellabas = [
    {
      id: 1,
      name: 'Traditional Sky Djellaba',
      price: '$249',
      originalPrice: '$319',
      image: djellaba1,
      rating: 5,
      reviews: 32,
      description: 'Classic Moroccan djellaba with authentic embroidery and modern comfort',
      features: ['Traditional Design', 'Premium Cotton', 'Comfortable Fit', 'Daily Wear']
    },
    {
      id: 2,
      name: 'Modern Moroccan Djellaba',
      price: '$269',
      originalPrice: '$349',
      image: djellaba1,
      rating: 4.9,
      reviews: 28,
      description: 'Contemporary take on the classic djellaba with refined details',
      features: ['Modern Cut', 'Soft Fabric', 'Elegant Details', 'Versatile Style']
    },
    {
      id: 3,
      name: 'Heritage Blue Djellaba',
      price: '$289',
      originalPrice: '$369',
      image: djellaba1,
      rating: 5,
      reviews: 19,
      description: 'Premium djellaba crafted with traditional techniques and modern appeal',
      features: ['Heritage Craft', 'Luxury Fabric', 'Hand Finished', 'Special Occasions']
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
              Traditional <span className="text-gold">Djellaba</span> Collection
            </h1>
            <p className="text-luxury max-w-3xl mx-auto">
              Experience the timeless elegance of Moroccan djellabas, reimagined for contemporary life. 
              Each piece honors traditional craftsmanship while embracing modern comfort and style.
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {djellabas.map((djellaba) => (
            <Card key={djellaba.id} className="card-luxury group overflow-hidden">
              <div className="relative">
                <img 
                  src={djellaba.image} 
                  alt={djellaba.name}
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
                          className={`h-3 w-3 ${i < Math.floor(djellaba.rating) ? 'fill-gold text-gold' : 'text-white/50'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm">({djellaba.reviews})</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{djellaba.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{djellaba.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {djellaba.features.map((feature) => (
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
                    <span className="text-2xl font-bold text-gold">{djellaba.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{djellaba.originalPrice}</span>
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

export default DjellabasPage;