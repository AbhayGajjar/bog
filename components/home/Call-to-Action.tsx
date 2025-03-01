import React from "react";
import { Button } from "../ui/button";

const CallToAction = () => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-20">
      <div className="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:rounded-3xl sm:border sm:border-gray-100 sm:px-16 sm:shadow-sm">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Join our community today!
        </h2>

        <h3 className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-500">
          Sign up for exclusive access to events, resources, and more
        </h3>

        <div className="mt-8 flex items-center justify-center gap-x-6">
          <Button className="w-44 p-5">Explore Now</Button>
        </div>

        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fillOpacity="0.7"
          ></circle>
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stopColor="#3b82f6"></stop>
              <stop offset="1" stopColor="#1d4ed8"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default CallToAction;
