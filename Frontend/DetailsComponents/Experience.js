import Image from "next/image"

export default function Experience() {
    const exprecord = [
        {
            date: "Jul-2022 - Present",
            post: "AurumLiv",
            content: "enerating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a sho",
            tags: ["react", "node"]
        },
        {
            date: "Jul-2022 - Present",
            post: "Associate Software Engineer",
            content: "enerating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a sho",
            tags: ["react", "node"]
        },
        {
            date: "Jul-2022 - Present",
            post: "Associate Software Engineer",
            content: "enerating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a sho",
            tags: ["react", "node"]
        },
        {
            date: "Jul-2022 - Present",
            post: "Associate Software Engineer",
            content: "enerating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a sho",
            tags: ["react", "node"]
        }
    ]
    return (<>
        <div className="experience pt-5 mb-10" id="experience">
            {
                exprecord.map((a, i) => <ExperienceCard data={a} />)
            }

            <a
                href={"https://drive.google.com/file/d/1HWG0kbRYHltJLCESucuycVpk-0hM3oht/view?usp=sharing"}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-white font-semibold w-fit px-4 duration-300 flex text-[20px]
                hover:text-purple-400 transition-colors group
                "
            >
                View Full Resume
                {/* <Image className="text-white  w-5 h-5 "
                    src="/Assets/arrow-up-right-lucide.svg"
                    height={300}
                    width={300}
                    color={"#FFFFFF"}
                /> */}
                {/* <div className=""> */}
                <svg
                    className="text-white  transition-all transform  group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-purple-400"
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                {/* </div> */}
            </a>
        </div>
    </>)
};

const ExperienceCard = ({ data }) => {
    return (<>
        <div className="card flex mb-4 hover:bg-[#64585859] rounded-2xl my-4 p-4
        group
         shadow-xl transition-all duration-100 hover:shadow-2xl hover:-translate-y-0 hover:border-2 hover:border-[#6565655a] border-2 border-[#65656500]
        ">
            <div className="left max-w-[35%] min-w-[35%] text-[#7f7d7f] text-center flex justify-start pt-1 group-hover:text-white ">
                {data.date}
            </div>
            <div className="right  max-w-[65%] min-w-[65%]">
                <div className="header font-bold text-[20px] mb-2">
                    {data.post}
                </div>
                <div className="content mb-4 text-[16px] flex justify-start">
                    <div className="mb-auto w-[90%]">
                        {data.content}
                    </div>

                </div>
                <div className="tags grid grid-cols-4 gap-2">
                    {
                        data.tags.map((a) => {
                            return <>
                                <div className="rounded-full bg-[#8585852f] font-semibold text-[14px] text-center py-1 px-2">
                                    {a}
                                </div>
                            </>
                        })
                    }
                </div>
            </div>
        </div>

    </>)
}