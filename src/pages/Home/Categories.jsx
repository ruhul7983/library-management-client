import book from '../../assets/book.png';

const Categories = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl py-3 text-center font-bold">Browse By Genre</h1>

            <div className='grid grid-cols-1 md:grid-cols-7 gap-3 '>
                <div className="w-32 border h-32 flex flex-col justify-center rounded-full hover:border-blue-300 transition-all mx-auto md:mx-0">
                    <img className="w-28 mx-auto" src={book} alt="" />
                    <h1 className="text-2xl text-center font-semibold">Classic</h1>
                </div>
                <div className="w-32 border h-32 flex flex-col justify-center rounded-full hover:border-blue-300 transition-all">
                    <img className="w-28 mx-auto" src={book} alt="" />
                    <h1 className="text-2xl text-center font-semibold">Classic</h1>
                </div>
                <div className="w-32 border h-32 flex flex-col justify-center rounded-full hover:border-blue-300 transition-all">
                    <img className="w-28 mx-auto" src={book} alt="" />
                    <h1 className="text-2xl text-center font-semibold">Classic</h1>
                </div>
                <div className="w-32 border h-32 flex flex-col justify-center rounded-full hover:border-blue-300 transition-all">
                    <img className="w-28 mx-auto" src={book} alt="" />
                    <h1 className="text-2xl text-center font-semibold">Classic</h1>
                </div>
                <div className="w-32 border h-32 flex flex-col justify-center rounded-full hover:border-blue-300 transition-all">
                    <img className="w-28 mx-auto" src={book} alt="" />
                    <h1 className="text-2xl text-center font-semibold">Classic</h1>
                </div>
                <div className="w-32 border h-32 flex flex-col justify-center rounded-full hover:border-blue-300 transition-all">
                    <img className="w-28 mx-auto" src={book} alt="" />
                    <h1 className="text-2xl text-center font-semibold">Classic</h1>
                </div>
                <div className="w-32 border h-32 flex flex-col justify-center rounded-full hover:border-blue-300 transition-all">
                    <img className="w-28 mx-auto" src={book} alt="" />
                    <h1 className="text-2xl text-center font-semibold">Classic</h1>
                </div>
            </div>

        </div>
    );
};

export default Categories;