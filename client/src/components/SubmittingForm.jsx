import React, { useState } from "react";
import axios from "axios";

const SubmittingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  const saveInquiry = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/website/inquiry/insert`, formData)
      .then((res) => {
        console.log(res.data);

        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          city: "",
        });
      });
  };

  let getValue = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    let oldData = { ...formData };

    oldData[inputName] = inputValue;
    setFormData(oldData);
  };

  return (
    <div className="flex">
      <form
        className="bg-black rounded inline-block p-4 mr-5"
        onSubmit={saveInquiry}
      >
        <h3 className="text-2xl">Get a Free Consultation</h3>
        <input
          className="w-full p-2.5 my-2.5"
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={getValue}
          required
        />
        <input
          className="w-full p-2.5 my-2.5"
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={getValue}
          required
        />
        <input
          className="w-full p-2.5 my-2.5"
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={getValue}
          required
        />
        <input
          className="w-full p-2.5 my-2.5"
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={getValue}
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
