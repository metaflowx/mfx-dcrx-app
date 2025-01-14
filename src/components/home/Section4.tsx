

export default function HomeSection4() {
  return (
    <main className=" relative overflow-hidden bg-[#0066FF] w-full" >
      {/* Particle effect background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,102,255,0)_0%,rgba(0,102,255,0.7)_100%)]"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-blue-200 rounded-full animate-float-${i % 5}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.4,
              filter: 'blur(1px)',
              animation: `float ${5 + Math.random() * 5}s infinite ease-in-out ${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Let&apos;s be partners in success
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 mb-12 max-w-2xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <button 
          className="bg-white/10 hover:bg-white/20 text-white border-0 backdrop-blur-sm px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
        >
          Refer a friend
        </button>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blue-600/50 to-transparent"></div>
    </main>
  );
}