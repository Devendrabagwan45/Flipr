import SubmittingForm from "../components/SubmittingForm";

const LandingPage = () => {
  return (
    <div
      className="flex flex-col item-center justify-center bg-cover bg-center bg-no-repeat text- bg-gray-200"
      style={{
        backgroundImage: `url('https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a71e40ba-e143-4f2f-95e3-fac3702b18d3.png')`,
      }}
    >
      <header className="flex justify-between items-center bg-white p-4">
        <h1 className="text-2xl font-black">SaaS</h1>
        <nav>
          <ul className="list-none p-0 font-black cursor-pointer">
            <li className="inline mx-4 text-2xl">Home</li>
            <li className="inline mx-4 text-2xl">Services</li>
            <li className="inline mx-4 text-2xl">About</li>
            <li className="inline mx-4 text-2xl">Products</li>

            <li className="inline mx-4 text-2xl">Contact</li>
          </ul>
        </nav>
      </header>
      <div className="text-white mt-15 flex gap-[40%]">
        <h2 className="text-5xl text-black font-bold ">
          Consultation, Design, & Marketing
        </h2>
        <SubmittingForm />
      </div>
    </div>
  );
};

export default LandingPage;
