import { VideoCameraIcon } from "@heroicons/react/24/solid"

const InsightCard = () => {
    return (
        <div className="border w-4/5 md:w-3/5 lg:w-full h-72 rounded-xl flex flex-col bg-gray-100 justify-center items-center md:items-start gap-4 px-8">
            <div className="flex gap-2 bg-green-200 rounded-md p-2 h-5 justify-center items-center">
                <VideoCameraIcon className="w-3 text-gray-500"></VideoCameraIcon>
                <p className="text-sm text-green-700 font-semibold">Tutorial</p>
            </div>
            <h1 className="text-gray-700 text-2xl md:text-4xl lg:text-4xl text-center md:text-left font-semibold">Top class quality video lectures</h1>
            <h2 className="text-lg md:text-xl text-center md:text-left text-gray-500 font-medium">The live and recorded video lectures with the best quality are available 24x7</h2>
            <h3 className="text-purple-700 cursor-pointer font-semibold">Read more →</h3>
        </div>
    )
}

export default InsightCard