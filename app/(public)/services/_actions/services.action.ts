"use server"
import { cookies } from 'next/headers';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { PrevState } from '@/lib/types';

export const getAllServicesAction = async (
    searchParams?: { [key: string]: string | string[] | undefined }
) => {
    const params = new URLSearchParams()

    if (searchParams?.title) {
        params.set('title', searchParams.title as string)
    }

    if (searchParams?.location) {
        params.set('location', searchParams.location as string)
    }

    if (searchParams?.sortBy) {
        params.set('sortBy', searchParams.sortBy as string)
    }

    if (searchParams?.sortOrder) {
        params.set('sortOrder', searchParams.sortOrder as string)
    }

    if (searchParams?.category) {
        params.set('category', searchParams.category as string)
    }

    const res = await fetch(`${process.env.BACKEND_API}/api/services?${params.toString()}`, {
        cache: 'no-store',
    })
    const result = await res.json()

    return result
}

export const popularServicesAction = async () => {
    const res = await fetch(`${process.env.BACKEND_API}/api/services?sortBy=avgRating&sortOrder=desc`)
    const result = await res.json()
    return result
}

export const getServiceByIdAction = async (id: string) => {
    const res = await fetch(`${process.env.BACKEND_API}/api/services/${id}`, {
        cache: 'force-cache'
    })

    const result = await res.json()
    return result
}

export const createBookingAction = async (prevState: PrevState, formData: FormData) => {
    const cookieStore = await cookies()
    const ROLE = ['CUSTOMER', 'ADMIN']

    const accessToken = cookieStore.get("accessToken")?.value
    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in.'
        }
    }

    const role = jwt.verify(accessToken, process.env.JWT_ACCESS as string) as JwtPayload
    if (!ROLE.includes(role.role)) {
        return {
            success: false,
            message: "Unauthorized",
        };
    }

    const technicianId = formData.get("technicianId") as string;
    const serviceId = formData.get("serviceId") as string;
    const scheduledAt = formData.get("scheduledAt") as string;

    const res = await fetch(`${process.env.BACKEND_API}/api/bookings`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Cookie: `accessToken=${accessToken}`
        },
        body: JSON.stringify({ technicianId, serviceId, scheduledAt })
    })

    const result = await res.json();
    return result
}