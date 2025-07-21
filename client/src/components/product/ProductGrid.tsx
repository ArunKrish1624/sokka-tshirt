import { ProductCard } from './ProductCard';
import { Product } from '@/types';

interface ProductGridProps {
  products: Product[];
  className?: string;
  minimal?: boolean;
  viewMode?: 'grid' | 'list'; 
}

export function ProductGrid({
  products,
  className,
  minimal = false,
  viewMode = 'grid',
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No products found.</p>
      </div>
    );
  }

  const containerClass =
    viewMode === 'grid'
      ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
      : 'flex flex-col gap-4';

  return (
    <div className={`${containerClass} ${className}`}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          minimal={minimal}
          viewMode={viewMode}
        />
      ))}
    </div>
  );
}
