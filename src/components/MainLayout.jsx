import { useState } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import CoursePlayer from "./CoursePlayer";
import Comments from "./Comments";

export default function MainLayout() {
    const [isWide, setIsWide] = useState(false);

    return (
        <div className="min-h-screen bg-background font-sans px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-x-[60px] gap-y-6">
                {/* 1. Video Player */}
                <div
                    className={`transition-all duration-500 sticky top-0 z-40 bg-background pt-4 pb-2 md:pt-0 md:pb-0 md:mt-4 md:relative md:z-auto order-1 md:order-none ${isWide ? "md:col-span-2" : "md:col-span-1"}`}
                >
                    <CoursePlayer isWide={isWide} setIsWide={setIsWide} />
                </div>

                {/* 2. Right Sidebar (stays on the right, either next to video or below wide video) */}
                <div
                    className={`transition-all duration-500 md:col-start-2 order-3 md:order-none ${isWide ? "md:row-start-2" : "md:row-start-1 md:row-span-2"}`}
                >
                    <RightSide />
                </div>

                {/* Wrapper to stack elements on desktop without grid gap issues, while allowing reordering on mobile */}
                <div className="contents md:block md:col-start-1 md:row-start-2">
                    {/* 3. Left Side Content (course info, tabs, etc. below video) */}
                    <div className="order-2 md:order-none">
                        <LeftSide />
                    </div>

                    {/* 4. Comments (Always at the bottom on mobile) */}
                    <div className="order-4 md:order-none">
                        <Comments />
                    </div>
                </div>
            </div>
        </div>
    );
}
