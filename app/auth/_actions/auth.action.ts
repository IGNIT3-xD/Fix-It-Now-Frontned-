"use server"
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const setCookies = async (result: {
    accessToken: string,
    refreshToken: string
}) => {
    const cookieStore = await cookies();
    // console.log(result);

    cookieStore.set("accessToken", result.accessToken, {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24,
    });

    cookieStore.set("refreshToken", result.refreshToken, {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7,
    });
}

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

    await setCookies(result.data)

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

    await setCookies(result.data)

    redirect("/");
}

// Get profile, technician profile and availablities
export const getMeAction = async () => {
    const cookieStore = await cookies()

    const accessToken = cookieStore.get("accessToken")?.value
    if (!accessToken) {
        return {
            success: false,
            message: 'User not logged in.'
        }
    }

    const res = await fetch(`${process.env.BACKEND_API}/api/auth/me`, {
        headers: {
            Cookie: `accessToken=${accessToken}`
        }
    })

    const result = await res.json()
    return result;
}

export const logoutAction = async () => {
    const cookieStore = await cookies()

    cookieStore.delete("accessToken")
    cookieStore.delete("refreshToken")
    
    redirect('/auth/login')
}