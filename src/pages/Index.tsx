import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Hero } from '@/components/home/Hero';
import { ProductGrid } from '@/components/product/ProductGrid';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AuthModal } from '@/components/auth/AuthModal';
import { CartSheet } from '@/components/cart/CartSheet';
import { categories, getFeaturedProducts, getNewProducts } from '@/data/mockData';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const newProducts = getNewProducts();

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />

        {/* Featured Categories */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <TrendingUp className="h-3 w-3 mr-1" />
                Popular Categories
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Shop by Fandom</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find your favorite characters from anime, movies, TV series, and games.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link key={category.id} to={`/categories?category=${category.slug}`}>
                  <Card className="group cursor-pointer hover:shadow-lg transition-all">
                    <CardContent className="p-6 text-center">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-20 h-20 object-cover rounded-lg mx-auto mb-4 group-hover:scale-105 transition-transform"
                      />
                      <h3 className="font-semibold mb-1">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.productCount} designs</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
                <p className="text-muted-foreground">Hand-picked favorites from our collection</p>
              </div>
              <Button variant="outline" asChild>
                <Link to="/categories">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <ProductGrid products={featuredProducts.slice(0, 8)} />
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <Badge variant="secondary" className="mb-2">
                  <Sparkles className="h-3 w-3 mr-1" />
                  New Arrivals
                </Badge>
                <h2 className="text-3xl font-bold mb-2">Latest Designs</h2>
                <p className="text-muted-foreground">Fresh off the press</p>
              </div>
            </div>

            <ProductGrid products={newProducts} />
          </div>
        </section>
      </main>

      <Footer />
      <AuthModal />
      <CartSheet />
    </div>
  );
};

export default Index;
