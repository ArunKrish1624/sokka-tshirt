import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Users, Heart, Truck, Shield } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Users,
      title: 'Fan Community',
      description: 'Built by fans, for fans. We understand what makes great character merchandise.'
    },
    {
      icon: Heart,
      title: 'Quality First',
      description: 'Premium materials and printing techniques ensure your designs look amazing and last longer.'
    },
    {
      icon: Truck,
      title: 'Fast Shipping',
      description: 'Quick processing and reliable delivery to get your favorite tees to you as soon as possible.'
    },
    {
      icon: Shield,
      title: 'Satisfaction Guarantee',
      description: 'Not happy with your order? We offer easy returns and exchanges within 30 days.'
    }
  ];

  const stats = [
    { label: 'Years in Business', value: '5+' },
    { label: 'Happy Customers', value: '50,000+' },
    { label: 'Unique Designs', value: '1,000+' },
    { label: 'Countries Shipped', value: '25+' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="w-fit mx-auto">
              About TeeVerse
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold">
              Bringing Your Favorite Characters to Life
            </h1>
            
            <p className="text-lg text-muted-foreground">
              We're passionate about creating high-quality apparel that celebrates the characters 
              and stories you love. From anime heroes to movie legends, we bring your fandoms to life 
              through carefully crafted designs.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Our Story */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  TeeVerse was born from a simple idea: fans deserve better merchandise. 
                  Too often, we found ourselves disappointed by low-quality prints that 
                  faded after a few washes or designs that didn't capture the essence 
                  of our favorite characters.
                </p>
                
                <p>
                  Founded in 2019 by a group of anime enthusiasts and design professionals, 
                  we set out to create a different kind of merchandise company. One that 
                  understands the passion behind fandom and translates that into products 
                  fans can truly be proud to wear.
                </p>
                
                <p>
                  Today, we work with talented artists from around the world to create 
                  unique, high-quality designs that celebrate characters from anime, 
                  movies, TV series, and games. Every shirt is printed with premium 
                  inks on carefully selected fabrics to ensure both comfort and longevity.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Our team working"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Features */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose TeeVerse?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering the best possible experience for fellow fans.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        {/* Stats */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">By the Numbers</h2>
            <p className="text-lg text-muted-foreground">
              Our community continues to grow every day.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section>
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-bold">Our Mission</h2>
                
                <p className="text-lg text-muted-foreground">
                  To create a world where fans can express their passion through 
                  high-quality, authentic merchandise that honors the characters 
                  and stories they love. We believe that every fan deserves products 
                  that match the quality of their dedication.
                </p>
                
                <div className="flex justify-center pt-4">
                  <Badge variant="outline" className="text-primary border-primary">
                    Made with ❤️ for fans worldwide
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}