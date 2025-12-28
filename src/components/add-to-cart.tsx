'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-provider";
import type { Product } from "@/lib/placeholder-data";
import { ShoppingCart } from "lucide-react";
import { Input } from "./ui/input";

export function AddToCart({ product }: { product: Product }) {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        if (quantity > 0) {
            addToCart(product, quantity);
        }
    };
    
    return (
        <div className="mt-8 pt-8 border-t">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="h-10 w-10" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</Button>
                    <Input 
                        type="number" 
                        value={quantity} 
                        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} 
                        className="w-16 h-10 text-center"
                        min="1"
                    />
                    <Button variant="outline" size="icon" className="h-10 w-10" onClick={() => setQuantity(q => q + 1)}>+</Button>
                </div>
                <Button size="lg" className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90" onClick={handleAddToCart}>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                </Button>
            </div>
        </div>
    );
}
