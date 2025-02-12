import { useState, useEffect } from "react";
import Profile from "./Profile";
import Details from "./Details";
export default function HomeLayout() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);
    useEffect(()=>{console.log("page loaded");})
    return (<>
        <div className="relative bg-[#0f172a] min-h-screen min-w-[100vw] text-white lg:flex justify-center overflow-hidden">
            {/* Glow Effect */}
            <div
                className="absolute w-72 h-72 bg-[#696a6c] rounded-full opacity-30 blur-3xl pointer-events-none transition-transform duration-100"
                style={{
                    left: mousePos.x - 150,
                    top: mousePos.y - 150,
                }}
            ></div>

            {/* Content */}
            <Profile/>
            <Details/>

        </div>
    </>)
}