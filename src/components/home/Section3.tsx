




"use client";



export default function HomeSection3() {
  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-16 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content Section */}
        <div className="flex-1 space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0EA5E9]">
            Referral program agreement
          </h1>
          
          <p className="text-lg text-gray-300">
            Lorem Ipsum has been the industry&apos;s standard dummy
          </p>
          
          <div className="space-y-6">
            {[
              "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
              "Lorem Ipsum has been the industry's standard.",
              "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1">
                  <div className="w-5 h-5 rounded-sm bg-[#0EA5E9] flex items-center justify-center">
                    {/* <ArrowRight className="w-3 h-3 text-white" /> */}
                  </div>
                </div>
                <p className="text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full md:w-[500px] aspect-square">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/20 to-[#0EA5E9]/5 rounded-3xl transform rotate-3"></div>
          <div className="relative bg-[#111827] rounded-3xl p-8 h-full flex items-center justify-center overflow-hidden">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Central Icon */}
                  <div className="w-24 h-24 bg-[#0EA5E9] rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 12L12 16L16 12M12 8L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  {/* Orbiting Users */}
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute"
                      style={{
                        transform: `rotate(${i * 60}deg) translateY(-80px)`,
                        transformOrigin: "center bottom",
                      }}
                    >
                      <div className="w-10 h-10 bg-[#60A5FA] rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                          <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  ))}
                  
                  {/* Floating Coins */}
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-8 h-8 bg-[#FCD34D] rounded-full"
                      style={{
                        transform: `rotate(${i * 90}deg) translateY(-60px)`,
                        transformOrigin: "center bottom",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
