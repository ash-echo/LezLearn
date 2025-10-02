export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist in our learning universe.
        </p>
        <a 
          href="/"
          className="inline-block bg-gradient-to-r from-neon-cyan to-neon-violet text-black font-bold py-3 px-6 rounded-lg hover:from-neon-violet hover:to-neon-magenta transition-all duration-300"
        >
          Return Home
        </a>
      </div>
    </div>
  )
}