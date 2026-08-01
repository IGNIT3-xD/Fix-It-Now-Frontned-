"use server"

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