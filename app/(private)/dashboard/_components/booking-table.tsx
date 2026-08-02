'use client'

import { useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Eye, CheckCircle2, Clock, XCircle, Loader2 } from 'lucide-react'
import { format } from 'date-fns'
import { updateBookingStatus } from '@/app/(private)/dashboard/_actions/dashboardActions'
import { toast } from 'sonner'
import Image from 'next/image';

interface Booking {
    id: string
    status: 'REQUESTED' | 'ACCEPTED' | 'DECLINED' | 'PAID' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED'
    scheduledAt: string
    bookedAt: string
    customer: {
        name: string
        email: string
    }
    service: {
        id: string
        title: string
        description: string
        price: number
        thumbnail: string
        category: {
            name: string
        }
    }
}

interface BookingsTableProps {
    bookings: Booking[]
}

const getStatusBadgeVariant = (status: string) => {
    switch (status) {
        case 'REQUESTED':
            return 'default'
        case 'ACCEPTED':
            return 'secondary'
        case 'DECLINED':
            return 'destructive'
        case 'PAID':
            return 'secondary'
        case 'IN_PROGRESS':
            return 'secondary'
        case 'COMPLETED':
            return 'outline'
        case 'CANCELLED':
            return 'destructive'
        default:
            return 'default'
    }
}

const getStatusIcon = (status: string) => {
    switch (status) {
        case 'REQUESTED':
            return <Clock className="w-3 h-3 mr-1" />
        case 'ACCEPTED':
            return <CheckCircle2 className="w-3 h-3 mr-1" />
        case 'DECLINED':
            return <XCircle className="w-3 h-3 mr-1" />
        case 'PAID':
            return <CheckCircle2 className="w-3 h-3 mr-1" />
        case 'IN_PROGRESS':
            return <Clock className="w-3 h-3 mr-1" />
        case 'COMPLETED':
            return <CheckCircle2 className="w-3 h-3 mr-1" />
        case 'CANCELLED':
            return <XCircle className="w-3 h-3 mr-1" />
        default:
            return null
    }
}

const STATUS_OPTIONS = [
    'REQUESTED',
    'ACCEPTED',
    'DECLINED',
    'PAID',
    'IN_PROGRESS',
    'COMPLETED',
    'CANCELLED',
] as const

