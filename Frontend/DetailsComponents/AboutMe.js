import React from "react"
export default function AboutMe() {

    return (
        <>
            <div className="group relative p-6 rounded-lg border border-transparent hover:border-white transition-all duration-300">
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.5)] transition-all duration-500 pointer-events-none"></div>
                <div className=" h-[75vh] justify-center flex flex-col" id="about">
                    <p className="mb-4">
                        I’m a MERN developer passionate about building performant, accessible, and scalable web applications. I thrive at the intersection of design and development, crafting seamless user experiences that balance aesthetics with efficiency. With a strong foundation in JavaScript, TypeScript, and modern frontend frameworks, I focus on delivering clean, maintainable, and high-quality code.
                    </p>
                    <p className="mb-4">
                        Beyond coding, I enjoy diving into emerging technologies, analyzing chess strategies, and exploring ways to enhance website performance. When I’m not optimizing code, you can find me playing chess, experimenting with new tech stacks, or strategizing my next e-commerce project.
                    </p>
                    <p className="mb-4">

                        Let’s connect and build something amazing together!
                    </p>
                </div>
            </div>

        </>)
}