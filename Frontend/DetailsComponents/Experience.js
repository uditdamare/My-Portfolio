export default function Experience() {
    const exprecord = [
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
        },
        {
            date: "Jul-2022 - Present",
            post: "Associate Software Engineer",
            content: "enerating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a sho",
            tags: ["react", "node"]
        }
    ]
    return (<>
        <div className="experience">
            {
                exprecord.map((a, i) => <ExperienceCard data={a} />)
            }
        </div>
    </>)
};

const ExperienceCard = ({ data }) => {
    return (<>
        <div className="card flex mb-4">
            <div className="left max-w-[35%] min-w-[35%] text-[#7f7d7f] text-center flex justify-center pt-1">
                {data.date}
            </div>
            <div className="right  max-w-[65%] min-w-[65%]">
                <div className="header font-bold text-[20px] mb-2">
                    {data.post}
                </div>
                <div className="content mb-4">

                {data.content}
                </div>
                <div className="tags grid grid-cols-4 gap-2">
                    {
                        data.tags.map((a)=>{
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