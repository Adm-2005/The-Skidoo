export default function SubSection({ subsection }) {
    return (
        <div className="flex flex-col gap-6 p-4">
            <div className="flex flex-col md:flex-row max-w-3xl w-full h-full items-center md:items-start justify-center md:justify-between gap-6">
                {subsection.media.link !== "" && (
                    <img 
                        className="w-[280px] h-[280px] md:w-[300px] md:h-[300px] rounded-2xl object-cover" 
                        src={subsection.media.link} 
                        alt={subsection.name} 
                    />
                )}
                <div className="flex flex-col gap-4">
                    <h1 className="text-xl px-4 py-2 border-y border-gray-300 font-itim">
                        {subsection.name}
                    </h1>
                    <p className="text-base px-4 text-gray-700">
                        {subsection.text}
                    </p>
                </div>
            </div>
        </div>
    );
}
