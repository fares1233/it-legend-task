import { useState, useEffect, useRef } from "react";

export default function ProgressBar({ progress = 63 }) {
    const [animatedProgress, setAnimatedProgress] = useState(0);
    const progressRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setAnimatedProgress(progress);
                    // Disconnect after it triggers once
                    if (progressRef.current) {
                        observer.unobserve(progressRef.current);
                    }
                }
            },
            { threshold: 0.1 }
        );

        if (progressRef.current) {
            observer.observe(progressRef.current);
        }

        return () => {
            if (progressRef.current) {
                observer.unobserve(progressRef.current);
            }
        };
    }, [progress]);

    return (
        <div ref={progressRef} className="w-full bg-white py-15">
            <div className="relative w-full flex flex-col items-start">
                <div
                    className="absolute -top-12 flex flex-col items-center transition-all duration-1000 ease-out
                     /* الخلطة السرية لرسم السهم باستخدام after */
                     after:content-[''] after:w-0 after:h-0 
                     after:border-l-[5px] after:border-l-transparent 
                     after:border-r-[5px] after:border-r-transparent 
                     after:border-t-[5px] after:border-t-zinc-300
                     after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2"
                    style={{
                        left: `${animatedProgress}%`,
                        transform: "translateX(-50%)",
                    }}
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-zinc-300 bg-white font-sans text-xs font-semibold text-indigo-900 shadow-sm">
                        You
                    </div>
                </div>

                <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden relative">
                    <div
                        className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${animatedProgress}%` }}
                    />
                </div>

                <div
                    className="absolute -bottom-7 transition-all duration-1000 ease-out font-sans text-xs font-semibold text-indigo-700/80"
                    style={{
                        left: `${animatedProgress}%`,
                        transform: "translateX(-50%)",
                    }}
                >
                    {animatedProgress}%
                </div>
            </div>
        </div>
    );
}
