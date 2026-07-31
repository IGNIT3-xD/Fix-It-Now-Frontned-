"use server"

export const getAllServicesAction = async (
    searchParams: { [key: string]: string | string[] | undefined }
) => {
    const params = new URLSearchParams()

    if (searchParams.title) {
        params.set('title', searchParams.title as string)
    }

    const res = await fetch(`${process.env.BACKEND_API}/api/services?${params.toString()}`, {
        cache: 'no-store',
    })
    const result = await res.json()

    return result
}