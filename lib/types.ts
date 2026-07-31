import { JSX } from "react/jsx-runtime"

type UserType = {
    success: boolean,
    message: string,
    data: {
        id: string,
        name: string,
        email: string,
        profilePicture: string | null | undefined,
        status: string,
        role: string,
        created_at: string,
        updated_at: string,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        technicians: null | any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        myBookings: any
    }
}

export type UserProps = {
    user: UserType
}

type ServiceType = {
    sucess: boolean,
    message: string,
    data:
    {
        map(arg0: (service: any, index: any) => JSX.Element): import("react").ReactNode
        length: number
        id: string,
        title: string,
        description: string,
        price: number,
        isActive: boolean,
        thumbnail: string,
        createdAt: string,
        updatedAt: string,
        technicianId: string,
        categoryId: string,
        category: string[],
        technician: string[]
    }
}

export type ServiceProps = {
    service: ServiceType
}