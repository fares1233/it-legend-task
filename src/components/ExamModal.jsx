import { useState, useEffect, useCallback } from "react";
import BaseModal from "./BaseModal";

const examQuestions = [
    {
        number: 1,
        text: "Among the following states of India, which one has the oldest rock formations in the country?",
        options: [
            { id: "A", text: "Assam" },
            { id: "B", text: "Bihar" },
            { id: "C", text: "Karnataka" },
            { id: "D", text: "Uttar Pradesh" },
        ],
    },
    {
        number: 2,
        text: "Which data structure uses LIFO (Last In, First Out) principle?",
        options: [
            { id: "A", text: "Queue" },
            { id: "B", text: "Stack" },
            { id: "C", text: "Array" },
            { id: "D", text: "Linked List" },
        ],
    },
    {
        number: 3,
        text: "What does HTML stand for?",
        options: [
            { id: "A", text: "Hyper Text Markup Language" },
            { id: "B", text: "High Tech Modern Language" },
            { id: "C", text: "Hyper Transfer Markup Language" },
            { id: "D", text: "Home Tool Markup Language" },
        ],
    },
    {
        number: 4,
        text: "Which CSS property is used to change the text color?",
        options: [
            { id: "A", text: "font-color" },
            { id: "B", text: "text-color" },
            { id: "C", text: "color" },
            { id: "D", text: "foreground-color" },
        ],
    },
    {
        number: 5,
        text: "Which JavaScript method is used to access an HTML element by its ID?",
        options: [
            { id: "A", text: "getElementById()" },
            { id: "B", text: "getElement()" },
            { id: "C", text: "querySelector()" },
            { id: "D", text: "findElementById()" },
        ],
    },
];

const EXAM_DURATION_SECONDS = 10 * 60;

