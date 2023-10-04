import { NextResponse } from "next/server";

const urls = ["/signin", "/signup", "/forgot-password", "/reset-password"];

export function middleware(req) {
  const token = req.cookies.has("token");
  const path = req.nextUrl.pathname;
  if (!token && !urls.includes(path)) {
    return NextResponse.redirect(new URL("/signin", req.url));
  } else if (token && urls.includes(path)) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
