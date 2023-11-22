import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const pathname = req.nextUrl.pathname;

  if (pathname.match(/\.(js|css|woff|jpg|png|gif|ttf)$/)) {
    res.headers.set('Cache-Control', 'public,max-age=3600');
  }

  if (pathname.startsWith('/_next/image')) {
    res.headers.set('Cache-Control', 'public, max-age=3600, immutable');
  }

  return res;
}
