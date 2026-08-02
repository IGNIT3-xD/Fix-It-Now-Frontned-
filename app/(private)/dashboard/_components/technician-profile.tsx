'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { MapPin, Award, Clock, CheckCircle2, AlertCircle } from 'lucide-react'
import { CreateProfileDialog } from './create-profile'
import { EditProfileDialog } from './edit-profile'
import { EditAvailabilitiesDialog } from './edit-avavilablities'

interface User {
    id: string
    name: string
    email: string
    profilePicture: string | null
    role: string
    status: string
}

interface Technician {
    id: string
    experience: number
    location: string
    isVerified: boolean
    avgRating: number
    totalReviews: number
    availabilities: Array<{
        id: string
        dayOfWeek: string
        startTime: string
        endTime: string
        isActive: boolean
    }>
}

interface TechnicianProfileViewProps {
    user: User
    technician: Technician | null
}

export function TechnicianProfileView({ user, technician }: TechnicianProfileViewProps) {
    const [editProfileOpen, setEditProfileOpen] = useState(false)
    const [editAvailabilitiesOpen, setEditAvailabilitiesOpen] = useState(false)
    const [createProfileOpen, setCreateProfileOpen] = useState(!technician)

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
    }

    // If technician doesn't exist, show create profile option
    if (!technician) {
        return (
            <div className="max-w-2xl">
                <Card>
                    <CardContent className="flex flex-col items-center justify-center py-12">
                        <AlertCircle className="w-12 h-12 text-muted-foreground mb-4" />
                        <h2 className="text-lg font-semibold mb-2">No Technician Profile Found</h2>
                        <p className="text-muted-foreground mb-6 text-center">
                            You don&apos;t have a technician profile yet. Create one to start
                            accepting bookings.
                        </p>
                        <Button onClick={() => setCreateProfileOpen(true)}>
                            Create Technician Profile
                        </Button>
                    </CardContent>
                </Card>

                <CreateProfileDialog
                    open={createProfileOpen}
                    onOpenChange={setCreateProfileOpen}
                />
            </div>
        )
    }

    return (
        <div className="max-w-4xl space-y-6">
            {/* Profile Header */}
            <Card>
                <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        <Avatar className="w-24 h-24">
                            <AvatarImage src={user.profilePicture || undefined} alt={user.name} />
                            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h2 className="text-2xl font-bold">{user.name}</h2>
                                    <p className="text-muted-foreground">{user.email}</p>
                                </div>
                                {technician.isVerified && (
                                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                                        <CheckCircle2 className="w-3 h-3 mr-1" />
                                        Verified
                                    </Badge>
                                )}
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-4">
                                <div>
                                    <p className="text-sm text-muted-foreground">Experience</p>
                                    <p className="text-xl font-semibold">{technician.experience} yrs</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Rating</p>
                                    <p className="text-xl font-semibold">
                                        {technician.avgRating.toFixed(1)} ⭐
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Reviews</p>
                                    <p className="text-xl font-semibold">{technician.totalReviews}</p>
                                </div>
                            </div>

                            <div className="flex items-center text-sm text-muted-foreground mb-6">
                                <MapPin className="w-4 h-4 mr-1" />
                                {technician.location}
                            </div>

                            <Button
                                onClick={() => setEditProfileOpen(true)}
                                className="w-full md:w-auto"
                            >
                                Edit Profile
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Availability Card */}
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            Availabilities
                        </CardTitle>
                        <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setEditAvailabilitiesOpen(true)}
                        >
                            Edit Schedule
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        {technician.availabilities.length > 0 ? (
                            technician.availabilities.map((availability) => (
                                <div
                                    key={availability.id}
                                    className="flex items-center justify-between p-3 bg-muted rounded-lg"
                                >
                                    <div className="flex-1">
                                        <p className="font-medium">{availability.dayOfWeek}</p>
                                        {availability.isActive ? (
                                            <p className="text-sm text-muted-foreground">
                                                {availability.startTime} - {availability.endTime}
                                            </p>
                                        ) : (
                                            <p className="text-sm text-destructive">Not Available</p>
                                        )}
                                    </div>
                                    <Badge variant={availability.isActive ? 'secondary' : 'outline'}>
                                        {availability.isActive ? 'Active' : 'Inactive'}
                                    </Badge>
                                </div>
                            ))
                        ) : (
                            <p className="text-muted-foreground text-sm">
                                No availabilities set yet
                            </p>
                        )}
                    </div>
                </CardContent>
            </Card>

            {/* Stats Card */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Award className="w-5 h-5" />
                        Profile Status
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="p-3 bg-muted rounded-lg">
                            <p className="text-xs text-muted-foreground mb-1">Verification</p>
                            <p className="text-sm font-semibold flex items-center gap-1">
                                {technician.isVerified ? (
                                    <>
                                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                                        Verified
                                    </>
                                ) : (
                                    <>
                                        <AlertCircle className="w-4 h-4 text-yellow-500" />
                                        Pending
                                    </>
                                )}
                            </p>
                        </div>
                        <div className="p-3 bg-muted rounded-lg">
                            <p className="text-xs text-muted-foreground mb-1">Account Status</p>
                            <p className="text-sm font-semibold">{user.status}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Dialogs */}
            <EditProfileDialog
                open={editProfileOpen}
                onOpenChange={setEditProfileOpen}
                technician={technician}
            />

            <EditAvailabilitiesDialog
                open={editAvailabilitiesOpen}
                onOpenChange={setEditAvailabilitiesOpen}
                availabilities={technician.availabilities}
            />

            <CreateProfileDialog
                open={createProfileOpen}
                onOpenChange={setCreateProfileOpen}
            />
        </div>
    )
}