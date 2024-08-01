import AboutPage from "@/components/AboutPage";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HomePage />
      <AboutPage />
    </div>
  );
}
