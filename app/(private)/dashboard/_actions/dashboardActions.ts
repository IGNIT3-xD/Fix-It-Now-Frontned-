"use server"
import { cookies } from 'next/headers';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { PrevState } from '@/lib/types';
import { revalidatePath } from 'next/cache'

export const createServiceAction = async (prevState: PrevState, formData: FormData) => {
    const cookieStore = await cookies()

    const accessToken = cookieStore.get("accessToken")?.value
    if (!accessToken) {
        return {
            success: false,
            message: "User not logged in."
        }
    }

    const role = jwt.verify(accessToken, process.env.JWT_ACCESS as string) as JwtPayload
    if (role.role !== 'TECHNICIAN') {
        return {
            success: false,
            message: "Unauthorized",
        };
    }

    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const thumbnail = formData.get("thumbnail") as string
    const price = Number(formData.get("price"))
    const categoryId = formData.get("categoryId") as string

    if (Number.isNaN(price) || price <= 0) {
        return {
            success: false,
            message: "Please provide a valid price.",
        }
    }

    const res = await fetch(`${process.env.BACKEND_API}/api/services`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Cookie: `accessToken=${accessToken}`
        },
        body: JSON.stringify({ title, description, thumbnail, price, categoryId })
    })

    const result = await res.json();
    if (result.success) {
        revalidatePath('/dashboard/technician/services')
    }

    return result
}

export const getTechnicianServicesAction = async () => {
    const cookieStore = await cookies()

    const accessToken = cookieStore.get("accessToken")?.value
    if (!accessToken) {
        return {
            success: false,
            message: "User not logged in."
        }
    }

    const role = jwt.verify(accessToken, process.env.JWT_ACCESS as string) as JwtPayload
    if (role.role !== 'TECHNICIAN') {
        return {
            success: false,
            message: "Unauthorized",
        };
    }

    const res = await fetch(`${process.env.BACKEND_API}/api/technicians/services`, {
        headers: {
            Cookie: `accessToken=${accessToken}`
        }
    })

    const result = await res.json();
    return result
}

export const getCategoriesAction = async () => {
    const res = await fetch(`${process.env.BACKEND_API}/api/categories`, {
        cache: 'no-store',
    })
    const result = await res.json()
    return result
}

export const getTechnicianBookings = async () => {
    const cookieStore = await cookies()

    const accessToken = cookieStore.get("accessToken")?.value
    if (!accessToken) {
        return {
            success: false,
            message: "User not logged in."
        }
    }

    const role = jwt.verify(accessToken, process.env.JWT_ACCESS as string) as JwtPayload
    if (role.role !== 'TECHNICIAN') {
        return {
            success: false,
            message: "Unauthorized",
        };
    }

    const res = await fetch(`${process.env.BACKEND_API}/api/technician/bookings`, {
        headers: {
            Cookie: `accessToken=${accessToken}`
        }
    })

    const result = await res.json();
    return result
}

