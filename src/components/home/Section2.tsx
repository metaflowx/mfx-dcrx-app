


import Image from "next/image";

const HomeSection2 = ({ id }: { id: string }) => {
  return (
    <div className="bg-[#0c1b2e] w-full min-h-screen flex items-center justify-center" id={id}>
      <div className="max-w-5xl w-full bg-[#102338] p-8 rounded-lg shadow-lg">
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold text-[#38b6ff] mb-6">
          How can you benefit from Decryptox referral program?
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left Section: Image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 lg:w-72 lg:h-72 bg-gradient-to-b from-[#0c1b2e] to-[#153244] rounded-xl shadow-lg">
              <Image
                src="/referral-image.jpg"
                alt="Referral Program"
                layout="fill"
                className="object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Right Section: Text Content */}
          <div className="text-white space-y-6">
            {["Dummy text of the printing", "Dummy text of the printing", "Dummy text of the printing"].map(
              (title, index) => (
                <div key={index}>
                  <h2 className="text-lg md:text-xl font-semibold text-[#38b6ff]">
                    {title}
                  </h2>
                  <p className="text-sm md:text-base text-gray-300">
                    Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;

