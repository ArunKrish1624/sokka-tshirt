import { useState } from 'react';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Product } from '@/types';
import { useStore } from '@/store/useStore';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  className?: string;
  minimal?: boolean;
  viewMode?: 'grid' | 'list';
}

export function ProductCard({
  product,
  className,
  minimal = false,
  viewMode = 'grid', // default to grid
}: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useStore();
  const isWishlisted = isInWishlist(product.id);

  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor);
  };

  const handleWishlistToggle = () => {
    isWishlisted ? removeFromWishlist(product.id) : addToWishlist(product);
  };

  return (
    <Card
      className={cn(
        "group overflow-hidden hover:shadow-lg transition-shadow cursor-pointer",
        viewMode === 'list' ? 'sm:flex sm:flex-col' : 'flex flex-col',
        className
      )}
    >
      {/* For mobile list view layout (image on left, content on right) */}
      {viewMode === 'list' ? (
        <div className="flex flex-row w-full items-start space-x-3 h-40">
          {/* Image Section */}
          <div className="w-[40%] h-full">
            <Link to={`/tshirt/${encodeURIComponent(product.name)}`} className="block w-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Content Section */}
          <div className="w-[60%] px-3 py-4 flex flex-col justify-between">
            <div className="min-h-[3rem]">
              <h3 className="font-semibold text-xl leading-tight line-clamp-2">
                <Link to={`/tshirt/${encodeURIComponent(product.name)}`} className="hover:underline">
                  {product.name}
                </Link>
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {product.character} • {product.franchise}
              </p>
            </div>

            <div className="flex items-center justify-between mt-2">
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

              <div className="flex flex-col items-end gap-0.5">
                <span className="font-bold text-xl">₹{product.price}</span>
                {!minimal && hasDiscount && (
                  <span className="text-xs text-muted-foreground line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-2 flex gap-2">
              <Link to={`/tshirt/${encodeURIComponent(product.name)}`} className="w-1/2">
                <Button
                  className="w-full border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                  size="sm"
                  variant="outline"
                >
                  View Now
                </Button>
              </Link>

              <div className="w-1/2">
                <Button
                  className="w-full"
                  size="sm"
                  onClick={handleAddToCart}
                  aria-label="Add to Cart"
                >
                  <ShoppingCart className="h-4 w-4 mr-1" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>

      ) : (
        // Default full layout for grid or non-mobile
        <>
          {/* Image Section */}
          <div className="relative">
            <Link to={`/tshirt/${encodeURIComponent(product.name)}`} className="block">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Badges */}
            <div className="absolute top-2 left-2 flex flex-col gap-1 z-20">
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
              aria-label="Toggle Wishlist"
              className="absolute top-2 right-2 h-8 w-8 z-20 bg-background/80 hover:bg-background"
              onClick={handleWishlistToggle}
            >
              <Heart
                className={cn(
                  "h-4 w-4",
                  isWishlisted ? "fill-destructive text-destructive" : "text-muted-foreground"
                )}
              />
            </Button>

            {/* Quick View */}
            <div className="absolute inset-0 z-10 bg-black/50 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Link to={`/tshirt/${encodeURIComponent(product.name)}`}>
                <Button size="sm" variant="secondary" aria-label="Quick View">
                  <Eye className="h-4 w-4 mr-1" />
                  Quick View
                </Button>
              </Link>
            </div>
          </div>

          {/* Content */}
          <CardContent className="flex flex-col flex-grow p-4 space-y-1">
            <div className="min-h-[3rem]">
              <h3 className="font-semibold text-m leading-tight line-clamp-2">
                <Link to={`/tshirt/${encodeURIComponent(product.name)}`} className="hover:underline">
                  {product.name}
                </Link>
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {product.character} • {product.franchise}
              </p>
            </div>

            <div className="flex items-center justify-between mt-auto">
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

              <div className="flex flex-col items-end gap-0.5">
                <span className="font-bold text-lg">₹{product.price}</span>
                {!minimal && hasDiscount && (
                  <span className="text-xs text-muted-foreground line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>
            </div>
          </CardContent>

          {/* Footer */}
          <CardFooter className="p-4 pt-0 mt-auto flex flex-col gap-3">
            {minimal ? (
              <Link to={`/tshirt/${encodeURIComponent(product.name)}`} className="w-full">
                <Button
                  className="w-full border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                  size="sm"
                  variant="outline"
                >
                  View Now
                </Button>
              </Link>
            ) : (
              <>
                <div className="w-full">
                  <p className="text-xs font-medium mb-2">Size:</p>
                  <div className="flex gap-1 flex-wrap">
                    {product.sizes.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? "default" : "outline"}
                        size="sm"
                        className="h-7 px-3 text-xs"
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="w-full">
                  <p className="text-xs font-medium mb-2">Color:</p>
                  <div className="flex gap-2 flex-wrap">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className="w-5 h-5 rounded-full border border-gray-400"
                        style={{
                          backgroundColor: color,
                          boxShadow:
                            selectedColor === color
                              ? '0 0 0 2px rgba(147, 51, 234, 1)'
                              : 'none',
                        }}
                        aria-label={`Select color ${color}`}
                      />
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full"
                  size="sm"
                  onClick={handleAddToCart}
                  aria-label="Add to Cart"
                >
                  <ShoppingCart className="h-4 w-4 mr-1" />
                  Add to Cart
                </Button>
              </>
            )}
          </CardFooter>
        </>
      )}
    </Card>
  );
}
