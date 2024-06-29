import AddNew from "@/components/AddNew";
import AllCards from "@/components/AllCards";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import SignIn from "@/components/SignIn";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <section>
      <SignIn />
      <AllCards />
      <AddNew />
      <Testimonials />
      <GetStarted />
      <ContactInfo />
      <Footer />
    </section>
  );
};
export default Home;
