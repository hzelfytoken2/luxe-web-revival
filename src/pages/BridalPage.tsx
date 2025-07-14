import { ArrowLeft, Heart, ShoppingCart, Star, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
const bridal1 = '/lovable-uploads/90cde7de-9e8f-4ecb-a5f7-199eb8b1e8fd.png';

const BridalPage = () => {
  const bridalCollection = [
    {
      id: 1,
      name: 'Golden Empress Takchita',
      price: '$899',
      originalPrice: '$1199',
      image: bridal1,
      rating: 5,
      reviews: 15,
      description: 'Magnificent golden takchita with intricate embroidery and precious stone details',
      features: ['Precious Stones', 'Gold Thread', 'Custom Sizing', 'Bridal Exclusive']
    },
    {
      id: 2,
      name: 'Royal Wedding Kaftan',
      price: '$1299',
      originalPrice: '$1699',
      image: bridal1,
      rating: 5,
      reviews: 8,
      description: 'Luxurious bridal kaftan adorned with Swarovski crystals and gold embellishments',
      features: ['Swarovski Crystals', 'Hand Beaded', 'Couture Design', 'Made to Order']
    },
    {
      id: 3,
      name: 'Majestic Bridal Ensemble',
      price: '$1599',
      originalPrice: '$2099',
      image: bridal1,
      rating: 5,
      reviews: 12,
      description: 'Complete bridal ensemble with matching accessories and exquisite detailing',
      features: ['Complete Set', 'Master Crafted', 'Heirloom Quality', 'Consultation Included']
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
              Bridal <span className="text-gold">Takchita</span> Collection
            </h1>
            <p className="text-luxury max-w-3xl mx-auto">
              Make your special day unforgettable with our exclusive bridal collection. 
              Each takchita is a masterpiece, designed to make you feel like royalty on your wedding day.
            </p>
          </div>
        </div>
      </div>

      {/* Special Services Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-gold/10 to-primary/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-primary mb-4">Bridal Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="h-5 w-5 text-gold" />
              <span>Personal Consultation</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Star className="h-5 w-5 text-gold" />
              <span>Custom Fittings</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Heart className="h-5 w-5 text-gold" />
              <span>Bridal Styling</span>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bridalCollection.map((item) => (
            <Card key={item.id} className="card-luxury group overflow-hidden">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-white px-3 py-1 rounded-full text-xs font-medium">
                    Bridal Exclusive
                  </span>
                </div>
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
                          className={`h-3 w-3 ${i < Math.floor(item.rating) ? 'fill-gold text-gold' : 'text-white/50'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm">({item.reviews})</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.features.map((feature) => (
                    <span 
                      key={feature}
                      className="px-2 py-1 text-xs bg-gold/10 text-gold rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gold">{item.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{item.originalPrice}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Button className="btn-primary-luxury w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Consultation
                  </Button>
                  <Button variant="outline" className="w-full">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Request Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BridalPage;