import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useStore } from '@/store/useStore';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const {
    cartItemCount,
    wishlist,
    isAuthenticated,
    user,
    setCartOpen,
    setAuthModalOpen
  } = useStore();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Search:', searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold">TeeVerse</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/categories" className="text-foreground hover:text-primary transition-colors">
              Categories
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden lg:flex items-center space-x-2 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search for characters, franchises..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </form>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            {/* Mobile Search */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
              {wishlist.length > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {wishlist.length}
                </Badge>
              )}
            </Button>

            {/* Cart */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Button>

            {/* User Account */}
            {isAuthenticated ? (
              <Link to="/profile">
                <Button variant="ghost" size="icon">
                  {user?.avatar ? (
                    <img 
                      src={user.avatar} 
                      alt={user.name}
                      className="h-6 w-6 rounded-full"
                    />
                  ) : (
                    <User className="h-5 w-5" />
                  )}
                </Button>
              </Link>
            ) : (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setAuthModalOpen(true)}
              >
                <User className="h-5 w-5" />
              </Button>
            )}

            {/* Mobile Menu */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="block px-4 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/categories" 
                className="block px-4 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/about" 
                className="block px-4 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block px-4 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="px-4 py-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </form>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}