export function BookingsTable({ bookings }: BookingsTableProps) {
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
    const [showDetailsDialog, setShowDetailsDialog] = useState(false)
    const [showStatusDialog, setShowStatusDialog] = useState(false)
    const [statusBookingId, setStatusBookingId] = useState<string | null>(null)
    const [selectedStatus, setSelectedStatus] = useState<string>('')
    const [isUpdating, setIsUpdating] = useState(false)

    const handleViewDetails = (booking: Booking) => {
        setSelectedBooking(booking)
        setShowDetailsDialog(true)
    }

    const handleUpdateClick = (booking: Booking) => {
        setStatusBookingId(booking.id)
        setSelectedStatus(booking.status)
        setShowStatusDialog(true)
    }

    const handleStatusUpdate = async () => {
        if (!statusBookingId || !selectedStatus) return

        setIsUpdating(true)
        try {
            const result = await updateBookingStatus(statusBookingId, selectedStatus)

            if (result.success) {
                toast.success(result.message)
                setShowStatusDialog(false)
                setStatusBookingId(null)
                setSelectedStatus('')
                // Optionally refresh the page or update the state
                window.location.reload()
            } else {
                toast.error(result.message)
            }
        } catch (error) {
            console.error('[v0] Error updating status:', error)
            toast.error('Failed to update booking status')
        } finally {
            setIsUpdating(false)
        }
    }

    return (
        <>
            <div className="border rounded-lg overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-semibold">Customer Name</TableHead>
                            <TableHead className="font-semibold">Email</TableHead>
                            <TableHead className="font-semibold">Category</TableHead>
                            <TableHead className="font-semibold">Price</TableHead>
                            <TableHead className="font-semibold">Booked At</TableHead>
                            <TableHead className="font-semibold">Status</TableHead>
                            <TableHead className="font-semibold text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {bookings.map((booking) => (
                            <TableRow key={booking.id}>
                                <TableCell className="font-medium">{booking.customer.name}</TableCell>
                                <TableCell className="text-sm text-muted-foreground">
                                    {booking.customer.email}
                                </TableCell>
                                <TableCell>{booking.service.category.name}</TableCell>
                                <TableCell className="font-semibold">
                                    Tk.{booking.service.price}
                                </TableCell>
                                <TableCell className="text-sm">
                                    {format(new Date(booking.bookedAt), 'MMM dd, yyyy')}
                                </TableCell>
                                <TableCell>
                                    <Badge variant={getStatusBadgeVariant(booking.status)}>
                                        <span className="flex items-center">
                                            {getStatusIcon(booking.status)}
                                            {booking.status}
                                        </span>
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right space-x-2 flex justify-end">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleViewDetails(booking)}
                                        className="flex items-center gap-1"
                                    >
                                        <Eye className="w-4 h-4" />
                                        Details
                                    </Button>
                                    <Button
                                        size="sm"
                                        onClick={() => handleUpdateClick(booking)}
                                    >
                                        Update
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Update Status Dialog */}
            <Dialog open={showStatusDialog} onOpenChange={setShowStatusDialog}>
                <DialogContent className="max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Update Booking Status</DialogTitle>
                        <DialogDescription>
                            Select a new status for this booking
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">New Status</label>
                            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    {STATUS_OPTIONS.map((status) => (
                                        <SelectItem key={status} value={status}>
                                            {status}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex gap-2 justify-end">
                            <Button
                                variant="outline"
                                onClick={() => setShowStatusDialog(false)}
                                disabled={isUpdating}
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={handleStatusUpdate}
                                disabled={isUpdating || !selectedStatus}
                            >
                                {isUpdating && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                                {isUpdating ? 'Updating...' : 'Update Status'}
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Service Details Dialog */}
            <Dialog open={showDetailsDialog} onOpenChange={setShowDetailsDialog}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Service Details</DialogTitle>
                        <DialogDescription>
                            Complete information about the booked service
                        </DialogDescription>
                    </DialogHeader>

                    {selectedBooking && (
                        <div className="space-y-6 -mx-4 max-h-[70vh] overflow-y-auto px-5">
                            {/* Service Image */}
                            {selectedBooking.service.thumbnail && (
                                <div className="relative w-full h-64 rounded-lg overflow-hidden">
                                    <Image
                                        height={300}
                                        width={300}
                                        src={selectedBooking.service.thumbnail}
                                        alt={selectedBooking.service.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}

                            {/* Service Info Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-muted-foreground">Service Title</p>
                                    <p className="font-semibold text-base">
                                        {selectedBooking.service.title}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Category</p>
                                    <p className="font-semibold text-base">
                                        {selectedBooking.service.category.name}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Price</p>
                                    <p className="font-semibold text-base">
                                        Tk.{selectedBooking.service.price}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Status</p>
                                    <Badge
                                        variant={getStatusBadgeVariant(selectedBooking.status)}
                                        className="mt-1"
                                    >
                                        {selectedBooking.status}
                                    </Badge>
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Description</p>
                                <p className="text-base leading-relaxed">
                                    {selectedBooking.service.description}
                                </p>
                            </div>

                            {/* Customer & Booking Info */}
                            <div className="border-t pt-4 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-muted-foreground">Customer Name</p>
                                        <p className="font-semibold">
                                            {selectedBooking.customer.name}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Email</p>
                                        <p className="font-semibold">
                                            {selectedBooking.customer.email}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Booked At</p>
                                        <p className="font-semibold">
                                            {format(
                                                new Date(selectedBooking.bookedAt),
                                                'MMM dd, yyyy HH:mm'
                                            )}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Scheduled At</p>
                                        <p className="font-semibold">
                                            {format(
                                                new Date(selectedBooking.scheduledAt),
                                                'MMM dd, yyyy'
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
}
