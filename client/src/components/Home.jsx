import { EnvelopeIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import Faq from "./Faq";
import { faq } from "../utils/faqData";

const Home = () => {
  return (
    <div className="lg:container lg:mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-center flex-col pt-11 bg-gray-50">
      <div className="rounded-2xl bg-purple-200 flex items-center h-12 mb-4">
        <div className="rounded-2xl bg-purple-700 w-14 h-12 flex items-center justify-center text-white font-bold">
          <h1>New</h1>
        </div>
        <h1 className="text-center px-2 md:px-4 text-gray-800 font-bold">SkillSync offers free Courses Soon! Check it out here &gt;</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-3 md:text-5xl text-3xl pt-2 pb-4">
        <h1 className="text-center md:text-left text-black font-black">Upskill &amp; Grab your</h1>
        <h1 className="text-center md:text-left text-purple-700 font-black">Dream Offer</h1>
      </div>
      <h2 className="text-center md:text-xl text-lg pb-6 text-gray-800 font-medium">SkillSync, the go-to place for affordable and quality content</h2>
      <div className="flex flex-row md:flex-row items-center border border-gray-300 p-2 rounded-md lg:mt-4 bg-white">
        <EnvelopeIcon className="w-5 mr-2 text-gray-600"></EnvelopeIcon>
        <input type="text" name="" id="" placeholder="Enter your email here..." className="flex-grow h-9 p-2 rounded-l-md outline-none mb-2 md:mb-0 lg:w-80" />
        <button className="bg-purple-700 h-9 w-20 md:w-20 flex items-center justify-center rounded-r-md cursor-pointer text-white font-semibold focus:outline-none hover:bg-purple-800">
          Sign up
        </button>
      </div>
      <div className="border w-4/5 md:w-3/5 lg:w-4/5 h-72 rounded-xl flex flex-col bg-gray-100 justify-center items-center md:items-start gap-5 px-8 mt-28">
        <div className="flex gap-2 bg-purple-200 rounded-md p-2 h-5 justify-center items-center">
          <VideoCameraIcon className="w-4 text-gray-500"></VideoCameraIcon>
          <p className="text-sm text-gray-700 font-semibold">Tutorial</p>
        </div>
        <h1 className="text-gray-600 text-2xl md:text-4xl lg:text-5xl text-center md:text-left font-black">Explore Our diverse range of courses</h1>
        <h2 className="text-lg md:text-xl text-center md:text-left text-gray-700 font-medium">Discover through detailed tutorials: algorithm analysis, implementation, and optimization. Previews are also available.</h2>
        <div className="flex gap-3 bg-purple-700 rounded-md p-3 cursor-pointer">
          <h3 className="text-white font-semibold">Read more →</h3>
        </div>
      </div>
      <h1 className="text-3xl font-semibold ">FAQs</h1>
      {faq.map((faq, index) => (<Faq key={index} data={faq} />))}
    </div>
  );
}

export default Home;
