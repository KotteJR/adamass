export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to Adamass Consulting
      </h1>
      <p className="text-lg text-gray-600 mt-4">
        Expert strategic advisory in technology and innovation.
      </p>
      <a
        href="mailto:contact@adamass.com"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
      >
        Contact Us
      </a>
    </div>
  );
}
