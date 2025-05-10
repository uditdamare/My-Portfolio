import AboutMe from "./DetailsComponents/AboutMe";
import Experience from "./DetailsComponents/Experience";
import LeetCode from "./DetailsComponents/LeetCode";
import Projects from "./DetailsComponents/Projects";

export default function Details() {
    return (<>
        <div className="lg:min-w-[50%] md:mt-10 md:px-10 ">
            <AboutMe />
            <Experience />
            <LeetCode/>
            <Projects/>
            
        </div>
    </>
    )
}