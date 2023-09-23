/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Header from "./template/Header";
import Hero from "./template/Hero";
import Timeline from "./template/Timeline";
import Partners from "./template/Partners";
import Introduction from "./template/Introduction";
import Rules from "./template/Rules";
import Judging from "./template/Judging";
import FAQs from "./template/FAQs";
import Prizes from "./template/Prizes";
import Privacy from "./template/Privacy";
import Footer from "./template/Footer";


export default function Home() {
  return (
    <div className="bg-body relative h-screen max-w-screen overflow-x-hidden ">
      <Header />
      <div className=" lg:mx-auto items-center ">
        <Hero />
        <Introduction />
        <Rules />
        <Judging />
        <FAQs />
        <Timeline />
        <Prizes />
        <Partners />
        <Privacy />
        <Footer />
      </div>
    </div>
  );
}
