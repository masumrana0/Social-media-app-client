import { isLoggedIn } from "@/service/auth.service";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const currentUser = isLoggedIn();
  console.log(currentUser);

  const url = request.url;
  console.log(url);

  if (currentUser && !request.nextUrl.pathname.startsWith("/ ")) {
    return Response.redirect(new URL("/", request.url));
  }

  if (!currentUser && !request.nextUrl.pathname.startsWith("/login")) {
    return Response.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
