import { products, categories } from '@/lib/placeholder-data';
import ProductCard from '@/components/product-card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';


// This would be a client component in a real app to handle state
function ProductFilters() {
    return (
        <div className="bg-background/80 backdrop-blur-sm sticky top-16 z-40 py-4 mb-8 border-b">
            <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search for products..." className="pl-10" />
                </div>
                <div className="flex gap-4">
                    <Select>
                        <SelectTrigger className="w-full md:w-[180px]">
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            {categories.map(cat => (
                                <SelectItem key={cat.id} value={cat.name}>{cat.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                     <Select>
                        <SelectTrigger className="w-full md:w-[180px]">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="featured">Featured</SelectItem>
                            <SelectItem value="price-asc">Price: Low to High</SelectItem>
                            <SelectItem value="price-desc">Price: High to Low</SelectItem>
                            <SelectItem value="name-asc">Name: A to Z</SelectItem>
                            <SelectItem value="name-desc">Name: Z to A</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}


export default function ProductsPage() {
  return (
    <div>
        <ProductFilters />
        <div className="container mx-auto px-4 py-8">
            <h1 className="font-headline text-3xl md:text-4xl font-bold mb-2">Our Products</h1>
            <p className="text-muted-foreground mb-8">Browse our extensive collection of lighting solutions.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {products.map((product) => (
                <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    </div>
  );
}
