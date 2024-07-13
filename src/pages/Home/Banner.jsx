import Navbar from "../Shared/Navbar/Navbar";
import girl from "../../assets/girl.png";

const Banner = () => {
    return (
        <div className="bg-[#fff0e7]">
            <Navbar></Navbar>
            <div className="flex text-center md:text-left flex-col-reverse md:flex-row max-w-6xl mx-auto justify-between items-center">
                <div className="text-black space-y-7">
                    <h1 className="text-5xl md:text-7xl font-semibold">
                        A Classical Library <br /> for your Future
                    </h1>
                    <p>We prepare you to engage in the world that is and to <br /> help bring about a world that ought to be</p>
                    <button className="btn rounded bg-[#ff7500] text-black border-none hover:bg-[#ffd7c3] ">Get Stated</button>
                </div>
                <div className="">
                    <img className="w-5/6" src={girl} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;