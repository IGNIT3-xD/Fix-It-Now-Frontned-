import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default async function PaymentSuccessPage() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <Card className="max-w-md w-full">
                <CardContent className="pt-10 pb-8 flex flex-col items-center text-center gap-4">
                    <>
                        <CheckCircle2 className="w-16 h-16 text-green-500" />
                        <h1 className="text-2xl font-bold">Payment Successful</h1>
                        <p className="text-muted-foreground">
                            Your payment has been confirmed. Your technician has been notified
                            and will be in touch about your booking.
                        </p>
                    </>
                    <div className="flex gap-3 pt-4 w-full">
                        <Button asChild variant="outline" className="flex-1">
                            <Link href="/dashboard/customer/bookings">View Bookings</Link>
                        </Button>
                        <Button asChild className="flex-1">
                            <Link href="/">Go Home</Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}