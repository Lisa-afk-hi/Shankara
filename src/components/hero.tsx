"use client";
export default function HeroSection() {
    return (
      <div className="relative">
        {/* Background image */}
        <img
          src="/images/panchakarma-bg.jpg"
          alt="Panchakarma"
          className="w-full h-[400px] object-cover"
        />
  
        {/* Overlay text block */}
        <div className="absolute top-0 left-0 h-full flex items-center px-6">
          <div className="bg-white/70 rounded-xl p-6 max-w-md">
            <h2 className="text-pink-700 text-2xl font-semibold mb-4">
              Reset Your Body, Mind & Spirit with Panchakarma
            </h2>
            <p className="text-gray-700 mb-6">
              Panchakarma is Ayurveda’s most powerful detox, designed to gently
              cleanse toxins, restore digestion, and strengthen immunity. By
              reviving energy and balancing body and mind, it offers a complete
              reset for your overall well-being.
            </p>
            <button className="bg-pink-600 text-white px-4 py-2 rounded-3xl shadow hover:bg-pink-700">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    );
  }
  