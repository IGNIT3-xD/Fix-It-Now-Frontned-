// _components/bookings-table.tsx
'use client'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { CancelBookingButton } from "./cancel-booking-button"
import { PaymentButton } from "./payment-button"
import { ReviewDialog } from "./review-dialog"

type Booking = {
    id: string
    status: string
    scheduledAt: string
    bookedAt: string
    updatedAt: string
    customerId: string
    technicianId: string
    serviceId: string
    service: {
        title: string
        description: string
        price: number
    }
    payment: {
        status: string
    } | null
}

interface BookingsTableProps {
    bookings: Booking[]
}

const STATUS_STYLES: Record<string, string> = {
    REQUESTED: "bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-950 dark:text-amber-300",
    ACCEPTED: "bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-300",
    IN_PROGRESS: "bg-indigo-100 text-indigo-800 hover:bg-indigo-100 dark:bg-indigo-950 dark:text-indigo-300",
    COMPLETED: "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-950 dark:text-green-300",
    CANCELLED: "bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-950 dark:text-red-300",
}

function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    })
}

function StatusBadge({ status }: { status: string }) {
    return (
        <Badge className={STATUS_STYLES[status] ?? "bg-slate-100 text-slate-800 hover:bg-slate-100"}>
            {status.replaceAll("_", " ")}
        </Badge>
    )
}

function PaymentBadge({ payment }: { payment: Booking["payment"] }) {
    if (!payment) {
        return (
            <Badge variant="outline" className="text-muted-foreground">
                Not Paid
            </Badge>
        )
    }

    return <StatusBadge status={payment.status} />
}

const NON_CANCELLABLE_STATUSES = ["COMPLETED", "CANCELLED"]

export function BookingsTable({ bookings }: BookingsTableProps) {
    return (
        <div className="rounded-lg border overflow-hidden">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Service</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Booked At</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Payment</TableHead>
                        <TableHead>Booking</TableHead>
                        <TableHead>Action</TableHead>
                        <TableHead>Review</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {bookings.map((booking) => (
                        <TableRow key={booking.id}>
                            <TableCell className="font-medium max-w-xs">
                                <p className="truncate">{booking.service.title}</p>
                            </TableCell>
                            <TableCell>Tk.{booking.service.price.toLocaleString()}</TableCell>
                            <TableCell className="text-muted-foreground">
                                {formatDate(booking.bookedAt)}
                            </TableCell>
                            <TableCell>
                                <StatusBadge status={booking.status} />
                            </TableCell>
                            <TableCell>
                                <PaymentBadge payment={booking.payment} />
                            </TableCell>
                            <TableCell className="text-right">
                                <CancelBookingButton
                                    bookingId={booking.id}
                                    disabled={NON_CANCELLABLE_STATUSES.includes(booking.status)}
                                />
                            </TableCell>
                            <TableCell className="text-right">
                                {booking.status === 'ACCEPTED' && booking.payment?.status !== 'PAID' ? (
                                    <PaymentButton bookingId={booking.id} />
                                ) : booking.payment?.status === 'PAID' ? (
                                    <span className="text-sm text-muted-foreground">Paid</span>
                                ) : (
                                    <span className="text-sm text-muted-foreground">TBD</span>
                                )}
                            </TableCell>
                            <TableCell className="text-right">
                                <ReviewDialog
                                    bookingId={booking.id}
                                    disabled={booking.status !== 'COMPLETED'}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}