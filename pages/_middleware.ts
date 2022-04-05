import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  if (
    process.env.NODE_ENV === 'development' ||
    req.nextUrl.hostname === 'upbound-git-dev-unomena.vercel.app'
  ) {
    return NextResponse.next();
  }

  const basicAuth = req.headers.get('authorization');

  if (basicAuth) {
    const auth = basicAuth.split(' ')[1];
    const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':');

    if (user === 'cocoon' && pwd === 'Bt79') {
      return NextResponse.next();
    }
  }

  return new Response('Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}
