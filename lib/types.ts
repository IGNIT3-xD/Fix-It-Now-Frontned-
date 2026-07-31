export type UserType = {
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