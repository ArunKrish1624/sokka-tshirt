import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useStore } from '@/store/useStore';

export function CartSheet() {
  const {
    isCartOpen,
    setCartOpen,
    cart,
    cartTotal,
    cartItemCount,
    updateCartQuantity,
    removeFromCart
  } = useStore();

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  if (cart.length === 0) {
    return (
      <Sheet open={isCartOpen} onOpenChange={setCartOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
            <SheetDescription>Your cart is currently empty</SheetDescription>
          </SheetHeader>
          
          <div className="flex flex-col items-center justify-center h-[60%] space-y-4">
            <ShoppingBag className="h-16 w-16 text-muted-foreground" />
            <p className="text-muted-foreground text-center">
              Add some awesome t-shirts to your cart to see them here!
            </p>
            <Button onClick={() => setCartOpen(false)}>
              Continue Shopping
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet open={isCartOpen} onOpenChange={setCartOpen}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            Shopping Cart
            <Badge variant="secondary">{cartItemCount}</Badge>
          </SheetTitle>
          <SheetDescription>
            Review your items before checkout
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto space-y-4 py-4">
          {cart.map((item) => (
            <div key={`${item.product.id}-${item.size}-${item.color}`} className="space-y-3">
              <div className="flex gap-3">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                
                <div className="flex-1 space-y-1">
                  <h4 className="font-medium text-sm leading-tight">
                    {item.product.name}
                  </h4>
                  
                  <div className="flex gap-2 text-xs text-muted-foreground">
                    <span>Size: {item.size}</span>
                    <span>•</span>
                    <span>Color: {item.color}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => updateCartQuantity(
                          item.product.id, 
                          item.size, 
                          item.color, 
                          item.quantity - 1
                        )}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      
                      <span className="text-sm font-medium w-8 text-center">
                        {item.quantity}
                      </span>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => updateCartQuantity(
                          item.product.id, 
                          item.size, 
                          item.color, 
                          item.quantity + 1
                        )}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 text-destructive hover:text-destructive"
                        onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
            </div>
          ))}
        </div>

        <div className="space-y-4 pt-4 border-t">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-lg font-bold">{formatPrice(cartTotal)}</span>
          </div>
          
          <div className="space-y-2">
            <Button className="w-full" size="lg">
              Proceed to Checkout
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setCartOpen(false)}
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}