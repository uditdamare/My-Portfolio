import { useState, useEffect, useRef } from "react";
import Profile from "./Profile";
import Details from "./Details";
export default function HomeLayout() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY + window.scrollY});
        };

        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);
    useEffect(() => { console.log("page loaded"); });



    return (<>
        <div className="relative bg-[#170724] text-white
         md:flex md:justify-end
         md:overflow-clip
         ">
            {/* Glow Effect */}
            <div
                className="absolute w-72 h-72 bg-[#bd62fe49] rounded-full opacity-30 blur-3xl pointer-events-none transition-transform duration-100"
                style={{
                    left: mousePos.x - 150,
                    top: mousePos.y - 150,
                }}
            ></div>

            {/* Content */}
            <div className="hidden md:block h-screen top-0 left-0 md:w-1/2  sticky
            lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24
            ">
                <Profile />
            </div>
                <div className="md:hidden border border-red-400">
                <Profile />

                </div>
            {/* <div className="" > */}
            <div className="md:w-1/2">
                <Details />
                {/* </div> */}
            </div>

        </div>
    </>)
}