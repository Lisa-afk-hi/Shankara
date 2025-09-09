"use client";

export default function WelcomeBanner() {
  return (
    <div className="bg-[#e9f8e2] flex flex-col items-center justify-center text-center px-6 py-16 space-y-6">
      <div>
        <p className="text-[#f54078] text-2xl font-bold">
          Welcome to Shankara Ayurveda
        </p>
      </div>
      <div>
        <p className="text-black max-w-3xl leading-relaxed">
          At Shankara Ayurveda, we believe in the holistic power of nature to
          nurture mind, body, and spirit through the ancient science of Ayurveda.
          Rooted in timeless traditions, we bring authentic Ayurvedic treatments
          and remedies to help you restore balance and wellness in modern life.
        </p>
      </div>
    </div>
  );
}
