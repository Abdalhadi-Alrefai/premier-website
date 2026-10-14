import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-4xl font-bold text-white mb-2">404 - Page Not Found</h2>
      <p className="text-brand-muted text-sm mb-6">
        The requested digital dental page does not exist.
      </p>
      <Link
        href="/en"
        className="px-4 py-2 rounded-lg bg-brand-turquoise text-brand-black text-sm font-semibold hover:bg-brand-turquoise-light transition-all"
      >
        Return Home
      </Link>
    </div>
  );
}
