import { NextResponse } from "next/server";

export async function middleware(request) {
  const token = request.cookies.get("token");

  const currentPath = request.nextUrl.pathname;

  if (token && currentPath === "/") {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (!token) {
    if (request.nextUrl.pathname === "/") {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|static|.\\..|_next|favicon.ico).*)"],
};
