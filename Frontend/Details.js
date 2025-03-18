import AboutMe from "./DetailsComponents/AboutMe";
import Experience from "./DetailsComponents/Experience";

export default function Details() {
    return (<>
        <div className="lg:min-w-[50%] h-[2000px]  pt-10 px-10 border-2 border-red-500">
            <AboutMe />
            <Experience/>
        </div>
    </>)
}