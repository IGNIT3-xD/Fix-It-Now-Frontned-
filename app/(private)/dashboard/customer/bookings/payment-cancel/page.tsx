import Link from "next/link"
import { XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default async function PaymentCancelPage() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <Card className="max-w-md w-full">
                <CardContent className="pt-10 pb-8 flex flex-col items-center text-center gap-4">
                    <XCircle className="w-16 h-16 text-red-500" />
                    <h1 className="text-2xl font-bold">Payment Cancelled</h1>
                    <p className="text-muted-foreground">
                        Your payment was not completed. Your booking is still saved — you can try
                        paying again whenever you&apos;re ready.
                    </p>

                    <div className="flex gap-3 pt-4 w-full">
                        <Button asChild variant="outline" className="flex-1">
                            <Link href="/dashboard/customer/bookings">Back to Bookings</Link>
                        </Button>
                        <Button asChild className="flex-1">
                            <Link href={`dashboard/customer/bookings`}>Try Again</Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}