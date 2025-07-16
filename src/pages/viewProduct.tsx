import { useParams } from "react-router-dom";
import { products } from "@/data/mockData"; // Use full list to filter by name
import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Heart, Star, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from "react-router-dom";


export default function ViewProduct() {
    const { name } = useParams();
    const [product, setProduct] = useState<any>(null);
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => setQuantity((prev) => prev + 1);
    const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    useEffect(() => {
        const foundProduct = products.find(
            (p) => decodeURIComponent(p.name.toLowerCase()) === name?.toLowerCase()
        );
        setProduct(foundProduct || null);
        if (foundProduct) {
            setSelectedColor(foundProduct.colors[0]);
        }
    }, [name]);


    useEffect(() => {
        const foundProduct = products.find(
            (p) => decodeURIComponent(p.name.toLowerCase()) === name?.toLowerCase()
        );
        setProduct(foundProduct || null);
    }, [name]);

    if (!product) {
        return <p className="text-center mt-10">Product not found.</p>;
    }

    return (
        <div className="min-h-screen">
            <Header />
            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="flex flex-col md:flex-row gap-10">
                    {/* Product Image */}
                    <div className="w-full md:w-1/2">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full rounded-xl shadow-xl"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="w-full md:w-1/2 space-y-3">
                        <h1 className="text-3xl font-bold">{product.name}</h1>
                        <p className="text-sm text-muted-foreground">
                            {product.character} • {product.franchise}
                        </p>

                        {/* Price */}
                        <div className="text-2xl font-bold">
                            ${product.price}
                            {product.originalPrice && (
                                <span className="text-lg ml-2 text-muted-foreground line-through">
                                    ${product.originalPrice}
                                </span>
                            )}
                        </div>

                        {/* Ratings */}
                        <div className="flex items-center gap-1">
                            <div className="flex items-center">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className={cn(
                                            "h-5 w-5",
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

                        {/* Sizes */}
                        <div>
                            <p className="text-sm font-medium mb-2">Available Sizes:</p>
                            <div className="flex gap-2 flex-wrap">
                                {product.sizes.map((size: string) => (
                                    <button
                                        key={size}
                                        className="px-3 py-1 border rounded hover:bg-muted text-sm"
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Colors */}
                        <div className="w-full">
                            <p className="text-xs font-medium mb-2">Color:</p>
                            <div className="flex gap-2 flex-wrap">
                                {product.colors.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-5 h-5 rounded-full border border-gray-400`}
                                        style={{
                                            backgroundColor: color,
                                            boxShadow:
                                                selectedColor === color
                                                    ? '0 0 0 2px rgba(147, 51, 234, 1)' // purple glow
                                                    : 'none',
                                        }}
                                        aria-label={`Select ${color}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Quantity Selector */}
                        <div>
                            <p className="text-sm font-medium mb-2">Quantity:</p>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={handleDecrease}
                                    className="px-3 py-1 border rounded text-lg font-bold"
                                >
                                    -
                                </button>
                                <span className="min-w-[2rem] text-center">{quantity}</span>
                                <button
                                    onClick={handleIncrease}
                                    className="px-3 py-1 border rounded text-lg font-bold"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Add to Cart */}
                        <Button className="w-full" size="sm">
                            <ShoppingCart className="h-4 w-4 mr-1" />
                            Add to Cart
                        </Button>
                    </div>
                </div>

                {/* Description */}
                <div className="mt-12">
                    <h2 className="text-lg font-semibold mb-2">Product Description</h2>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                </div>


                <div className="mt-16">
                    <h2 className="text-xl font-bold mb-4">Related T-Shirts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products
                            .filter((p) => p.category === product.category && p.id !== product.id)
                            .slice(0, 4)
                            .map((related) => (
                                <div key={related.id} className="border p-3 rounded hover:shadow transition">
                                    <img
                                        src={related.image}
                                        alt={related.name}
                                        className="w-full h-48 object-cover rounded"
                                    />
                                    <h3 className="mt-2 font-semibold text-sm line-clamp-2">
                                    <Link to={`/tshirt/${encodeURIComponent(related.name)}`} className="hover:underline"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                        {related.name}
                                    </Link>
                                    </h3>
                                    <p className="text-xs text-muted-foreground">{related.character}</p>
                                    <p className="text-sm font-bold mt-1">${related.price}</p>
                                </div>
                            ))}
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}
