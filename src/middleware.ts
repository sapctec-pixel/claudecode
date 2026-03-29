import { type NextRequest, NextResponse } from 'next/server'

const SKIP_PATHS = ['/api', '/_next', '/favicon.ico', '/icons', '/images']
const ADMIN_PATHS = ['/admin']

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip static/api paths
  if (SKIP_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next()
  }

  // Protect admin routes (basic — enhance with Supabase auth later)
  if (ADMIN_PATHS.some((p) => pathname.startsWith(p))) {
    // TODO: verify admin role via Supabase once env vars are configured
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
