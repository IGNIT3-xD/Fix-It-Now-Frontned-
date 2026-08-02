// _components/review-dialog.tsx
'use client'

import { useActionState, useEffect, useState } from 'react'
import { toast } from 'sonner'
import Rating from '@mui/material/Rating'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Textarea } from '@/components/ui/textarea'
import { Loader2, Star } from 'lucide-react'
import { reviewsAction } from '../_actions/dashboardActions'

interface ReviewDialogProps {
    bookingId: string
    disabled?: boolean
}

export function ReviewDialog({ bookingId, disabled }: ReviewDialogProps) {
    const [open, setOpen] = useState(false)
    const [rating, setRating] = useState<number | null>(0)
    const [state, formAction, isPending] = useActionState(reviewsAction, null)

    useEffect(() => {
        if (!state) return

        if (state.success) {
            toast.success(state.message ?? 'Review submitted successfully.')
            setOpen(false)
        } else {
            toast.error(state.message ?? 'Something went wrong')
        }
    }, [state])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="sm" disabled={disabled}>
                    <Star className="w-4 h-4 mr-1" />
                    Review
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                    <DialogTitle>Leave a Review</DialogTitle>
                    <DialogDescription>
                        Share your experience with this service.
                    </DialogDescription>
                </DialogHeader>

                <form action={formAction} className="flex flex-col gap-4">
                    <input type="hidden" name="bookingId" value={bookingId} />

                    <FieldGroup>
                        <Field>
                            <FieldLabel>Rating</FieldLabel>
                            <Rating
                                name="rating-display"
                                value={rating}
                                precision={1}
                                onChange={(_, newValue) => setRating(newValue)}
                                size="large"
                            />
                            <input type="hidden" name="rating" value={rating ?? 0} required />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="comment">Comment</FieldLabel>
                            <Textarea
                                id="comment"
                                name="comment"
                                placeholder="Tell us about your experience..."
                                required
                                rows={4}
                            />
                        </Field>
                    </FieldGroup>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" type="button">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" disabled={isPending || !rating}>
                            {isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                            {isPending ? 'Submitting...' : 'Submit Review'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}