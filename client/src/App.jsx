import LandingPage from "./pages/LandingPage";
import MiddleInfoPage from "./pages/MiddleInfoPage";
import About from "./components/About";
import Projects from "./components/Projects";
import HappyClients from "./components/HappyClients";
import NewsletterSubscription from "./components/NewsletterSub";
const App = () => {
  return (
    <div>
      <LandingPage />
      <MiddleInfoPage />
      <Projects />
      <HappyClients />
      <About />
      <NewsletterSubscription />
    </div>
  );
};

export default App;
