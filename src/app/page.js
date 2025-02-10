'use client';  // Ensures this component runs client-side

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Welcome to Adamass Consulting</h1>
      <p className="mt-4 text-xl">Empowering your business through technology and innovation.</p>
      <a href="#contact" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Contact Us
      </a>
    </div>
  );
}
