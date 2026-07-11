import courseData from "../data/CourseData";
import CourseCard from "./CourseCard";
import ProgressBar from "./ProgressBar";

export default function RightSide() {
    return (
        <section id="curriculum-section" className="scroll-mt-[320px] md:scroll-mt-0">
            <h2 className="font-medium text-2xl md:text-4xl text-primary mt-5">
                Topics for This Course
            </h2>
            <ProgressBar progress={courseData.overallProgressPercent} />
            {courseData.weeks.map((week) => (
                <CourseCard key={week.id} week={week} />
            ))}
        </section>
    );
}
