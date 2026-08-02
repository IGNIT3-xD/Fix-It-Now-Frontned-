/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
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
import { Switch } from '@/components/ui/switch'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { updateAvailabilityAction } from '../_actions/dashboardActions'

interface Availability {
    id: string
    dayOfWeek: string
    startTime: string
    endTime: string
    isActive: boolean
}

interface EditAvailabilitiesDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    availabilities: Availability[]
    onSuccess?: () => void
}

export function EditAvailabilitiesDialog({
    open,
    onOpenChange,
    availabilities: initialAvailabilities,
    onSuccess,
}: EditAvailabilitiesDialogProps) {
    const [availabilities, setAvailabilities] = useState<Availability[]>(initialAvailabilities)
    const [isUpdating, setIsUpdating] = useState(false)
    const [savingIndex, setSavingIndex] = useState<number | null>(null)

    const handleAvailabilityChange = (
        index: number,
        field: keyof Availability,
        value: any
    ) => {
        const updated = [...availabilities]
        updated[index][field] = value
        setAvailabilities(updated)
    }

    const handleSaveAvailability = async (index: number) => {
        const availability = availabilities[index]
        setSavingIndex(index)

        try {
            const result = await updateAvailabilityAction(availability.id, {
                dayOfWeek: availability.dayOfWeek,
                startTime: availability.startTime,
                endTime: availability.endTime,
                isActive: availability.isActive,
            })

            if (result.success) {
                toast.success('Availability updated')
            } else {
                toast.error(result.message || 'Failed to update availability')
            }
        } catch (error) {
            console.error('[v0] Error updating availability:', error)
            toast.error('Failed to update availability')
        } finally {
            setSavingIndex(null)
        }
    }

    const handleCloseAndRefresh = () => {
        onOpenChange(false)
        onSuccess?.()
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Edit Availabilities</DialogTitle>
                    <DialogDescription>
                        Update your work schedule for each day
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                    {availabilities.map((availability, index) => (
                        <div key={availability.id} className="p-4 border rounded-lg space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold">{availability.dayOfWeek}</h3>
                                <div className="flex items-center gap-2">
                                    <Label htmlFor={`active-${index}`} className="text-sm">
                                        Active
                                    </Label>
                                    <Switch
                                        id={`active-${index}`}
                                        checked={availability.isActive}
                                        onCheckedChange={(checked) =>
                                            handleAvailabilityChange(index, 'isActive', checked)
                                        }
                                    />
                                </div>
                            </div>

                            {availability.isActive && (
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-2">
                                        <Label htmlFor={`start-${index}`} className="text-sm">
                                            Start Time
                                        </Label>
                                        <Input
                                            id={`start-${index}`}
                                            type="text"
                                            value={availability.startTime}
                                            onChange={(e) =>
                                                handleAvailabilityChange(index, 'startTime', e.target.value)
                                            }
                                            placeholder="10:00 am"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor={`end-${index}`} className="text-sm">
                                            End Time
                                        </Label>
                                        <Input
                                            id={`end-${index}`}
                                            type="text"
                                            value={availability.endTime}
                                            onChange={(e) =>
                                                handleAvailabilityChange(index, 'endTime', e.target.value)
                                            }
                                            placeholder="6:00 pm"
                                        />
                                    </div>
                                </div>
                            )}

                            <Button
                                type="button"
                                onClick={() => handleSaveAvailability(index)}
                                disabled={savingIndex !== null}
                                className="w-full"
                            >
                                {savingIndex === index && (
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                )}
                                {savingIndex === index ? 'Saving...' : 'Save Changes'}
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="flex gap-2 justify-end pt-4 border-t">
                    <Button variant="outline" onClick={() => handleCloseAndRefresh()}>
                        Done
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}