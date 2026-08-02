'use client'

import { useTransition } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { paymentAction } from '../_actions/dashboardActions'

interface PaymentButtonProps {
    bookingId: string
}

export function PaymentButton({ bookingId }: PaymentButtonProps) {
    const [isPending, startTransition] = useTransition()

    const handlePayment = () => {
        startTransition(async () => {
            const result = await paymentAction(bookingId)

            if (result.success && result.data?.checkoutUrl) {
                window.location.href = result.data.checkoutUrl
            } else {
                toast.error(result.message ?? "Failed to start payment.")
            }
        })
    }

    return (
        <Button size="sm" onClick={handlePayment} disabled={isPending}>
            {isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            {isPending ? "Redirecting..." : "Pay Now"}
        </Button>
    )
}