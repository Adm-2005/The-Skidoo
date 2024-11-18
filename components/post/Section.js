import SubSection from "./SubSection"

export default function Section ({ section }) {
    return (
        <div className="flex flex-col max-w-3xl w-full h-full my-6 mx-auto gap-3">
            <h1 className="font-itim text-3xl text-center">{section.name}</h1>

            <div className="">
                {section.media_present && (
                    section.section_media.map((m, index) => (
                        <img key={index} src={m.link}></img>
                    ))
                )}
            </div>
            <p className="text-base px-4 text-gray-700">{section.text}</p>

            {section.subsection_present && (
                section.subsections.map((subsection, index) => (
                    <SubSection key={index} subsection={subsection} />
                ))
            )}

            <hr className="w-full"></hr>
        </div>
    )
}