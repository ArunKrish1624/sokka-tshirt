import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useStore } from '@/store/useStore';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { User, Mail, Calendar, Package, Heart, LogOut } from 'lucide-react';

export default function Profile() {
  const { user, logout, wishlist, cart } = useStore();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Header />
        <Card className="w-full max-w-md">
          <CardContent className="pt-6 text-center">
            <p className="text-muted-foreground mb-4">Please log in to view your profile</p>
            <Button>Sign In</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{user.name}</CardTitle>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      {user.email}
                    </p>
                  </div>
                </div>
                <Button variant="outline" onClick={logout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{wishlist.length}</div>
                  <div className="text-sm text-muted-foreground">Wishlist Items</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{cart.length}</div>
                  <div className="text-sm text-muted-foreground">Cart Items</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">0</div>
                  <div className="text-sm text-muted-foreground">Orders</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Wishlist
                </CardTitle>
              </CardHeader>
              <CardContent>
                {wishlist.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">No items in wishlist</p>
                ) : (
                  <div className="space-y-4">
                    {wishlist.slice(0, 3).map((product) => (
                      <div key={product.id} className="flex items-center gap-3">
                        <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded" />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{product.name}</p>
                          <p className="text-sm text-muted-foreground">${product.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Recent Orders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center py-8">No recent orders</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}