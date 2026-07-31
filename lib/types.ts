/* eslint-disable @typescript-eslint/no-explicit-any */
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
        technicians: null | any,
        myBookings: any
    }
}

export type UserProps = {
    user: UserType
}

export type ServiceData = {
    id: string;
    title: string;
    description: string;
    price: number;
    isActive: boolean;
    thumbnail: string;
    createdAt: string;
    updatedAt: string;
    technicianId: string;
    categoryId: string;
    category: any;
    technician: any;
};

export type ServiceType = {
    sucess: boolean;
    message: string;
    data: ServiceData[];
};

export type ServiceProps = {
    service: ServiceType;
};