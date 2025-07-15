import React from "react";

const HappyClients = () => {
  const clients = [
    {
      name: "Hassan Smith",
      feedback: "I have been incredibly pleased with the services provided.",

      img: "/1.jpg",
      designation: "Employe, Company A",
    },
    {
      name: "Elvira Kayak",
      feedback: "The team was very professional and attentive.",

      img: "/2.jpg",
      designation: "Manager, Company B",
    },
    {
      name: "John Lopez",
      feedback: "Excellent experience and fantastic results.",

      img: "/3.jpg",
      designation: "Designer, Company C",
    },
    {
      name: "Marty Freeman",
      feedback: "The project was handled with utmost care and dedication.",

      img: "/4.jpg",
      designation: "Director, Company D",
    },
  ];

  return (
    <div className="bg-white p-10">
      <h2 className="font-black text-2xl text-center mb-8">Happy Clients</h2>
      <div className="flex justify-center space-x-6">
        {clients.map((client, index) => (
          <div
            key={index}
            className="max-w-sm bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center"
          >
            <img
              src={client.img}
              alt={`${client.name}`}
              className="w-16 h-16 rounded-full mb-4"
            />
            <h3 className="font-semibold text-lg">{client.name}</h3>
            <p className="text-gray-600 text-center mb-4">{client.feedback}</p>
            <span className="text-sm text-gray-500">{client.designation}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyClients;
