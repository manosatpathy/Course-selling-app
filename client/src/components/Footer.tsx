import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="w-12/12 flex justify-center border bg-gray-100">
            <div className="flex flex-col w-9/12">
                <div className="flex justify-between border-b-2 py-8">
                    <div className="flex items-center h-10 gap-3 font-bold text-2xl text-gray-600">
                        <CodeBracketIcon className="h-10 w-10 text-violet-700" />
                        <Link to="/"> <h2 className="cursor-pointer">SkillSync</h2></Link>
                    </div>
                    <div className="grid grid-cols-3 gap-3 font-medium text-gray-600">
                        <h3 className="pb-4">RESOURCES</h3>
                        <h3>FOLLOW US</h3>
                        <h3>LEGAL</h3>
                        <p className="font-serif">SkillSync</p>
                        <p className="font-serif">Tailwind CSS</p>
                        <p className="font-serif">Github</p>
                        <p className="font-serif">Discord</p>
                        <p className="font-serif">Privacy Policy</p>
                        <p className="font-serif">Terms & Conditions</p>
                    </div>
                </div>
                <p className="mt-1 py-8 text-sm text-gray-500 font-mono">
                    ©️ 2023 SkillSync™️. All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
