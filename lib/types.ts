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

export type ServiceDetailsData = {
    data: any
    id: string,
    title: string,
    description: string,
    price: number,
    isActive: boolean,
    thumbnail: string,
    createdAt: string,
    updatedAt: string,
    category: {
        id: string,
        name: string
    },
    technician: {
        id: string,
        experience: number,
        location: string,
        isVerified: boolean,
        avgRating: number,
        totalReviews: number,
        createdAt: string,
        updatedAt: string,
        userId: string,
        availabilities: any
    },
    bookings: any
}

export type ServiceDetProps = {
    service: ServiceDetailsData,
    user: UserType | null;
}

export type CreateBookingPayload = {
  technicianId: string;
  serviceId: string;
  scheduledAt: string;
}