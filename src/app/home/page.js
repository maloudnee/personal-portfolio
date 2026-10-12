"use client";

export default function Home() {
    return(

        <div id="home" className="relative w-full h-screen overflow-hidden bg-[#120F0D] flex flex-col justify-center items-center px-4">

            <div
                className="absolute inset-0 w-full h-full opacity-40 bg-repeat-x bg-contain pointer-events-none
                bg-[url('/images/home-background.png')]
                bg-center
                bg-cover bg-no-repeat
                xl:bg-contain xl:bg-repeat-x
                animate-film"
            />

            <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
                <h1 className="font-expanded text-3xl md:text-4xl lg:text-6xl text-white text-center uppercase tracking-wider">
                    Maloudnee Marcier
                </h1>

                <p className="font-nunito-sans text-sm md:text-base lg:text-lg text-white text-center whitespace-pre">
                    / ma • lood • knee    mar • see • air /
                </p>

                <p className="font-be-vietnam-pro text-xs md:text-sm lg:text-base text-white text-center mt-4">
                    CS undergrad & researcher. Currently figuring out what I'm going to do post-grad 🦦.  
                </p> 
            </div>
                
        </div>
    );
}