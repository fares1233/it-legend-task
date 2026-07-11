import CourseCardRow from "./CourseCardRow";

export default function CourseCard({ week }) {
    return (
        <div className="flex flex-col divide-y divide-border shadow-card py-6 px-6 my-15  ">
            <div className="py-4 ">
                <h3 className="font-medium text-xl text-primary mb-2">
                    {week?.weekTitle}
                </h3>
                <p className="font-normal text-md text-secondary">
                    {week?.weekSubtitle}
                </p>
            </div>
            {week?.lessons?.map((lesson) => (
                <CourseCardRow key={lesson.id} lesson={lesson} />
            ))}
        </div>
    );
}
