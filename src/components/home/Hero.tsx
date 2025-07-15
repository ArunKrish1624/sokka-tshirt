import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <Sparkles className="h-3 w-3 mr-1" />
                New Collection Available
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Wear Your
                <span className="text-primary block">Fandom</span>
                With Pride
              </h1>

              <p className="text-lg text-muted-foreground max-w-md">
                Discover premium t-shirts featuring your favorite characters from anime,
                movies, and TV series. Quality designs that let your personality shine.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button variant="outline" size="lg">
                Browse Categories
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm">
              <div className="text-center">
                <div className="font-bold text-2xl text-primary">1000+</div>
                <div className="text-muted-foreground">Designs</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-primary">50K+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-primary">4.9★</div>
                <div className="text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          <div className="relative group cursor-pointer">
            {/* Image */}
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop"
                alt="Featured T-Shirt Collection"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transition-transform duration-700 ease-in-out
               group-hover:animate-spinYForward animate-spinYBackward"
              />
            </div>



            {/* Floating Cards */}
            <div
              className="absolute -top-4 -right-4 bg-card border rounded-lg p-3 shadow-lg z-40 transition-all duration-300 group-hover:animate-floatTopCurve animate-floatTopReturn"
            >
              <div className="text-xs text-muted-foreground">Most Popular</div>
              <div className="font-semibold">Anime Collection</div>
            </div>

            <div
              className="absolute -bottom-4 -left-4 bg-card border rounded-lg p-3 shadow-lg z-40 transition-all duration-300 group-hover:animate-floatBottomCurve animate-floatBottomReturn"
            >
              <div className="text-xs text-muted-foreground">Free Shipping</div>
              <div className="font-semibold">On Orders $50+</div>
            </div>

            {/* Background Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10"></div>

            {/* Trigger the spinY animation on hover */}
            {/* <div className="absolute inset-0 z-30 group-hover:animate-spinYFast pointer-events-none"></div> */}
          </div>

        </div>
      </div>
    </section>
  );
}