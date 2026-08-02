// _components/review-card.tsx
'use client'

import Rating from '@mui/material/Rating'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { CalendarDays } from 'lucide-react'

type Review = {
    id: string
    rating: number
    comment: string
    createdAt: string
    userId: string
    bookingId: string
    booking: {
        service: {
            id: string
            title: string
            description: string
            price: number
            isActive: boolean
            thumbnail: string
        }
    }
}

interface ReviewCardProps {
    review: Review
}

function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    })
}

export function ReviewCard({ review }: ReviewCardProps) {
    const { service } = review.booking

    return (
        <Card className="overflow-hidden py-0 gap-0">
            <div className="relative h-36 w-full bg-slate-100">
                <Image
                    src={service.thumbnail}
                    alt={service.title}
                    fill
                    className="object-cover"
                />
            </div>

            <CardContent className="p-5 flex flex-col gap-3">
                <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white leading-snug line-clamp-2">
                        {service.title}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground mt-0.5">
                        Tk. {service.price.toLocaleString()}
                    </p>
                </div>

                <Rating value={review.rating} precision={1} readOnly size="small" />

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {review.comment}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-1 border-t mt-1">
                    <CalendarDays className="w-3.5 h-3.5" />
                    <span>{formatDate(review.createdAt)}</span>
                </div>
            </CardContent>
        </Card>
    )
}