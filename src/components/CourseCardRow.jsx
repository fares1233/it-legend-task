import { useState } from "react";
import Note from "../assets/icons/note-01-svgrepo-com.svg";
import Lock from "../assets/icons/lock-3-svgrepo-com.svg";
import FullScreenModal from "./FullScreenModal";
import ExamModal from "./ExamModal";

export default function CourseCardRow({ lesson }) {
    const [showModal, setShowModal] = useState(false);
    const [showExamModal, setShowExamModal] = useState(false);

    const handleClick = () => {
        if (lesson.type === 'file') {
            setShowModal(true);
        } else if (lesson.type === 'quiz') {
            setShowExamModal(true);
        }
    };

    return (
        <>
            <div 
                onClick={handleClick} 
                className="flex justify-between items-center py-4 cursor-pointer hover:bg-zinc-50 transition duration-200 ease-in-out "
            >
                <div className="flex gap-3 items-center ">
                    <img src={Note} alt="note" className="w-6" />
                    <h3 className="font-medium text-md text-ternary ">
                        {lesson.title}
                    </h3>
                </div>
                {lesson.type === "quiz" && (
                    <div className="flex gap-2 flex-wrap items-center justify-end">
                        <p className="bg-question-bg text-question-text py-1 rounded-md px-2 font-medium text-md">
                            {lesson.questions}
                        </p>
                        <p className="bg-time-bg text-time-text py-1 rounded-md px-2 font-medium text-md">
                            {lesson.duration}
                        </p>
                    </div>
                )}
                {lesson.isLocked && lesson.type !== "quiz" && (
                    <img src={Lock} alt="lock" className="w-6" />
                )}
            </div>

            {lesson.type === 'file' && (
                <FullScreenModal 
                    show={showModal} 
                    onClose={() => setShowModal(false)} 
                    title={lesson.title}
                />
            )}

            {lesson.type === 'quiz' && (
                <ExamModal 
                    isOpen={showExamModal} 
                    onClose={() => setShowExamModal(false)} 
                />
            )}
        </>
    );
}
