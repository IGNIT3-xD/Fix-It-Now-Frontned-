'use client'

import { useActionState, useEffect, useState } from 'react'
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
import { Loader2, Plus, Trash2 } from 'lucide-react'
import { toast } from 'sonner'
import { createTechnicianProfileAction } from '../_actions/dashboardActions'

interface Availability {
    dayOfWeek: string
    startTime: string
    endTime: string
}

interface CreateProfileDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

const DAYS_OF_WEEK = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']

export function CreateProfileDialog({ open, onOpenChange }: CreateProfileDialogProps) {
    const [state, action, isPending] = useActionState(createTechnicianProfileAction, null)

    const [availabilities, setAvailabilities] = useState<Availability[]>([
        { dayOfWeek: 'MONDAY', startTime: '10:00 am', endTime: '6:00 pm' },
    ])

    useEffect(() => {
        if (!state) return

        if (state.success) {
            toast.success(state.message ?? "Profile created successfully.")
            onOpenChange(false)
        } else {
            toast.error(state.message ?? "Something went wrong")
        }
    }, [onOpenChange, state])

    const handleAddAvailability = () => {
        setAvailabilities([...availabilities, { dayOfWeek: 'TUESDAY', startTime: '10:00 am', endTime: '6:00 pm' }])
    }

    const handleRemoveAvailability = (index: number) => {
        setAvailabilities(availabilities.filter((_, i) => i !== index))
    }

    const handleAvailabilityChange = (
        index: number,
        field: keyof Availability,
        value: string
    ) => {
        const updated = [...availabilities]
        updated[index][field] = value
        setAvailabilities(updated)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Create Technician Profile</DialogTitle>
                    <DialogDescription>
                        Set up your technician profile with location, experience, and availability
                    </DialogDescription>
                </DialogHeader>

                <form action={action} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="location">Location</Label>
                            <Input
                                id="location"
                                name="location"
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
                                placeholder="Years of experience"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <Label>Availabilities</Label>
                            <Button
                                type="button"
                                size="sm"
                                variant="outline"
                                onClick={handleAddAvailability}
                            >
                                <Plus className="w-4 h-4 mr-2" />
                                Add Slot
                            </Button>
                        </div>

                        <div className="space-y-3">
                            {availabilities.map((availability, index) => (
                                <div key={index} className="flex gap-3 items-end p-3 bg-muted rounded-lg">
                                    <div className="flex-1">
                                        <Label className="text-xs">Day</Label>
                                        <select
                                            value={availability.dayOfWeek}
                                            onChange={(e) =>
                                                handleAvailabilityChange(index, 'dayOfWeek', e.target.value)
                                            }
                                            className="w-full px-3 py-2 text-sm border rounded-md bg-background"
                                        >
                                            {DAYS_OF_WEEK.map((day) => (
                                                <option key={day} value={day}>
                                                    {day}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="flex-1">
                                        <Label className="text-xs">Start Time</Label>
                                        <Input
                                            type="text"
                                            value={availability.startTime}
                                            onChange={(e) =>
                                                handleAvailabilityChange(index, 'startTime', e.target.value)
                                            }
                                            placeholder="10:00 am"
                                            className="text-sm"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <Label className="text-xs">End Time</Label>
                                        <Input
                                            type="text"
                                            value={availability.endTime}
                                            onChange={(e) =>
                                                handleAvailabilityChange(index, 'endTime', e.target.value)
                                            }
                                            placeholder="6:00 pm"
                                            className="text-sm"
                                        />
                                    </div>

                                    {availabilities.length > 1 && (
                                        <Button
                                            type="button"
                                            size="sm"
                                            variant="ghost"
                                            onClick={() => handleRemoveAvailability(index)}
                                        >
                                            <Trash2 className="w-4 h-4 text-destructive" />
                                        </Button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <input type="hidden" name="availablities" value={JSON.stringify(availabilities)} />

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
                            {isPending ? 'Creating...' : 'Create Profile'}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}