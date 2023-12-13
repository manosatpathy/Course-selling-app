import { useState } from "react";
import { Collapse } from "react-collapse";

interface FaqProps {
  data: {
    query: string;
    response: string;
  }
}

const Faq: React.FC<FaqProps> = ({ data }) => {
  const { query, response } = data;
  const [open, setOpen] = useState(false);

  return (
    <div className="w-3/6 rounded-lg overflow-hidden border my-2">
      <div
        className="h-16 flex justify-between items-center px-4 text-black cursor-pointer"
        onClick={() => setOpen((btn) => !btn)}
      >
        <h3 className="text-lg font-semibold select-none">{query}</h3>
        <h3 className="text-xl font-bold select-none">{open ? "-" : "+"}</h3>
      </div>
      <Collapse isOpened={open}>
        <div className="max-h-16 bg-gray-300 flex items-center px-4">
          <p className="text-md select-none">{response}</p>
        </div>
      </Collapse>
    </div>
  );
};

export default Faq;
