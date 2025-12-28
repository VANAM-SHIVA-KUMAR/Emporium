import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  products,
  categories as productCategories,
} from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ProductCard from '@/components/product-card';
import { Award, Lightbulb, Truck, Users } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const featuredProducts = products.slice(0, 4);
  const categories = productCategories.slice(0, 3);

  const whyChooseUs = [
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: 'Top Player',
      description: 'A top player in the category LED Light Dealers-Havells in Khammam since 2013.',
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: 'Wide Range of Products',
      description: 'Extensive collection of LED lights, chandeliers, decorative lights, and more.',
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Customer Satisfaction',
      description: 'A vast base of customers which continues to grow day by day.',
    },
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: 'Conveniently Located',
      description: 'Our establishment occupies a prominent location with various modes of transport readily available.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Illuminate Your World
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-neutral-200">
            Discover exquisite lighting solutions from leading brands at Ramdev Emporium.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </section>
      
      {/* About Us Section */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
              Ramdev Emporium in Station Road, Khammam
            </h2>
            <p className="text-muted-foreground mb-6">
              Ramdev Emporium in Khammam is one of the leading businesses in the LED Light Dealers. Also known for Lighting Dealers, Lampshade Dealers-LeArc Designer Lighting, Lampshade Dealers, Chandeller Light Dealers, Decorative Light Dealers, LED Light Dealers-Jaquar, LED Fancy Light Dealers, Lampshade Dealers-GLAMOROUS and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Ramdev Emporium, Khammam.
            </p>
            <h3 className="font-headline text-2xl font-semibold mb-3">Location and Overview:</h3>
            <p className="text-muted-foreground mb-6">
              Established in the year 2002, Ramdev Emporium in Station Road, Khammam is a top player in the category LED Light Dealers in the Khammam. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Khammam. Over the course of its journey, this business has established a firm foothold in it's industry. The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day. This business employs individuals that are dedicated towards their respective roles and put in a lot of effort to achieve the common vision and larger goals of the company, in the near future, this business aims to expand its line of products and services and cater to a larger client base. in Khammam, this establishment occupies a prominent location in Station Road. It is an effortless task in commuting to this establishment as there are various modes of transport readily available. It is at Azeez Street, Rana Sweets Line, which makes it easy for first-time visitors in locating this establishment it is known to provide top service in the following categories: Lighting Dealers, Lampshade Dealers-LeArc Designer Lighting, Lampshade Dealers, Chandelier Light Dealers, Decorative Light Dealers, LED Light Dealers-Jaquar, LED Fancy light Dealers, Lampshade Dealers-GLAMOROUS
            </p>
            <h3 className="font-headline text-2xl font-semibold mb-3">Products and Services offered:</h3>
            <p className="text-muted-foreground">
              Ramdev Emporium in Station Road has a wide range of products and / or services to cater to the varied requirements of their customers. The staff at this establishment are courteous and prompt at providing any assistance. They readily answer any queries or questions that you may have. Pay for the product or service with ease by using any of the available modes of payment, such as UP Cash This establishment is functional from 09:00-21:30.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-10">
            Shop By Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => {
              const categoryImage = PlaceHolderImages.find((img) => img.id === category.imageId);
              return (
                <Link href={`/products?category=${category.name}`} key={category.id}>
                  <Card className="overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    <CardContent className="p-0 relative h-64">
                      {categoryImage && (
                        <Image
                          src={categoryImage.imageUrl}
                          alt={category.name}
                          fill
                          className="object-cover"
                          data-ai-hint={categoryImage.imageHint}
                        />
                      )}
                       <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="font-headline text-2xl font-bold text-white">
                          {category.name}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 md:py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-10">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Ramdev Emporium?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center p-4">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-headline text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
