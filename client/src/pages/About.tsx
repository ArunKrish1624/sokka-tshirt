import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Users, Heart, Truck, Shield } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

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
      description: 'Premium materials and clean printing ensure your designs look amazing and last longer.'
    },
    {
      icon: Truck,
      title: 'Fast Dropshipping',
      description: 'Swift processing and dependable delivery to get your favorite merch to you quickly.'
    },
    {
      icon: Shield,
      title: 'Satisfaction Guarantee',
      description: 'Not happy with your order? Easy returns and exchanges within 30 days.'
    }
  ]

  const stats = [
    { label: 'Years in Business', value: 'Since 2025' },
    { label: 'Happy Customers', value: '2,000+' },
    { label: 'Unique Designs', value: '300+' },
    { label: 'Countries Served', value: '5+' }
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="w-fit mx-auto">
              About Sokka
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-bold">
              Merch Made for True Fans
            </h1>

            <p className="text-lg text-muted-foreground">
              We're passionate about delivering unique, high-quality character merchandise you won’t
              find in regular stores. From anime icons to pop culture legends — Sokka drops your fandom 
              favorites straight to your doorstep.
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
                  Sokka was founded in Thanjavur, Tamil Nadu on June 1, 2025 — a small startup built by
                  a group of fandom enthusiasts who were tired of boring, low-effort merch.
                </p>

                <p>
                  We noticed fans were stuck with overpriced, poorly made designs that didn’t capture the
                  energy of their favorite characters. So, we started Sokka — a dropshipping brand that
                  prioritizes both quality and creativity.
                </p>

                <p>
                  Today, Sokka collaborates with indie artists and creative talents to launch bold, vibrant
                  designs celebrating anime, movies, gaming, and pop culture fandoms. Every product ships
                  swiftly with reliable service — because your hype shouldn’t have to wait.
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
            <h2 className="text-3xl font-bold mb-4">Why Choose Sokka?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're dedicated to giving fans merch they’ll actually be excited to unbox.
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
            <h2 className="text-3xl font-bold mb-4">Where We Stand</h2>
            <p className="text-lg text-muted-foreground">
              We might be new — but our community’s already growing.
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
                  To empower fans with accessible, high-quality merch drops that feel personal — because 
                  great stories deserve great souvenirs. Sokka's here to celebrate the characters and 
                  fandoms that fuel your passion.
                </p>

                <div className="flex justify-center pt-4">
                  <Badge variant="outline" className="text-primary border-primary">
                    Made with ❤️ in Thanjavur for fans everywhere
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>

      <Footer />
    </div>
  )
}