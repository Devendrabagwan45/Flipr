import React from "react";

const projects = [
  {
    title: "Consultation",
    description:
      "Providing expert advice and guidance to clients on various aspects of project management.  ",
    imageUrl:
      " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfQAF2SWf2uFYnJQFfIm_toCc4HG7if5q6bQ&s",
  },
  {
    title: "Design",
    description:
      "The initial phase of a project where its key aspects are outlined, including goals, structure, tasks, and deliverables",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSox3_8iW9q_NM3ydWPoBfmX-HQyQrny1GnYA&s",
  },
  {
    title: "Marketing & Design",
    description:
      "A piece of marketing copy designed to inform potential customers about a product or service and persuade them to make a purchase.",
    imageUrl:
      "https://dachpian.weebly.com/uploads/1/1/9/4/119405827/bigstock-205636990_orig.jpg",
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-200 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-black">Our Projects</h2>
        <p className="mt-2 text-gray-600">
          We know what buyers are looking for and suggest projects that will
          bring clients top dollar for the sale of their homes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-500">{project.description}</p>
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-orange-500">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
