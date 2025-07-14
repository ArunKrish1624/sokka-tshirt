import { useState } from 'react';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Product } from '@/types';
import { useStore } from '@/store/useStore';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useStore();
  
  const isWishlisted = isInWishlist(product.id);
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount 
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor);
  };

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Card className={cn("group overflow-hidden hover:shadow-lg transition-shadow", className)}>
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNew && (
            <Badge className="bg-accent text-accent-foreground">New</Badge>
          )}
          {hasDiscount && (
            <Badge variant="destructive">{discountPercent}% OFF</Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 h-8 w-8 bg-background/80 hover:bg-background"
          onClick={handleWishlistToggle}
        >
          <Heart 
            className={cn(
              "h-4 w-4",
              isWishlisted ? "fill-destructive text-destructive" : "text-muted-foreground"
            )} 
          />
        </Button>

        {/* Quick Actions */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="flex gap-2">
            <Button size="sm" variant="secondary">
              <Eye className="h-4 w-4 mr-1" />
              Quick View
            </Button>
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-sm leading-tight line-clamp-2">
              {product.name}
            </h3>
          </div>
          
          <p className="text-xs text-muted-foreground">
            {product.character} • {product.franchise}
          </p>
          
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-3 w-3",
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-muted-foreground"
                  )}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviewCount})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold">${product.price}</span>
            {hasDiscount && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 space-y-3">
        {/* Size Selection */}
        <div className="w-full">
          <p className="text-xs font-medium mb-2">Size:</p>
          <div className="flex gap-1 flex-wrap">
            {product.sizes.map((size) => (
              <Button
                key={size}
                variant={selectedSize === size ? "default" : "outline"}
                size="sm"
                className="h-7 px-2 text-xs"
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>

        {/* Color Selection */}
        <div className="w-full">
          <p className="text-xs font-medium mb-2">Color:</p>
          <div className="flex gap-1 flex-wrap">
            {product.colors.map((color) => (
              <Button
                key={color}
                variant={selectedColor === color ? "default" : "outline"}
                size="sm"
                className="h-7 px-2 text-xs"
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </Button>
            ))}
          </div>
        </div>

        {/* Add to Cart */}
        <Button 
          className="w-full" 
          size="sm"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4 mr-1" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}