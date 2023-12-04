import { EnvelopeIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import Faq from "./Faq";
import InsightCard from "./InsightCard";
import ImageSlider from "./ImageSlider";
import { faq } from "../utils/faqData";

const Home = () => {
  return (
    <div className="lg:container lg:mx-auto px-4 md:px-8 lg:px-6 flex items-center justify-center flex-col my-11">
      <div className="rounded-2xl bg-purple-200 flex items-center h-12 mb-4">
        <div className="rounded-2xl bg-purple-700 w-14 h-12 flex items-center justify-center text-white font-bold">
          <h1>New</h1>
        </div>
        <h1 className="text-center px-2 md:px-4 text-gray-800 font-bold">SkillSync offers free Courses Soon! Check it out here &gt;</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-3 md:text-6xl text-3xl pt-2 pb-4">
        <h1 className="text-center md:text-left text-black font-bold">Upskill &amp; Grab your</h1>
        <h1 className="text-center md:text-left text-purple-700 font-black">Dream Offer</h1>
      </div>
      <h2 className="text-center md:text-xl text-lg pb-6 text-gray-500 font-medium">SkillSync, the go-to place for affordable and quality content</h2>
      <div className="flex flex-row md:flex-row items-center border border-gray-300 p-2 rounded-md lg:mt-4 bg-white">
        <EnvelopeIcon className="w-5 mr-2 text-gray-600"></EnvelopeIcon>
        <input type="text" name="" id="" placeholder="Enter your email here..." className="flex-grow h-9 p-2 rounded-l-md outline-none mb-2 md:mb-0 lg:w-80" />
        <button className="bg-purple-700 h-9 w-20 md:w-20 flex items-center justify-center rounded-r-md cursor-pointer text-white font-semibold focus:outline-none hover:bg-purple-800">
          Sign up
        </button>
      </div>
      <div className="w-9/12 flex flex-col justify-center items-center">
        <div className="flex flex-col h-72 w-full bg-gray-100 py-10 gap-2 pl-10 justify-center mt-28 rounded-xl border pr-8">
          <div className="flex gap-2 bg-purple-200 rounded-md p-2 h-5 items-center w-24">
            <VideoCameraIcon className="w-4 text-gray-500"></VideoCameraIcon>
            <p className="text-sm text-gray-700 font-semibold">Tutorial</p>
          </div>
          <h1 className="text-gray-500 text-2xl md:text-4xl lg:text-5xl text-center md:text-left font-bold">Explore Our diverse range of courses</h1>
          <h2 className="text-lg md:text-xl text-center md:text-left text-gray-500 font-medium">Discover through detailed tutorials: algorithm analysis, implementation, and optimization. Previews are also available.</h2>
          <div className="flex gap-3 bg-purple-700 w-36 justify-center rounded-md p-3 cursor-pointer mt-2">
            <h3 className="text-white font-semibold">Read more →</h3>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <InsightCard></InsightCard>
          <InsightCard></InsightCard>
          <InsightCard></InsightCard>
          <InsightCard></InsightCard>
        </div>
      </div>
      <ImageSlider></ImageSlider>
      <h1 className="text-3xl font-semibold select-none my-2 ">FAQs</h1>
      {faq.map((faq, index) => (<Faq key={index} data={faq} />))}
    </div>
  );
}

export default Home;
