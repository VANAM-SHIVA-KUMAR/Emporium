'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/context/cart-provider"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
    const { cart, clearCart } = useCart()
    const router = useRouter()
    const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)

    if (cart.length === 0 && typeof window !== 'undefined') {
        router.push('/products')
        return null
    }

    const handlePlaceOrder = () => {
        alert('Thank you for your order! (This is a demo)');
        clearCart();
        router.push('/account');
    }

    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            <h1 className="font-headline text-3xl md:text-4xl font-bold mb-8 text-center">Checkout</h1>
            <div className="grid lg:grid-cols-2 lg:gap-16">
                {/* Shipping Form */}
                <div className="order-2 lg:order-1">
                    <h2 className="font-headline text-2xl font-semibold mb-6">Shipping Information</h2>
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="first-name">First Name</Label>
                                <Input id="first-name" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="last-name">Last Name</Label>
                                <Input id="last-name" placeholder="Doe" />
                            </div>
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="address">Address</Label>
                            <Input id="address" placeholder="123 Lighthouse Lane" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="city">City</Label>
                                <Input id="city" placeholder="Khammam"/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="state">State</Label>
                                <Input id="state" placeholder="Telangana"/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="zip">ZIP Code</Label>
                                <Input id="zip" placeholder="507001"/>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" type="tel" placeholder="+91 12345 67890"/>
                        </div>
                    </div>

                    <h2 className="font-headline text-2xl font-semibold mt-10 mb-6">Payment</h2>
                    <div className="p-4 border rounded-lg bg-secondary/30">
                        <p className="font-semibold">Payment Methods</p>
                        <p className="text-sm text-muted-foreground">
                            This is a demo store. No real payment will be processed. At our physical store, we accept: Cash, UPI, Paytm, PhonePe, Net Banking, and Cheques.
                        </p>
                    </div>

                </div>

                {/* Order Summary */}
                <div className="order-1 lg:order-2 mb-10 lg:mb-0">
                    <div className="p-6 border rounded-lg bg-secondary/30 sticky top-24">
                        <h2 className="text-lg font-headline font-semibold mb-4">Your Order</h2>
                        <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
                            {cart.map(item => {
                                const productImage = PlaceHolderImages.find(img => img.id === item.product.images[0]);
                                return (
                                <div key={item.product.id} className="flex items-center gap-4">
                                    <div className="relative h-16 w-16 rounded-md overflow-hidden shrink-0">
                                        {productImage && <Image src={productImage.imageUrl} alt={item.product.name} fill className="object-cover" />}
                                        <div className="absolute top-0 right-0 h-5 w-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center translate-x-1/2 -translate-y-1/2">
                                            {item.quantity}
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="font-semibold text-sm">{item.product.name}</p>
                                    </div>
                                    <p className="text-sm">₹{(item.product.price * item.quantity).toLocaleString()}</p>
                                </div>
                            )})}
                        </div>
                        <Separator className="my-4"/>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span>₹{subtotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Shipping</span>
                                <span>Free</span>
                            </div>
                            <Separator className="my-2"/>
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>₹{subtotal.toLocaleString()}</span>
                            </div>
                        </div>
                        <Button size="lg" className="w-full mt-6 bg-accent text-accent-foreground hover:bg-accent/90" onClick={handlePlaceOrder}>
                            Place Order
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
