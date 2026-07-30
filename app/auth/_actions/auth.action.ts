"use server"
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// type SignUpState = {
//     success: boolean,
//     message: string,
//     data: {
//         id: string,
//         name: string,
//         email: string,
//         profilePicture: string | undefined,
//         status: string,
//         role: string,
//         created_at: string,
//         updated_at: string
//     },
//     accessToken: string,
//     refreshToken: string
// }

export const signUpAction = async (formData: FormData) => {
    const payload = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        role: formData.get("role") as string,
    }

    const res = await fetch(`${process.env.BACKEND_API}/api/auth/register`, {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload)
    })

    const result = await res.json()

    if (!result.success) {
        return {
            success: false,
            message: result.message,
        };
    }

    const cookieStore = await cookies();

    cookieStore.set("accessToken", result.data.accessToken, {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24,
    });

    cookieStore.set("refreshToken", result.data.refreshToken, {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7,
    });

    redirect("/");
}

export const loginAction = async (formData: FormData) => {
    const payload = {
        email: formData.get("email") as string,
        password: formData.get("password") as string
    }

    const res = await fetch(`${process.env.BACKEND_API}/api/auth/login`, {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload)
    })

    const result = await res.json()

    if (!result.success) {
        return {
            success: false,
            message: result.message,
        };
    }

    const cookieStore = await cookies();

    cookieStore.set("accessToken", result.data.accessToken, {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24,
    });

    cookieStore.set("refreshToken", result.data.refreshToken, {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7,
    });

    redirect("/");
}