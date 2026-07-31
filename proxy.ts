import { NextResponse, type NextRequest } from 'next/server'
import jwt, { JwtPayload } from 'jsonwebtoken';

const AUTH_ROUTES = ['/auth/login', '/auth/register']
const PUBLIC_ROUTES = ['/', '/auth/login', '/auth/register', '/services', '/contact-us']

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl

    const accessToken = request.cookies.get("accessToken")?.value
    // const refreshToken = cookieStore.get("refreshToken")?.value

    let decodedAccessToken: JwtPayload | null = null
    try {
        decodedAccessToken = accessToken ? (jwt.verify(accessToken, process.env.JWT_ACCESS as string) as JwtPayload)
            : null;
    }
    catch {
        decodedAccessToken = null;
    }

    if (decodedAccessToken && AUTH_ROUTES.includes(pathname)) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    const isPublic = PUBLIC_ROUTES.some((r) => pathname === r || pathname.startsWith(r + '/'))
    if (!isPublic && !decodedAccessToken) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico
         * - any file with an extension (images, fonts, etc.)
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)',
    ],
}