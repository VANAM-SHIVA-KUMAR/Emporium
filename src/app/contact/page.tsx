import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
    const mapImage = PlaceHolderImages.find(img => img.id === 'contact-map');

    const contactDetails = [
        { icon: <MapPin className="h-5 w-5 text-primary" />, text: 'Wrya Khammam Road, Khammam, Telangana', href: '#' },
        { icon: <Phone className="h-5 w-5 text-primary" />, text: '+91-123-456-7890', href: 'tel:+911234567890' },
        { icon: <Mail className="h-5 w-5 text-primary" />, text: 'contact@ramdevemporium.com', href: 'mailto:contact@ramdevemporium.com' },
        { icon: <Clock className="h-5 w-5 text-primary" />, text: '09:00 - 21:30, Monday - Sunday', href: '#' },
    ];

    return (
        <div>
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="text-center mb-12">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">Get In Touch</h1>
                    <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">We'd love to hear from you. Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    {/* Contact Form */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline">Send us a Message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" placeholder="Your Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="your@email.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input id="subject" placeholder="Question about products" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea id="message" placeholder="Your message..." rows={5} />
                                </div>
                                <Button type="submit" className="w-full">Send Message</Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Contact Details */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="font-headline text-2xl font-semibold mb-4">Contact Information</h3>
                             <div className="space-y-4">
                                {contactDetails.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        {item.icon}
                                        <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">{item.text}</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {mapImage && (
                        <div>
                             <h3 className="font-headline text-2xl font-semibold mb-4">Our Location</h3>
                             <div className="aspect-video relative rounded-lg overflow-hidden border">
                                <Image 
                                    src={mapImage.imageUrl} 
                                    alt={mapImage.description} 
                                    fill 
                                    className="object-cover" 
                                    data-ai-hint={mapImage.imageHint}
                                />
                             </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
