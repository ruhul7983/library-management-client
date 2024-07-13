import { SiLivechat } from "react-icons/si";
import { GiOpenBook } from "react-icons/gi";
import { FaRegFilePdf } from "react-icons/fa";

const Feature = () => {
    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl py-3 text-center font-bold">Our Features</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2 mx-3">
                <div className="text-black px-3 py-6 pb-8 rounded bg-[#fff7f1] flex flex-col hover:bg-[#ffe6d9] transition-all">
                    <SiLivechat className="bg-[#ffe6d9] p-2 text-5xl rounded-full"> </SiLivechat>
                    <h2 className="text-xl font-bold">Live Chat</h2>
                    <p>Instant support for library inquiries and assistance.</p>
                </div>
                <div className="text-black px-3 py-6 pb-8 rounded bg-[#fff7f1] flex flex-col hover:bg-[#ffe6d9] transition-all ">
                    <GiOpenBook className="bg-[#ffe6d9] p-2 text-5xl rounded-full"> </GiOpenBook >
                    <h2 className="text-xl font-bold">Borrow Books</h2>
                    <p>Reserve and borrow books effortlessly online.</p>
                </div>
                <div className="text-black  px-3 py-6 pb-8 rounded bg-[#fff7f1] flex flex-col hover:bg-[#ffe6d9] transition-all">
                    <FaRegFilePdf className="bg-[#ffe6d9] p-2 text-5xl rounded-full"> </FaRegFilePdf >
                    <h2 className="text-xl font-bold">Online Books</h2>
                    <p>Access e-books and audiobooks from anywhere.</p>
                </div>
            </div>
        </div>
    );
};

export default Feature;