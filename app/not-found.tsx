import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#030712] text-white">
      <div className="text-center">
        <h1 className="text-7xl font-black text-blue-500">
          404
        </h1>

        <p className="mt-4 text-gray-400">
          Halaman yang Anda cari tidak ditemukan.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 transition hover:bg-blue-500"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}