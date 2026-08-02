'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { updateTechnicianProfileAction } from '../_actions/dashboardActions'
import { useActionState, useEffect } from 'react';

interface EditProfileDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    technician: {
        location: string
        experience: number
        price?: number
    }
    onSuccess?: () => void
}

export function EditProfileDialog({ open, onOpenChange, technician }: EditProfileDialogProps) {
    const [state, action, isPending] = useActionState(updateTechnicianProfileAction, null)

    useEffect(() => {
        if (!state) return

        if (state.success) {
            toast.success(state.message ?? "Service created successfully.")
            onOpenChange(false)
        } else {
            toast.error(state.message ?? "Something went wrong")
        }
    }, [onOpenChange, state])

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-sm">
                <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>
                        Update your location, experience, and service price
                    </DialogDescription>
                </DialogHeader>

                <form action={action} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                            id="location"
                            name="location"
                            defaultValue={technician.location}
                            placeholder="Enter your location"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="experience">Experience (years)</Label>
                        <Input
                            id="experience"
                            name="experience"
                            type="number"
                            min="0"
                            defaultValue={technician.experience}
                            placeholder="Years of experience"
                            required
                        />
                    </div>

                    <div className="flex gap-2 justify-end">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                            disabled={isPending}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isPending}>
                            {isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                            {isPending ? 'Updating...' : 'Update Profile'}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}