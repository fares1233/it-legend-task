import { useState } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import CoursePlayer from "./CoursePlayer";
import Comments from "./Comments";

export default function MainLayout() {
    const [isWide, setIsWide] = useState(false);

    return (
        <div className="min-h-screen bg-background font-sans px-6 mx-auto max-w-[1440px]">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] md:grid-rows-[max-content_1fr] gap-x-[60px] gap-y-20">
                <div
                    className={`transition-all duration-500 sticky top-0 z-40 bg-background pt-4 pb-2 md:pt-0 md:pb-0 md:mt-4 md:relative md:z-auto order-1 md:order-0 ${isWide ? "md:col-span-2" : "md:col-span-1"}`}
                >
                    <CoursePlayer isWide={isWide} setIsWide={setIsWide} />
                </div>

                <div
                    className={`transition-all duration-500 md:col-start-2 order-3 md:order-0 ${isWide ? "md:row-start-2" : "md:row-start-1 md:row-span-2"}`}
                >
                    <RightSide />
                </div>

                <div className="contents md:block md:col-start-1 md:row-start-2">
                    <div className="order-2 md:order-0">
                        <LeftSide />
                    </div>

                    <div className="order-4 md:order-0">
                        <Comments />
                    </div>
                </div>
            </div>
        </div>
    );
}
