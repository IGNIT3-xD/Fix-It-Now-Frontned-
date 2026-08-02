// _components/cancel-booking-button.tsx
'use client'

import { useActionState, useEffect } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Loader2 } from 'lucide-react'
import { cancelBookingAction } from '../_actions/dashboardActions'

interface CancelBookingButtonProps {
    bookingId: string
    disabled?: boolean
}

export function CancelBookingButton({ bookingId, disabled }: CancelBookingButtonProps) {
    const actionWithId = cancelBookingAction.bind(null, bookingId)
    const [state, formAction, isPending] = useActionState(actionWithId, null)

    useEffect(() => {
        if (!state) return

        if (state.success) {
            toast.success(state.message ?? "Booking cancelled successfully.")
        } else {
            toast.error(state.message ?? "Failed to cancel booking.")
        }
    }, [state])

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    size="sm"
                    variant="outline"
                    className="text-destructive hover:text-destructive"
                    disabled={disabled}
                >
                    Cancel
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Cancel this booking?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This will cancel your booking. This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel disabled={isPending}>Keep Booking</AlertDialogCancel>
                    <form action={formAction}>
                        <AlertDialogAction asChild>
                            <Button type="submit" variant="destructive" disabled={isPending}>
                                {isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                                {isPending ? "Cancelling..." : "Yes, Cancel Booking"}
                            </Button>
                        </AlertDialogAction>
                    </form>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}