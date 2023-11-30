import { useState } from "react";

const Faq = ({ data }) => {
  const { query, response } = data;
  const [sign, setSign] = useState(false);

  return (
    <div className="w-3/6 rounded-lg overflow-hidden border my-2 ">
      <h1></h1>
      <div className="h-16 flex justify-between items-center px-4 text-black cursor-pointer" onClick={() => setSign((btn) => !btn)}>
        <h3 className="text-lg font-semibold select-none">{query}</h3>
        <h3 className="text-xl font-bold select-none">{sign ? "-" : "+"}</h3>
      </div>
      {sign && <div className="h-16 bg-gray-300 flex items-center px-4 ">
        <p className="text-md select-none">{response}</p>
      </div>}
    </div>
  );
}

export default Faq;
