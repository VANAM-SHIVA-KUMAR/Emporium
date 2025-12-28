'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Product } from '@/lib/placeholder-data';
import { useCart } from '@/context/cart-provider';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const productImage = PlaceHolderImages.find((img) => img.id === product.images[0]);

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link href={`/products/${product.id}`} className="flex-grow">
        <CardHeader className="p-0">
          <div className="relative h-56 w-full">
            {productImage ? (
              <Image
                src={productImage.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                data-ai-hint={productImage.imageHint}
              />
            ) : (
              <div className="h-full w-full bg-secondary flex items-center justify-center text-muted-foreground">
                No Image
              </div>
            )}
          </div>
          <CardTitle className="p-4 pb-0 text-lg font-headline leading-tight h-14">
            {product.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <p className="text-sm text-muted-foreground">{product.brand}</p>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <p className="text-lg font-semibold font-body">
          INR {product.price.toLocaleString()}
        </p>
        <Button size="sm" onClick={() => addToCart(product)} className="bg-primary hover:bg-primary/90">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
