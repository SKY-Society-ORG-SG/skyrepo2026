import localFont from 'next/font/local';
import Link from 'next/link';
import '@themes/globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

// Exported as 404.html, which GitHub Pages serves for any unknown URL.
export default function NotFound() {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased text-slate-900 bg-gray-100`}
      >
        <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-8 text-center">
          <h1 className="text-blue-800 font-bold text-3xl">
            Page not found · பக்கம் கிடைக்கவில்லை
          </h1>
          <p className="text-gray-600">
            The page you are looking for does not exist or has moved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/en/"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              English home
            </Link>
            <Link
              href="/ta/"
              className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
            >
              தமிழ் முகப்பு
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
