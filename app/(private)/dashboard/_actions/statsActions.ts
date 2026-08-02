'use server'

import { cookies } from 'next/headers'
import jwt, { JwtPayload } from 'jsonwebtoken'

export const getAdminDashboardStats = async () => {
    try {
        const cookieStore = await cookies()
        const accessToken = cookieStore.get('accessToken')?.value

        if (!accessToken) {
            return {
                success: false,
                message: 'User not logged in.',
                data: null,
            }
        }

        const role = jwt.verify(
            accessToken,
            process.env.JWT_ACCESS as string
        ) as JwtPayload
        if (role.role !== 'TECHNICIAN') {
            return {
                success: false,
                message: 'Unauthorized',
                data: null,
            }
        }

        // Fetch all data from actual APIs
        const [bookingsRes, servicesRes] = await Promise.all([
            fetch(`${process.env.BACKEND_API}/api/technician/bookings`, {
                headers: {
                    Cookie: `accessToken=${accessToken}`,
                },
            }),
            fetch(`${process.env.BACKEND_API}/api/technicians/services`, {
                headers: {
                    Cookie: `accessToken=${accessToken}`,
                },
            })
        ])

        const bookingsData = await bookingsRes.json()
        const servicesData = await servicesRes.json()

        // Calculate stats from the fetched data
        const bookings = bookingsData.data || []
        const services = servicesData.data.services || []

        const totalBookings = bookings.length
        const totalServices = services.length

        return {
            success: true,
            data: {
                totalBookings,
                totalServices
            }
        }
    } catch (error) {
        console.error('Error fetching admin stats:', error)
        return {
            success: false,
            message: 'Failed to fetch dashboard stats',
            data: null,
        }
    }
}
