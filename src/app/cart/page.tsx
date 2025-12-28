'use client';

import { useCart } from '@/context/cart-provider';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Separator } from '@/components/ui/separator';
import { Trash2, ShoppingCart } from 'lucide-react';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <ShoppingCart className="mx-auto h-24 w-24 text-muted-foreground" />
        <h1 className="font-headline text-3xl mt-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mt-2">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild className="mt-6">
          <Link href="/products">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-headline text-3xl md:text-4xl font-bold">Your Shopping Cart</h1>
        <Button variant="outline" size="sm" onClick={clearCart}>
            Clear Cart
        </Button>
      </div>
      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2">
            <div className="space-y-4">
                {cart.map(item => {
                    const productImage = PlaceHolderImages.find(img => img.id === item.product.images[0]);
                    return (
                        <div key={item.product.id} className="flex items-center gap-4 border-b pb-4">
                            <div className="relative h-24 w-24 rounded-md overflow-hidden shrink-0">
                                {productImage && <Image src={productImage.imageUrl} alt={item.product.name} fill className="object-cover" />}
                            </div>
                            <div className="flex-grow">
                                <Link href={`/products/${item.product.id}`} className="font-semibold hover:text-primary">{item.product.name}</Link>
                                <p className="text-sm text-muted-foreground">₹{item.product.price.toLocaleString()}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>-</Button>
                                <Input 
                                    type="number" 
                                    value={item.quantity} 
                                    onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value))}
                                    className="w-12 h-8 text-center"
                                />
                                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>+</Button>
                            </div>
                            <p className="w-24 text-right font-semibold">₹{(item.product.price * item.quantity).toLocaleString()}</p>
                            <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.product.id)}>
                                <Trash2 className="h-4 w-4 text-muted-foreground" />
                            </Button>
                        </div>
                    );
                })}
            </div>
        </div>
        <div className="lg:col-span-1">
            <div className="p-6 border rounded-lg bg-secondary/30 sticky top-24">
                <h2 className="text-lg font-headline font-semibold mb-4">Order Summary</h2>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span>Free</span>
                    </div>
                     <div className="flex justify-between">
                        <span className="text-muted-foreground">Taxes</span>
                        <span>Calculated at checkout</span>
                    </div>
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                </div>
                 <Button size="lg" className="w-full mt-6 bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                    <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
