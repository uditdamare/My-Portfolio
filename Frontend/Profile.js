import Image from "next/image";

// import lc from ''
export default function Profile() {
    function scrollToDiv(tt) {
        if (document.getElementById(tt))    
            document.getElementById(tt).scrollIntoView({ behavior: 'smooth' });
    }
    return (<>
        <div className="lg:min-w-[50%] text-white">
            <div className="p-[40px]">
                <h1 className="text-[48px] font-bold mb-3">Udit Damare</h1>
                <h3 className="text-[20px] mb-3">Full Stack Developer</h3>
                <p className="text-[16px] mb-3 max-w-[80%]">Experienced MERN Stack Developer with 2 years of expertise in building scalable web applications, optimizing SEO and Core Web Vitals, and developing microservices using Spring Boot for backend solutions. </p>
                <nav class="nav hidden lg:block" aria-label="In-page jump links">
                    <ul class="mt-16 w-max">
                        <li className="" onClick={() => { scrollToDiv('about') }}>
                            <a class="group flex items-center py-3" >
                                <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16  group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                                </span>
                                <span class="nav-text text-xs font-bold uppercase tracking-widest text-white group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                    About
                                </span>
                            </a>
                        </li>
                        <li onClick={() => { scrollToDiv('experience') }}>
                            <a class="group flex items-center py-3" >
                                <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">

                                </span>
                                <span class="nav-text text-xs font-bold uppercase tracking-widest text-white group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                    Experience

                                </span>
                            </a>
                        </li>
                        <li>
                            <a class="group flex items-center py-3" >
                                <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                                </span><span class="nav-text text-xs font-bold uppercase tracking-widest text-white group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                    Projects

                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="connectMe secton">
                    <ul class="ml-1 mt-8 flex items-center" aria-label="Social media">
                        <li class="mr-5 shrink-0 text-xs">
                            <a class="block hover:text-slate-200" href="https://www.linkedin.com/in/udit-damare/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
                                <span class="sr-only">
                                    LinkedIn
                                </span>
                                <Image className=" text-white h-7 w-7" src={"/Assets/linkedin.png"} alt="leetcode"
                                    width={50}
                                    height={50}
                                />
                            </a>
                        </li>
                        <li class="mr-5 shrink-0 text-xs">
                            <a class="block hover:text-slate-200" href="https://github.com/uditdamare" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                                <span class="sr-only">
                                    GitHub
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6" aria-hidden="true">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                    ></path>
                                </svg>
                            </a>
                        </li>

                        <li class="mr-5 shrink-0 text-xs">
                            <a class="block hover:text-slate-200" href="https://leetcode.com/u/uditdamare01/" target="_blank" rel="noreferrer noopener" aria-label="LeetCode (opens in a new tab)" title="LeetCode">
                                <span class="sr-only">
                                    Leetcode
                                </span>
                                <Image className=" text-white h-7 w-7" src={"/Assets/lc.svg"} alt="leetcode"
                                    width={50}
                                    height={50}
                                />
                            </a>
                        </li>
                    </ul>

                </div>


            </div>

        </div>
    </>)
}