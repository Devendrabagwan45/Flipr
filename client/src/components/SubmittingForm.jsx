import React, { useState } from "react";
import axios from "axios";

const SubmittingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  return (
    <div className="flex">
      <form className="bg-black rounded inline-block p-4 mr-5">
        <h3 className="text-2xl">Get a Free Consultation</h3>
        <input
          className="w-full p-2.5 my-2.5"
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          required
        />
        <input
          className="w-full p-2.5 my-2.5"
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          required
        />
        <input
          className="w-full p-2.5 my-2.5"
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          required
        />
        <input
          className="w-full p-2.5 my-2.5"
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          required
        />
        <button
          className="p-2.5 bg-blue-500 border-none text-white cursor-pointer"
          type="submit"
        >
          Send Instant Inquiry
        </button>
      </form>
    </div>
  );
};

export default SubmittingForm;
