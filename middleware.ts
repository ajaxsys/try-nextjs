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
      console.log("P rewrite from,to=", req.nextUrl.pathname, url.pathname);
      return NextResponse.rewrite(url);
    } else {
      const url = req.nextUrl.clone()
      url.pathname = `/p/pc/${id}`
      console.log("P rewrite from,to=", req.nextUrl.pathname, url.pathname);
      return NextResponse.rewrite(url);
    }
  }

  // Check if the request is for a path that starts with '/e/'
  if (pathname.startsWith('/e/') && !pathname.endsWith('/sp/') && !pathname.endsWith('/pc/')) {
    // Extract the 'id' from the URL path
    const id = pathname.split('/e/')[1];

    // Check User-Agent
    const userAgent = req.headers.get('user-agent') || '';

    // Regex to check if UA is mobile
    const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent);

    if (isMobile) {
      const url = req.nextUrl.clone()
      url.pathname = `/e/${id}/sp/`
      console.log("E rewrite from,to=", req.nextUrl.pathname, url.pathname);
      return NextResponse.rewrite(url);
    } else {
      const url = req.nextUrl.clone()
      url.pathname = `/e/${id}/pc/`
      console.log("E rewrite from,to=", req.nextUrl.pathname, url.pathname);
      return NextResponse.rewrite(url);
    }
  }
  
  // If the path is not matched, proceed with the request
  return NextResponse.next();
}

// Specify the paths where the middleware should be applied
export const config = {
  matcher: ['/p/:id*', '/e/:id*'],
};
