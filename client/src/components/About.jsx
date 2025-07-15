const About = () => {
  return (
    <div className="relative bg-gray-200 py-16 px-6 sm:px-12 lg:px-24 overflow-hidden">
      <div className="flex justify-center space-x-8 mb-16 max-w-5xl mx-auto relative z-10 ">
        {/* Image 1 */}
        <div className="relative">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b23becef-c4b7-4dba-9242-723702f6491f.png"
            alt="Two business professionals shaking hands outside a modern office building with greenery"
            className="rounded-md shadow-lg object-cover w-40 h-40"
          />
        </div>

        {/* Image 2 */}
        <div className="relative">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a71e40ba-e143-4f2f-95e3-fac3702b18d3.png"
            alt="A businesswoman presenting ideas to colleagues in a bright office meeting room with large windows"
            className="rounded-md shadow-lg object-cover w-52 h-40"
          />
        </div>

        {/* Image 3 */}
        <div className="relative">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7283a0b3-c4d0-4882-8f97-ae679672cf36.png"
            alt="Three colleagues casually discussing while seated together with a laptop in a bright office"
            className="rounded-md shadow-lg object-cover w-44 h-40"
          />
        </div>
      </div>

      {/* About Us Content */}
      <div className="max-w-3xl mx-auto text-center text-gray-700 relative z-10">
        <h2 className="text-2xl     mb-2 inline-block border-b-4 border-blue-400 font-black">
          About Us
        </h2>
        <p className="mt-2 text-sm sm:text-base leading-relaxed px-4">
          Three years of experience in the real estate customer service and
          coordination work has been and followed through. We provide quality
          services to build relationships with clients and, most importantly,
          maintain these relationships by communicating effectively.
        </p>

        <button
          type="button"
          className="mt-6 inline-block border border-blue-500  rounded-md text-sm px-6 py-2 hover:bg-blue-50 transition-colors duration-300"
          aria-label="Learn more about us"
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default About;