export const updateBookingStatus = async (id: string, status: string) => {
    const cookieStore = await cookies()

    const accessToken = cookieStore.get('accessToken')?.value
    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in.'
        }
    }

    try {
        const role = jwt.verify(accessToken, process.env.JWT_ACCESS as string) as JwtPayload
        if (role.role !== 'TECHNICIAN') {
            return {
                success: false,
                message: 'Unauthorized',
            }
        }

        const res = await fetch(`${process.env.BACKEND_API}/api/technician/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Cookie: `accessToken=${accessToken}`
            },
            body: JSON.stringify({ status })
        })

        const result = await res.json()
        if (result.success) {
            revalidatePath('/dashboard/technician/bookings')
        }

        if (!res.ok) {
            return {
                success: false,
                message: result.message || 'Failed to update booking status'
            }
        }

        return {
            success: true,
            message: 'Booking status updated successfully',
            data: result
        }
    } catch (error) {
        console.error('Error updating booking status:', error)
        return {
            success: false,
            message: 'An error occurred while updating the booking status'
        }
    }
}

export const createTechnicianProfileAction = async (prevState: PrevState, formData: FormData) => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in.',
        }
    }

    try {
        const role = jwt.verify(accessToken, process.env.JWT_ACCESS as string) as JwtPayload
        if (role.role !== 'TECHNICIAN') {
            return {
                success: false,
                message: 'Unauthorized',
            }
        }

        const location = formData.get('location')?.toString() || ''
        const experience = formData.get('experience')?.toString() || ''

        // Parse availabilities from form data
        const availabilitiesJson = formData.get('availablities')?.toString() || '[]'
        let availablities = []
        try {
            availablities = JSON.parse(availabilitiesJson)
        } catch (e) {
            availablities = []
        }

        const res = await fetch(`${process.env.BACKEND_API}/api/technicians`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Cookie: `accessToken=${accessToken}`,
            },
            body: JSON.stringify({
                location,
                experience: parseInt(experience),
                availablities,
            }),
        })

        const result = await res.json()

        if (result.success) {
            revalidatePath('/dashboard/technician/profile')
        }

        return result
    } catch (error) {
        console.error('Error creating technician profile:', error)
        return {
            success: false,
            message: 'Failed to create profile',
        }
    }
}

export const updateTechnicianProfileAction = async (prevState: PrevState, formData: FormData) => {
    const cookieStore = await cookies()

    const accessToken = cookieStore.get('accessToken')?.value
    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in.',
        }
    }

    const role = jwt.verify(accessToken, process.env.JWT_ACCESS as string) as JwtPayload
    if (role.role !== 'TECHNICIAN') {
        return {
            success: false,
            message: 'Unauthorized',
        }
    }

    const location = formData.get('location') as string
    const experience = Number(formData.get('experience'))

    const res = await fetch(`${process.env.BACKEND_API}/api/technician/profile`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Cookie: `accessToken=${accessToken}`,
        },
        body: JSON.stringify({
            location,
            experience
        }),
        cache: 'no-cache'
    })

    const result = await res.json()
    if (result.success) {
        revalidatePath('/dashboard/technician/profile')
    }
    return result
}

export const updateAvailabilityAction = async (
    availabilityId: string,
    payload: {
        dayOfWeek: string
        startTime: string
        endTime: string
        isActive: boolean
    }
) => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in.',
        }
    }

    try {
        const role = jwt.verify(accessToken, process.env.JWT_ACCESS as string) as JwtPayload
        if (role.role !== 'TECHNICIAN') {
            return {
                success: false,
                message: 'Unauthorized',
            }
        }

        const res = await fetch(
            `${process.env.BACKEND_API}/api/technician/${availabilityId}/availability`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Cookie: `accessToken=${accessToken}`,
                },
                body: JSON.stringify(payload),
            }
        )

        const result = await res.json()
        if (result.success) {
            revalidatePath('technician/profile')
        }
        
        return result
    } catch (error) {
        console.error('Error updating availability:', error)
        return {
            success: false,
            message: 'Failed to update availability',
        }
    }
}

export const getCustomerBookings = async () => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in.',
        }
    }

    const res = await fetch(`${process.env.BACKEND_API}/api/bookings`, {
        headers: {
            Cookie: `accessToken=${accessToken}`,
        }
    })

    const result = await res.json()
    return result
}

export const cancelBookingAction = async (id: string) => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in.',
        }
    }

    const res = await fetch(`${process.env.BACKEND_API}/api/bookings/${id}/cancel`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            Cookie: `accessToken=${accessToken}`,
        },
    })

    const result = await res.json()

    if (result.success) {
        revalidatePath('/dashboard/customer/bookings')
    }

    return result
}

export const paymentAction = async (bookingId: string) => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in.',
        }
    }

    const res = await fetch(`${process.env.BACKEND_API}/api/payments/create`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Cookie: `accessToken=${accessToken}`,
        },
        body: JSON.stringify({ bookingId }),
    })

    const result = await res.json()

    if (result.success) {
        revalidatePath('/dashboard/customer/bookings')
    }

    return result
}

export const reviewsAction = async (prevState: PrevState, formData: FormData) => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in.',
        }
    }

    const bookingId = formData.get("bookingId") as string
    const rating = Number(formData.get("rating"))
    const comment = formData.get("comment") as string

    if (!rating || rating < 1 || rating > 5) {
        return {
            success: false,
            message: 'Please select a rating between 1 and 5.',
        }
    }

    const res = await fetch(`${process.env.BACKEND_API}/api/reviews`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Cookie: `accessToken=${accessToken}`,
        },
        body: JSON.stringify({ bookingId, rating, comment }),
    })

    const result = await res.json()

    if (result.success) {
        revalidatePath('/dashboard/customer/bookings')
    }

    return result
}

export const getMyReviewsAction = async () => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in.',
        }
    }

    const role = jwt.verify(accessToken, process.env.JWT_ACCESS as string) as JwtPayload
    if (role.role !== 'CUSTOMER') {
        return {
            success: false,
            message: 'Unauthorized',
        }
    }

    const res = await fetch(`${process.env.BACKEND_API}/api/reviews/my-reviews`, {
        headers: {
            "Content-Type": "application/json",
            Cookie: `accessToken=${accessToken}`,
        }
    })

    const result = await res.json()
    return result
}

export const customerDashboardStatsAction = async () => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in.',
        }
    }

    const role = jwt.verify(accessToken, process.env.JWT_ACCESS as string) as JwtPayload
    if (role.role !== 'CUSTOMER') {
        return {
            success: false,
            message: 'Unauthorized',
        }
    }

    const res = await fetch(`${process.env.BACKEND_API}/api/dashboard/customer`, {
        headers: {
            "Content-Type": "application/json",
            Cookie: `accessToken=${accessToken}`,
        }
    })

    const result = await res.json()
    return result
}

export const adminDashboardStatsAction = async () => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in.',
        }
    }

    const role = jwt.verify(accessToken, process.env.JWT_ACCESS as string) as JwtPayload
    if (role.role !== 'ADMIN') {
        return {
            success: false,
            message: 'Unauthorized',
        }
    }

    const res = await fetch(`${process.env.BACKEND_API}/api/dashboard/admin`, {
        headers: {
            "Content-Type": "application/json",
            Cookie: `accessToken=${accessToken}`,
        }
    })

    const result = await res.json()
    return result
}

export const technicianDashboardStatsAction = async () => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in.',
        }
    }

    const role = jwt.verify(accessToken, process.env.JWT_ACCESS as string) as JwtPayload
    if (role.role !== 'TECHNICIAN') {
        return {
            success: false,
            message: 'Unauthorized',
        }
    }

    const res = await fetch(`${process.env.BACKEND_API}/api/dashboard/technician`, {
        headers: {
            "Content-Type": "application/json",
            Cookie: `accessToken=${accessToken}`,
        }
    })

    const result = await res.json()
    return result
}

export const getAllUsersAction = async () => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in.',
        }
    }

    const role = jwt.verify(accessToken, process.env.JWT_ACCESS as string) as JwtPayload
    if (role.role !== 'ADMIN') {
        return {
            success: false,
            message: 'Unauthorized',
        }
    }

    const res = await fetch(`${process.env.BACKEND_API}/api/admin/users`, {
        headers: {
            "Content-Type": "application/json",
            Cookie: `accessToken=${accessToken}`,
        }
    })

    const result = await res.json()
    return result
}

export const updateUsersStatusActions = async (id: string, prevState: PrevState, formData: FormData) => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in.',
        }
    }

    const role = jwt.verify(accessToken, process.env.JWT_ACCESS as string) as JwtPayload
    if (role.role !== 'ADMIN') {
        return {
            success: false,
            message: 'Unauthorized',
        }
    }

    const status = formData.get('status') as string

    if (status !== 'ACTIVE' && status !== 'BLOCKED') {
        return {
            success: false,
            message: 'Invalid status value.',
        }
    }

    const res = await fetch(`${process.env.BACKEND_API}/api/admin/users/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            Cookie: `accessToken=${accessToken}`,
        },
        body: JSON.stringify({ status })
    })

    const result = await res.json()

    if (result.success) {
        revalidatePath('/dashboard/admin/users')
    }

    return result
}

export const getAllCategoriesAction = async () => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in.',
        }
    }

    const role = jwt.verify(accessToken, process.env.JWT_ACCESS as string) as JwtPayload
    if (role.role !== 'ADMIN') {
        return {
            success: false,
            message: 'Unauthorized',
        }
    }

    const res = await fetch(`${process.env.BACKEND_API}/api/categories`, {
        headers: {
            "Content-Type": "application/json",
            Cookie: `accessToken=${accessToken}`,
        }
    })

    const result = await res.json()
    return result
}

export const createCategoriesAction = async (prevState: PrevState, formData: FormData) => {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value

    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in.',
        }
    }

    const role = jwt.verify(accessToken, process.env.JWT_ACCESS as string) as JwtPayload
    if (role.role !== 'ADMIN') {
        return {
            success: false,
            message: 'Unauthorized',
        }
    }

    const getName = formData.get('name') as string
    const name = getName.toUpperCase()

    const res = await fetch(`${process.env.BACKEND_API}/api/admin/categories`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Cookie: `accessToken=${accessToken}`,
        },
        body: JSON.stringify({ name })
    })

    const result = await res.json()

    if (result.success) {
        revalidatePath('/dashboard/admin/categories')
    }

    return result
}