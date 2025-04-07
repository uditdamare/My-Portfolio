import AboutMe from "./DetailsComponents/AboutMe";
import Experience from "./DetailsComponents/Experience";

export default function Details() {
    return (<>
        <div className="lg:min-w-[50%] h-[2000px]s  pt-10 px-10 ">
            <div className="group relative p-6 rounded-lg border border-transparent hover:border-white transition-all duration-300">
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.5)] transition-all duration-500 pointer-events-none"></div>
            <AboutMe />
            </div>

            <Experience />
        </div>
    </>
    )
}