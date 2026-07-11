import MaterialRow from "./MaterialRow";

import Duration from "../assets/icons/time-svgrepo-com.svg";
import Lessons from "../assets/icons/books-svgrepo-com.svg";
import Enrolled from "../assets/icons/study-2-svgrepo-com.svg";
import Language from "../assets/icons/language-svgrepo-com.svg";
import Instructor from "../assets/icons/instructor-lecture-with-sceen-projection-tool-svgrepo-com.svg";

const materials = [
    {
        icon: Instructor,
        title: "Instructor:",
        description: "John Doe",
    },
    {
        icon: Duration,
        title: "Duration:",
        description: "3 weeks",
    },
    {
        icon: Lessons,
        title: "Lessons:",
        description: "8",
    },
    {
        icon: Enrolled,
        title: "Enrolled:",
        description: "65 students",
    },
    {
        icon: Language,
        title: "Language:",
        description: "English",
    },
];

export default function CourseMaterial() {
    return (
        <section className="text-secondary">
            <h2 className="font-medium text-2xl md:text-4xl mb-6 text-primary">
                Course Materials
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] py-4 px-8 shadow-card">
                {materials?.map((material, index) => (
                    <MaterialRow
                        key={index}
                        material={material}
                    />
                ))}
            </div>
        </section>
    );
}
