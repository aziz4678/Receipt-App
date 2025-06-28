import React from "react";
import CTA from "../assets/img/cta.png";

export default function CTASection() {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12 rounded-3xl">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Discover tasty recipes on the go. Get the app on iPhone or Android and start cooking today.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#" className="h-14">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-full object-contain"
              />
            </a>
            <a href="#" className="h-14">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-full object-contain"
              />
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className="w-full lg:w-1/2">
          <img
            src={CTA}
            alt="Download App Preview"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
