/* eslint-disable react-hooks/set-state-in-effect */
'use client'

import { useActionState, useEffect, useState } from 'react'
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
    DialogFooter,
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
import { X, Loader2, Check } from 'lucide-react'
import { format } from 'date-fns'
import { toast } from 'sonner'
import { updateUsersStatusActions } from '../_actions/dashboardActions'

interface User {
    id: string
    name: string
    email: string
    profilePicture?: string
    status: 'ACTIVE' | 'BLOCKED'
    role: 'CUSTOMER' | 'TECHNICIAN' | 'ADMIN'
    created_at: string
    updated_at: string
}

interface UsersTableProps {
    users: User[]
}

const STATUS_OPTIONS = ['ACTIVE', 'BLOCKED'] as const

const getStatusBadgeVariant = (status: string) => {
    switch (status) {
        case 'ACTIVE':
            return 'default'
        case 'BLOCKED':
            return 'secondary'
    }
}

const getStatusIcon = (status: string) => {
    switch (status) {
        case 'ACTIVE':
            return <Check className="w-3 h-3 mr-1" />
        case 'BLOCKED':
            return <X className="w-3 h-3 mr-1" />
        default:
            return null
    }
}

function UpdateStatusDialog({ user }: { user: User }) {
    const [open, setOpen] = useState(false)
    const [selectedStatus, setSelectedStatus] = useState<string>(user.status)

    const actionWithId = updateUsersStatusActions.bind(null, user.id)
    const [state, formAction, isPending] = useActionState(actionWithId, null)

    useEffect(() => {
        if (!state) return

        if (state.success) {
            toast.success(state.message ?? 'Status updated successfully.')
            setOpen(false)
        } else {
            toast.error(state.message ?? 'Failed to update status.')
        }
    }, [state])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <Button size="sm" onClick={() => setOpen(true)}>
                Update Status
            </Button>
            <DialogContent className="max-w-sm">
                <DialogHeader>
                    <DialogTitle>Update User Status</DialogTitle>
                    <DialogDescription>
                        Select a new status for {user.name}
                    </DialogDescription>
                </DialogHeader>

                <form action={formAction} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">New Status</label>
                        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                            <SelectTrigger className="w-full">
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
                        <input type="hidden" name="status" value={selectedStatus} />
                    </div>

                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setOpen(false)}
                            disabled={isPending}
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            disabled={isPending || selectedStatus === user.status}
                        >
                            {isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                            {isPending ? 'Updating...' : 'Update Status'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export function UsersTable({ users }: UsersTableProps) {
    return (
        <div className="border rounded-lg overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-semibold">Name</TableHead>
                        <TableHead className="font-semibold">Email</TableHead>
                        <TableHead className="font-semibold">Role</TableHead>
                        <TableHead className="font-semibold">Created At</TableHead>
                        <TableHead className="font-semibold">Status</TableHead>
                        <TableHead className="font-semibold text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell className="font-medium">{user.name}</TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                                {user.email}
                            </TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell className="text-sm">
                                {format(new Date(user.created_at), 'MMM dd, yyyy')}
                            </TableCell>
                            <TableCell>
                                <Badge variant={getStatusBadgeVariant(user.status)}>
                                    <span className="flex items-center">
                                        {getStatusIcon(user.status)}
                                        {user.status}
                                    </span>
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                                <UpdateStatusDialog user={user} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}