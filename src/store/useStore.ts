import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, CartItem, User } from '@/types';

interface Store {
  // Cart state
  cart: CartItem[];
  addToCart: (product: Product, size: string, color: string, quantity?: number) => void;
  removeFromCart: (productId: string, size: string, color: string) => void;
  updateCartQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartItemCount: number;

  // Wishlist state
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;

  // User state
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;

  // UI state
  isCartOpen: boolean;
  isAuthModalOpen: boolean;
  authMode: 'login' | 'signup';
  setCartOpen: (open: boolean) => void;
  setAuthModalOpen: (open: boolean) => void;
  setAuthMode: (mode: 'login' | 'signup') => void;
}

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      // Cart state
      cart: [],
      addToCart: (product, size, color, quantity = 1) => {
        const existingItem = get().cart.find(
          item => item.product.id === product.id && item.size === size && item.color === color
        );
        
        if (existingItem) {
          set(state => ({
            cart: state.cart.map(item =>
              item.product.id === product.id && item.size === size && item.color === color
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          }));
        } else {
          set(state => ({
            cart: [...state.cart, { product, size, color, quantity }]
          }));
        }
      },
      removeFromCart: (productId, size, color) => {
        set(state => ({
          cart: state.cart.filter(
            item => !(item.product.id === productId && item.size === size && item.color === color)
          )
        }));
      },
      updateCartQuantity: (productId, size, color, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId, size, color);
          return;
        }
        
        set(state => ({
          cart: state.cart.map(item =>
            item.product.id === productId && item.size === size && item.color === color
              ? { ...item, quantity }
              : item
          )
        }));
      },
      clearCart: () => set({ cart: [] }),
      get cartTotal() {
        return get().cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
      },
      get cartItemCount() {
        return get().cart.reduce((count, item) => count + item.quantity, 0);
      },

      // Wishlist state
      wishlist: [],
      addToWishlist: (product) => {
        set(state => ({
          wishlist: state.wishlist.some(item => item.id === product.id)
            ? state.wishlist
            : [...state.wishlist, product]
        }));
      },
      removeFromWishlist: (productId) => {
        set(state => ({
          wishlist: state.wishlist.filter(item => item.id !== productId)
        }));
      },
      isInWishlist: (productId) => {
        return get().wishlist.some(item => item.id === productId);
      },

      // User state
      user: null,
      isAuthenticated: false,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false, cart: [], wishlist: [] }),

      // UI state
      isCartOpen: false,
      isAuthModalOpen: false,
      authMode: 'login',
      setCartOpen: (open) => set({ isCartOpen: open }),
      setAuthModalOpen: (open) => set({ isAuthModalOpen: open }),
      setAuthMode: (mode) => set({ authMode: mode }),
    }),
    {
      name: 'tshirt-store',
      partialize: (state) => ({
        cart: state.cart,
        wishlist: state.wishlist,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);