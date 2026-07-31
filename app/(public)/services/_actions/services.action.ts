export const getAllServicesAction = async () => {
    const res = await fetch(`${process.env.BACKEND_API}/api/services`)
    const result = await res.json()

    return result
}