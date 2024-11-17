"use client";

import * as Sentry from "@sentry/nextjs";
import NextError from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        {/* `NextError` is the default Next.js error page component. Its type
        definition requires a `statusCode` prop. However, since the App Router
        does not expose status codes for errors, we simply pass 0 to render a
        generic error message. */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
// import * as Sentry from '@sentry/nextjs';

// export async function register() {
//   if (process.env.NEXT_RUNTIME === 'nodejs') {
//     await import('./sentry.server.config');
//   }

//   if (process.env.NEXT_RUNTIME === 'edge') {
//     await import('./sentry.edge.config');
//   }
// }

// export const onRequestError = Sentry.captureRequestError;

