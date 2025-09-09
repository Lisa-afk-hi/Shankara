"use client";

export default function AboutBanner() {
  return (
    <div className="bg-white flex items-center justify-center px-6 py-16">
      {/* Responsive container */}
      <div className="flex flex-col md:flex-row w-full max-w-7xl">
        {/* Image section */}
        <div className="w-full md:w-[70%]">
          <img
            src="/about-image.jpg"
            alt="Shankara Ayurveda"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Text section */}
        <div className="w-full md:w-[30%] flex flex-col justify-center items-start text-left pl-0 md:pl-6 mt-6 md:mt-0 space-y-4">
          <div>
            <p className="text-[#596325] text-lg font-semibold">About</p>
            <p className="text-[#596325] text-2xl font-bold">
              Shankara Ayurveda
            </p>
          </div>
          <div>
            <p className="text-black text-base leading-relaxed">
            With over 100 years of Ayurvedic heritage, Shankara Ayurveda nurtures mind, body, and spirit through authentic wisdom. Rooted in tradition yet adapted for modern life, our clinic offers personalized treatments crafted from natural herbs to address root causes, not just symptoms. Guided by experienced Ayurvedic doctors, we create tailored healing experiences that restore balance, harmony, and vitality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
