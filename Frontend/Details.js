import AboutMe from "./DetailsComponents/AboutMe";
import Experience from "./DetailsComponents/Experience";

export default function Details() {
    return (<>
        <div className="lg:min-w-[50%] h-[2000px]s  pt-10 px-10 ">
            <AboutMe />
            <Experience />
        </div>
    </>
    )
}