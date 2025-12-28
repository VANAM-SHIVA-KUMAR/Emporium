import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";


const dummyOrders = [
    { id: 'ORD-12345', date: '2024-05-20', total: 15500, status: 'Delivered' },
    { id: 'ORD-12346', date: '2024-05-28', total: 1200, status: 'Shipped' },
    { id: 'ORD-12347', date: '2024-06-01', total: 600, status: 'Processing' },
]

export default function AccountPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-8">
                <div>
                    <h1 className="font-headline text-3xl md:text-4xl font-bold">My Account</h1>
                    <p className="text-muted-foreground">Welcome back, John Doe!</p>
                </div>
                <Button asChild variant="outline">
                    <Link href="/login">Log Out</Link>
                </Button>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline">Profile Details</CardTitle>
                            <CardDescription>Manage your personal information.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <p className="text-sm font-medium">Name</p>
                                <p className="text-muted-foreground">John Doe</p>
                            </div>
                             <div>
                                <p className="text-sm font-medium">Email</p>
                                <p className="text-muted-foreground">john.doe@example.com</p>
                            </div>
                             <div>
                                <p className="text-sm font-medium">Shipping Address</p>
                                <p className="text-muted-foreground">123 Lighthouse Lane, Khammam, Telangana, 507001</p>
                            </div>
                            <Button className="w-full">Edit Profile</Button>
                        </CardContent>
                    </Card>
                </div>
                <div className="lg:col-span-2">
                     <Card>
                        <CardHeader>
                            <CardTitle className="font-headline">Order History</CardTitle>
                            <CardDescription>View your past orders.</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Order ID</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Total</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {dummyOrders.map(order => (
                                    <TableRow key={order.id}>
                                        <TableCell className="font-medium">{order.id}</TableCell>
                                        <TableCell>{order.date}</TableCell>
                                        <TableCell>{order.status}</TableCell>
                                        <TableCell className="text-right">₹{order.total.toLocaleString()}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                           </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
