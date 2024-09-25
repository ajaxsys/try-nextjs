import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware function to handle routing based on the User-Agent
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  console.log("xxx", pathname);

  // Check if the request is for a path that starts with '/p/'
  if (pathname.startsWith('/p/') && !pathname.startsWith('/p/sp/') && !pathname.startsWith('/p/pc/')) {
    // Extract the 'id' from the URL path
    const id = pathname.split('/p/')[1];

    // Check User-Agent
    const userAgent = req.headers.get('user-agent') || '';

    // Regex to check if UA is mobile
    const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent);

    // Redirect to the appropriate path based on the device type
    // if (isMobile) {
    //   return NextResponse.redirect(new URL(`/p/sp/${id}`, req.url));
    // } else {
    //   return NextResponse.redirect(new URL(`/p/pc/${id}`, req.url));
    // }
    if (isMobile) {
      const url = req.nextUrl.clone()
      url.pathname = `/p/sp/${id}`
      return NextResponse.rewrite(url);
    } else {
      const url = req.nextUrl.clone()
      url.pathname = `/p/pc/${id}`
      return NextResponse.rewrite(url);
    }
  }

  // If the path is not matched, proceed with the request
  return NextResponse.next();
}

// Specify the paths where the middleware should be applied
export const config = {
  matcher: ['/p/:id*'],
};
