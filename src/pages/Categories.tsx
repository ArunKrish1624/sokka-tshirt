import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ProductGrid } from '@/components/product/ProductGrid';
import { Search, Filter, Grid, List } from 'lucide-react';
import { categories, products, getProductsByCategory } from '@/data/mockData';

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.character.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.franchise.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return a.isNew ? -1 : b.isNew ? 1 : 0;
      default:
        return a.isFeatured ? -1 : b.isFeatured ? 1 : 0;
    }
  });

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Shop by Category
            </h1>

            <p className="text-lg text-muted-foreground">
              Discover t-shirts from your favorite anime, movies, TV series, and other.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Category Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Browse Categories</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <Card
              className={`cursor-pointer transition-all hover:shadow-lg ${selectedCategory === 'all' ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">All</span>
                </div>
                <h3 className="font-semibold">All Products</h3>
                <p className="text-sm text-muted-foreground">{products.length} items</p>
              </CardContent>
            </Card>

            {categories.map((category) => (
              <Card
                key={category.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${selectedCategory === category.slug ? 'ring-2 ring-primary' : ''}`}
                onClick={() => setSelectedCategory(category.slug)}
              >
                <CardContent className="p-6 text-center">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-16 h-16 object-cover rounded-lg mx-auto mb-3"
                  />
                  <h3 className="font-semibold">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {
                      products.filter(p => p.category.toLowerCase() === category.slug.toLowerCase()).length
                    } items
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Filters and Search */}
        <section className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">
                {selectedCategory === 'all' ? 'All Products' :
                  categories.find(c => c.slug === selectedCategory)?.name || 'Products'}
              </h2>
              <Badge variant="secondary">
                {sortedProducts.length} {sortedProducts.length === 1 ? 'item' : 'items'}
              </Badge>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search characters, franchises..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Products */}
        <section>
          <ProductGrid products={sortedProducts} />
        </section>
      </div>
      <Footer />
    </div>
  );
}