
const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] py-10 md:py-20 min-h-[300px] flex justify-center items-center">
    <div className="container mx-auto">
        <div className="space-y-3">
            <div className="flex items-center justify-center gap-2 text-white">
                <div className="flex items-center justify-center px-2 py-1 md:px-4 md:py-2 bg-green-300 rounded-full">
                    <i className="fa-solid fa-arrow-right text-xs md:text-sm lg:text-lg -rotate-45 text-black"></i>
                </div>
                <a href="#" className="text-xl md:text-2xl lg:text-3xl font-bold">InterioNest</a>
            </div>
            <p className="text-xs md:text-sm lg:text-lg w-full md:w-8/12 lg:w-1/2 mx-auto text-center text-[#737373]">
                The barn house captivates with its blend of rustic charm and modern sophistication, featuring
                weathered wood, sleek metal accents.</p>
            <div
                className="flex items-center justify-center gap-5 md:gap-10 lg:gap-20 opacity-90 text-xs md:text-sm lg:text-lg text-[#E9E9E9] py-5">
                <a className="font-semibold cursor-pointer active:scale-90 transition-all">Home</a>
                <a className="cursor-pointer active:scale-90 hover:text-emerald-600 transition-all">Services</a>
                <a className="cursor-pointer active:scale-90 hover:text-emerald-600 transition-all">Portfolio</a>
                <a className="cursor-pointer active:scale-90 hover:text-emerald-600 transition-all">Blogs</a>
                <a className="cursor-pointer active:scale-90 hover:text-emerald-600 transition-all">Contact Us</a>
            </div>
            <button
                className="text-xs md:text-sm lg:text-lg font-bold px-2 md:px-3 lg:px-5 py-2 rounded-full bg-green-300 flex items-center gap-1 mx-auto active:scale-90 transition-all">Book
                Consult
                <div
                    className="flex items-center justify-center px-2 py-1 bg-black text-white outline-none rounded-full ">
                    <i className="fa-solid fa-arrow-right text-sm -rotate-45"></i>
                </div>
            </button>
        </div>

    </div>
</footer>
  )
}

export default Footer