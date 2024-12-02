
const About = () => {
    return (
        <>
            <div className="container mx-auto px-3 md:px-5 relative">
                <div className="absolute top-0 -left-2 hidden lg:block" />
                <img src="./assets/Vector.png" alt="">
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-5 pt-10">
                <div className="flex-1 space-y-6">
                    <div className="flex flex-col justify-center items-center lg:items-start space-y-2">
                        <div className="flex">
                            <button
                                className="px-2 py-1 bg-white rounded-full font-semibold hover:bg-gray-200 duration-200 active:scale-90 transition-all">
                                <i className="fa-solid fa-arrow-right mr-1"></i> About Us</button>
                        </div>
                        <h1 className="text-xl md:text-4xl font-bold lg:w-2/3">We design thoughtful, liveable spaces
                        </h1>
                        <p className="text-xs md:text-sm lg:text-lg lg:w-11/12">The barn house captivates with its blend
                            of rustic charm and
                            modern sophistication, featuring weathered wood, sleek metal accents.</p>
                    </div>
                    <div className="flex flex-col md:flex-row lg:flex-col gap-6">
                        <div
                            className="bg-white p-6 lg:w-5/6 rounded-lg flex items-start lg:items-center gap-5 hover:-translate-y-1 transition-all">
                            <img src="./assets/commercial.png" alt="" />
                            <div>
                                <h1 className="text-lg md:text-xl font-bold">Commercial</h1>
                                <p className="w-full md:w-4/6 text-xs md:text-sm">The barn house captivates with its
                                    blend of rustic charm and modern.</p>
                            </div>
                        </div>
                        <div
                            className="bg-white p-6 lg:w-5/6 rounded-lg flex items-start lg:items-center gap-5 hover:-translate-y-1 transition-all">
                            <img src="./assets/commercial.png" alt="">
                                <div>
                                    <h1 className="text-lg md:text-xl font-bold">Commercial</h1>
                                    <p className="w-full md:w-4/6 text-xs md:text-sm">The barn house captivates with its
                                        blend of rustic charm and modern.</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 w-full overflow-hidden rounded-xl">
                    <img className="w-full md:h-[500px] bg-contain hover:scale-105 transition-all"
                        src="./assets/Rectangle.png" alt="" />
                </div>
            </div>
            <div
                className="bg-white p-8 my-5 md:my-8 lg:my-12 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-around items-center gap-6">
                <div className="text-center space-y-2">
                    <i className="fa-regular fa-message text-lg md:text-xl lg:text-3xl"></i>
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">235+</h1>
                    <p className="text-sm md:text-lg text-[#737373] font-semibold">Happy Client Review</p>
                </div>
                <div className="text-center space-y-2">
                    <i className="fa-solid fa-igloo text-lg md:text-xl lg:text-3xl"></i>
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">50+</h1>
                    <p className="text-sm md:text-lg text-[#737373] font-semibold">Work Departments</p>
                </div>
                <div className="text-center space-y-2">
                    <i className="fa-solid fa-users text-lg md:text-xl lg:text-3xl"></i>
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">23K+</h1>
                    <p className="text-sm md:text-lg text-[#737373] font-semibold">Our Happy Client</p>
                </div>
                <div className="text-center space-y-2">
                    <i className="fa-solid fa-user-astronaut text-lg md:text-xl lg:text-3xl"></i>
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">305+</h1>
                    <p className="text-sm md:text-lg text-[#737373] font-semibold">Staff Members</p>
                </div>
            </div>
            <div className="container mx-auto px-3 md:px-5 my-5 md:my-8 lg:my-10">
                <div className="space-y-2 md:space-y-4 lg:space-y-5 text-center">
                    <div className="flex justify-center">
                        <button className="px-2 py-1 bg-white rounded-full font-semibold hover:bg-gray-200 duration-200"> <i
                            className="fa-solid fa-arrow-right mr-1"></i> How We Works</button>
                    </div>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-black">Our Works Process</h1>
                    <p className="text-xs md:text-sm lg:text-lg w-full md:w-11/12 lg:w-3/5 mx-auto">The barn house
                        captivates with its blend of rustic charm and modern sophistication, featuring weathered wood,
                        sleek metal accents.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-5 lg:gap-8 my-5 lg:my-8">
                    <div className="p-6 rounded-lg space-y-5 bg-[#E7C1D3]">
                        <img src="./assets/concept.png" alt="">
                            <h3 className="text-xl md:text-2xl font-bold">Concept</h3>
                            <p className="text-xs md:text-sm w-11/12">The barn house captivates with its blend of rustic charm
                                and modern.</p>
                    </div>
                    <div className="p-6 rounded-lg space-y-5 bg-[#EFDA6E]">
                        <img src="./assets/flow-chart.png" alt="">
                            <h3 className="text-xl md:text-2xl font-bold">Design Process</h3>
                            <p className="text-xs md:text-sm w-11/12">The barn house captivates with its blend of rustic charm
                                and modern.</p>
                    </div>
                    <div className="p-6 rounded-lg space-y-5 bg-[#A4DAC3]">
                        <img src="./assets/vision.png" alt="">
                            <h3 className="text-xl md:text-2xl font-bold">Supervision</h3>
                            <p className="text-xs md:text-sm w-11/12">The barn house captivates with its blend of rustic charm
                                and modern.</p>
                    </div>
                    <div className="p-6 rounded-lg space-y-5 bg-[#77AAEA]">
                        <img src="./assets/budget-planning.png" alt="" />
                        <h3 className="text-xl md:text-2xl font-bold">Budget Planning</h3>
                        <p className="text-xs md:text-sm w-11/12">The barn house captivates with its blend of rustic charm
                            and modern.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
 
export default About