export default function ExamModal({ isOpen, onClose }) {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(EXAM_DURATION_SECONDS);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setActiveQuestion(0);
            setAnswers({});
            setTimeLeft(EXAM_DURATION_SECONDS);
            setIsSubmitted(false);
        }
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen || isSubmitted) return;

        if (timeLeft <= 0) {
            setIsSubmitted(true);
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [isOpen, isSubmitted, timeLeft]);

    const formatTime = useCallback((seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }, []);

    const handleSelectOption = (questionIndex, optionId) => {
        if (isSubmitted) return;
        setAnswers((prev) => ({ ...prev, [questionIndex]: optionId }));
    };

    const handleNext = () => {
        if (activeQuestion < examQuestions.length - 1) {
            setActiveQuestion((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (activeQuestion > 0) {
            setActiveQuestion((prev) => prev - 1);
        }
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    const answeredCount = Object.keys(answers).length;
    const currentQuestion = examQuestions[activeQuestion];
    const isLastQuestion = activeQuestion === examQuestions.length - 1;
    const isFirstQuestion = activeQuestion === 0;
    const isTimeLow = timeLeft <= 60;

    if (!isOpen) return null;

    const timerElement = (
        <div
            className={`flex items-center gap-1 px-4 py-1.5 rounded-xl font-bold text-sm transition-colors duration-300
  ${
      isTimeLow
          ? "bg-red-500 text-white shadow-[0_4px_12px_rgba(239,68,68,0.4)] animate-pulse"
          : "bg-[#ffd700] text-[#3b5998] shadow-[0_4px_12px_rgba(255,215,0,0.3)]"
  }`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-4 h-4"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
            </svg>
            <span>{formatTime(timeLeft)}</span>
        </div>
    );

    return (
        <BaseModal 
            isOpen={isOpen} 
            onClose={onClose}
            containerClassName="max-w-[420px] bg-[#3b5998] pb-3"
            closeButtonClass="text-white"
            headerContent={timerElement}
        >
            <div className="flex justify-center gap-2.5 px-6 mb-6">
                    {examQuestions.map((_, idx) => {
                        const isActive = activeQuestion === idx;
                        const isAnswered = answers[idx] !== undefined;
                        return (
                            <button
                                key={idx}
                                onClick={() => setActiveQuestion(idx)}
                                className={`w-10 h-10 rounded-full border text-sm font-medium transition-all duration-200
                  ${
                      isActive
                          ? "bg-white text-[#3b5998] border-white font-semibold shadow-md scale-105"
                          : isAnswered
                            ? "bg-green-400 text-white border-green-400"
                            : "bg-transparent text-white border-white/40 hover:border-white"
                  }`}
                            >
                                {idx + 1}
                            </button>
                        );
                    })}
                </div>

                <div className="mx-4 bg-white rounded-[24px] p-6 flex-1 shadow-inner">
                    {isSubmitted ? (
                        <div className="text-center py-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2.5}
                                    stroke="currentColor"
                                    className="w-8 h-8 text-green-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m4.5 12.75 6 6 9-13.5"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                Exam Submitted!
                            </h3>
                            <p className="text-sm text-gray-500 mb-4">
                                You answered {answeredCount} out of{" "}
                                {examQuestions.length} questions
                            </p>
                            <p className="text-xs text-gray-400">
                                Time remaining: {formatTime(timeLeft)}
                            </p>
                            <button
                                onClick={onClose}
                                className="mt-6 px-6 py-2.5 bg-[#3b5998] text-white rounded-xl font-semibold text-sm hover:bg-[#2d4373] transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="text-[#2c3e50] mb-6 font-sans">
                                <span className="block text-xl font-bold mb-2">
                                    {currentQuestion.number}.
                                </span>
                                <p className="text-sm font-semibold leading-relaxed text-gray-800">
                                    {currentQuestion.text}
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                {currentQuestion.options.map((option) => {
                                    const isSelected =
                                        answers[activeQuestion] === option.id;
                                    return (
                                        <div
                                            key={option.id}
                                            onClick={() =>
                                                handleSelectOption(
                                                    activeQuestion,
                                                    option.id,
                                                )
                                            }
                                            className={`flex items-center border rounded-xl overflow-hidden cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md
                        ${
                            isSelected
                                ? "bg-[#5c7cfa] border-[#5c7cfa] text-white"
                                : "bg-white border-gray-100 text-gray-700"
                        }`}
                                        >
                                            <div
                                                className={`p-4 flex items-center justify-center border-r 
                          ${isSelected ? "border-white/20 bg-white/10" : "border-gray-100 bg-gray-50/50"}`}
                                            >
                                                <div
                                                    className={`w-4 h-4 rounded flex items-center justify-center border transition-colors
                            ${isSelected ? "border-white bg-white" : "border-gray-300 bg-white"}`}
                                                >
                                                    {isSelected && (
                                                        <div className="w-1.5 h-1.5 rounded-sm bg-[#5c7cfa]" />
                                                    )}
                                                </div>
                                            </div>
                                            <div className="px-4 py-3 text-xs sm:text-sm font-medium select-none">
                                                {option.text}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                                <button
                                    onClick={handlePrev}
                                    disabled={isFirstQuestion}
                                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors
                    ${
                        isFirstQuestion
                            ? "text-gray-300 cursor-not-allowed"
                            : "text-[#3b5998] hover:bg-gray-50"
                    }`}
                                >
                                    ← Previous
                                </button>

                                {isLastQuestion ? (
                                    <button
                                        onClick={handleSubmit}
                                        className="px-5 py-2 bg-green-500 text-white rounded-xl text-sm font-semibold hover:bg-green-600 transition-colors shadow-md"
                                    >
                                        Submit
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleNext}
                                        className="px-5 py-2 bg-[#5c7cfa] text-white rounded-xl text-sm font-semibold hover:bg-[#4a6ae8] transition-colors shadow-md"
                                    >
                                        Next →
                                    </button>
                                )}
                            </div>
                        </>
                    )}
                </div>

                {!isSubmitted && (
                    <div className="mx-6 mt-3 mb-1">
                        <div className="flex justify-between text-[10px] text-white/60 mb-1">
                            <span>
                                {answeredCount}/{examQuestions.length} answered
                            </span>
                            <span>
                                {Math.round(
                                    (answeredCount / examQuestions.length) *
                                        100,
                                )}
                                %
                            </span>
                        </div>
                        <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-[#ffd700] rounded-full transition-all duration-500"
                                style={{
                                    width: `${(answeredCount / examQuestions.length) * 100}%`,
                                }}
                            />
                        </div>
                    </div>
                )}
        </BaseModal>
    );
}
