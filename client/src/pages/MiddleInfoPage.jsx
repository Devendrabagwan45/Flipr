import React from "react";

const MiddleInfoPage = () => {
  return (
    <div className="bg-gray-200 p-8 h-screen">
      <h1 className="text-3xl font-black mb-4">Not Your Average Realtor</h1>
      <p className="text-gray-600 mb-10 font-black">
        Real estate is changing rapidly, and we are dedicated to providing you
        with expert listing design and marketing to get the most out of your
        sale or purchase.
      </p>
      <div className="flex justify-between w-[80vw]  p-5 gap-2">
        <img
          className="rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS16qr8B4K4xta-j3LhtOGgS8c0RYcY1aDaqFPB7anUPbOHOS-oekX62fQ&s"
          alt=""
        />
        <img
          className="rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCYpbJbiqNp4m2x4EAadVC0k2vBvn2-Tnyip5sij_9ITwe7Z43oBzLb3c&s"
          alt=""
        />
        <img
          className="rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrd2XsGY7KVghdVWpCEMErbhheviZlC3VyUQ&s"
          alt=""
        />
      </div>

      <h2 className="text-2xl font-black  mb-6">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v8m0 4v-4m0-8L8 12m4-4l4 4"
              />
            </svg>
            <h3 className="font-semibold">Development With AI</h3>
          </div>
          <p className="text-gray-600">
            Whether you're looking to Create a web page we are here.
          </p>
        </div>

        <div className="border p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V5l-4 4 4 4v-5h4a1 1 0 011 1v9h0M5 12h0m4 0H5m0 0h0m0 0h0M5 12a3 3 0 011.393-2.605A3 3 0 0112 12a3 3 0 01-1.605 2.605A3 3 0 015 12z"
              />
            </svg>
            <h3 className="font-semibold">Design</h3>
          </div>
          <p className="text-gray-600">
            Our cutting-edge design ensures buyers are drawn to your property,
            setting you apart from the competition.
          </p>
        </div>

        <div className="border p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5h18M3 12h18m-9 7h9M3 18h9M3 12l4 4M3 12l4-4"
              />
            </svg>
            <h3 className="font-semibold">Marketing</h3>
          </div>
          <p className="text-gray-600">
            We employ sophisticated marketing strategies that ensure your
            property reaches its target audience effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiddleInfoPage;
