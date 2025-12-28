import { products } from '@/lib/placeholder-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Star, StarHalf } from 'lucide-react';
import ProductCard from '@/components/product-card';
import { AddToCart } from '@/components/add-to-cart';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function ProductRecommendations({ currentProductId }: { currentProductId: string }) {
    // In a real app, this would use an AI service.
    // Here we just show some other random products.
    const recommendedProducts = products
        .filter(p => p.id !== currentProductId)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);

    return (
        <section className="py-12 md:py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-10">
                    You Might Also Like
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {recommendedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
      </section>
    )
}

function renderStars(rating: number) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
        <div className="flex items-center">
            {[...Array(fullStars)].map((_, i) => <Star key={`full-${i}`} className="w-4 h-4 text-accent fill-accent" />)}
            {halfStar && <StarHalf className="w-4 h-4 text-accent fill-accent" />}
            {[...Array(emptyStars)].map((_, i) => <Star key={`empty-${i}`} className="w-4 h-4 text-muted-foreground/50" />)}
        </div>
    )
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const productImages = product.images.map(imgId => PlaceHolderImages.find(img => img.id === imgId)).filter(Boolean);

  return (
    <div className="bg-background">
        <div className="container mx-auto px-4 py-8 md:py-16">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                {/* Image Carousel */}
                <div>
                     <Carousel className="w-full">
                        <CarouselContent>
                            {productImages.map((image, index) => image && (
                                <CarouselItem key={index}>
                                <Card className="overflow-hidden">
                                    <CardContent className="p-0 aspect-square relative">
                                        <Image
                                            src={image.imageUrl}
                                            alt={`${product.name} - view ${index + 1}`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            data-ai-hint={image.imageHint}
                                        />
                                    </CardContent>
                                </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2"/>
                    </Carousel>
                </div>

                {/* Product Details */}
                <div className="flex flex-col">
                    <span className="text-sm font-medium text-primary">{product.category}</span>
                    <h1 className="font-headline text-3xl md:text-4xl font-bold mt-1">{product.name}</h1>
                    <p className="text-sm text-muted-foreground mt-2">By {product.brand}</p>
                    
                    <div className="my-4">
                        {product.reviews.length > 0 ? (
                            <div className="flex items-center gap-2">
                                {renderStars(product.reviews.reduce((acc, r) => acc + r.rating, 0) / product.reviews.length)}
                                <span className="text-sm text-muted-foreground">({product.reviews.length} reviews)</span>
                            </div>
                        ) : (
                             <span className="text-sm text-muted-foreground">No reviews yet</span>
                        )}
                    </div>
                    
                    <p className="text-3xl font-bold font-body my-4">INR {product.price.toLocaleString()}</p>
                    
                    <p className="text-base text-foreground/80 leading-relaxed">{product.description}</p>
                    
                    <AddToCart product={product} />
                </div>
            </div>

            {/* Specifications and Reviews */}
            <div className="mt-16">
                <Separator />
                <div className="grid md:grid-cols-2 gap-12 mt-12">
                    <div>
                        <h3 className="font-headline text-2xl font-semibold mb-4">Specifications</h3>
                        <ul className="space-y-2">
                            {Object.entries(product.specifications).map(([key, value]) => (
                                <li key={key} className="flex justify-between text-sm border-b pb-2">
                                    <span className="text-muted-foreground">{key}</span>
                                    <span className="font-medium text-right">{value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-headline text-2xl font-semibold mb-4">Customer Reviews</h3>
                        {product.reviews.length > 0 ? (
                            <div className="space-y-6">
                                {product.reviews.map(review => (
                                    <div key={review.id}>
                                        <div className="flex items-center mb-1 justify-between">
                                            <p className="font-semibold">{review.author}</p>
                                            {renderStars(review.rating)}
                                        </div>
                                        <p className="text-sm text-muted-foreground">{review.text}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-muted-foreground">Be the first to review this product!</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
        <ProductRecommendations currentProductId={product.id} />
    </div>
  );
}
