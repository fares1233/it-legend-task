import { useState } from "react";
import CourseCardRow from "./CourseCardRow";

export default function CourseCard({ week }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col shadow-card py-6 px-6 my-6 md:my-15">
            <div className="py-4 flex justify-between items-start">
                <div>
                    <h3 className="font-medium text-xl text-primary mb-2">
                        {week?.weekTitle}
                    </h3>
                    <p className="font-normal text-md text-secondary">
                        {week?.weekSubtitle}
                    </p>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-4xl text-primary font-light leading-none flex items-center justify-center w-10 h-10"
                >
                    {isOpen ? "−" : "+"}
                </button>
            </div>
            <div
                className={`flex-col border-t border-border divide-y divide-border ${isOpen ? "flex" : "hidden"} md:flex`}
            >
                {week?.lessons?.map((lesson) => (
                    <CourseCardRow key={lesson.id} lesson={lesson} />
                ))}
            </div>
        </div>
    );
}
