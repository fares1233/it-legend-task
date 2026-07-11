import { useState, useEffect, useRef } from "react";
import { Plyr } from "plyr-react";
import "plyr-react/plyr.css";

import FaceIcon from "../assets/icons/facebook-svgrepo-com.svg";
import TwitterIcon from "../assets/icons/twitter-3-svgrepo-com.svg";
import YoutubeIcon from "../assets/icons/youtube-svgrepo-com.svg";
import LinkedInIcon from "../assets/icons/linkedin-svgrepo-com.svg";

import CurriculumIcon from "../assets/icons/book-open-svgrepo-com.svg";
import CommentIcon from "../assets/icons/comment-2-svgrepo-com.svg";
import QuestionIcon from "../assets/icons/question-circle-svgrepo-com.svg";
import LeaderboardIcon from "../assets/icons/leaderboard-star-svgrepo-com.svg";

import Icon from "./Icon";
import Poster from '../assets/images/poster.png';
import LeaderboardModal from "./LeaderboardModal";
import AskQuestionModal from "./AskQuestionModal";

const socialIcons = [FaceIcon, TwitterIcon, LinkedInIcon, YoutubeIcon];

const mobileNavItems = [
    {
        icon: CurriculumIcon,
        label: "Curriculum",
        action: "scroll",
        target: "curriculum-section",
    },
    {
        icon: CommentIcon,
        label: "Comment",
        action: "scroll",
        target: "comment-section",
    },
    {
        icon: QuestionIcon,
        label: "Ask Question",
        action: "popup",
        target: "ask-question",
    },
    {
        icon: LeaderboardIcon,
        label: "Leaderboard",
        action: "popup",
        target: "leaderboard",
    },
];

export default function CoursePlayer({ isWide, setIsWide }) {
    const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
    const [isAskQuestionOpen, setIsAskQuestionOpen] = useState(false);
    const [askQuestionText, setAskQuestionText] = useState("");

    const plyrProps = {
        source: {
            type: "video",
            sources: [
                {
                    src: "/it-legend-task-1.mp4",
                    type: "video/mp4",
                },
            ],
            poster:Poster,
        },
        options: {
            ratio: isWide ? "8:3" : "16:9",
            controls: [
                "play-large",
                "play",
                "progress",
                "current-time",
                "duration",
                "mute",
                "fullscreen",
            ],
            settings: ["captions", "quality", "speed", "loop"],
            captions: {
                active: true,
                update: true,
                language: "auto",
            },
        },
    };

    const playerWrapperRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!playerWrapperRef.current) return;
            const controls =
                playerWrapperRef.current.querySelector(".plyr__controls");
            const fullscreenBtn = playerWrapperRef.current.querySelector(
                '[data-plyr="fullscreen"]',
            );
            const existingBtn = playerWrapperRef.current.querySelector(
                "#custom-theater-btn",
            );

            if (controls && fullscreenBtn && !existingBtn) {
                const theaterBtn = document.createElement("button");
                theaterBtn.id = "custom-theater-btn";
                theaterBtn.className = "plyr__controls__item plyr__control hidden md:flex";
                theaterBtn.type = "button";
                theaterBtn.title = "Theater Mode";
                theaterBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 6v12H2V6h20zm-2 2H4v8h16V8z"/></svg>`;

                theaterBtn.addEventListener("click", () => {
                    document.getElementById("hidden-theater-trigger")?.click();
                });

                controls.insertBefore(theaterBtn, fullscreenBtn);
            }
        }, 500);

        return () => clearInterval(interval);
    }, []);

    const handleMobileNavClick = (item) => {
        if (item.action === "scroll") {
            const el = document.getElementById(item.target);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        } else if (item.action === "popup" && item.target === "leaderboard") {
            setIsLeaderboardOpen(true);
        } else if (item.action === "popup" && item.target === "ask-question") {
            setIsAskQuestionOpen(true);
        }
    };

    return (
        <>
            <div
                ref={playerWrapperRef}
                className={`relative group
                ${
                    isWide
                        ? "w-full aspect-8/3 bg-black flex justify-center rounded-xl overflow-hidden shadow-xl"
                        : "w-full aspect-video rounded-md overflow-hidden"
                }
                `}
            >
                <div className="w-full h-full [&>.plyr]:h-full [&_.plyr__video-wrapper]:h-full">
                    <Plyr {...plyrProps} />
                </div>

                <button
                    id="hidden-theater-trigger"
                    className="hidden"
                    onClick={() => setIsWide?.(!isWide)}
                />
            </div>

            <div className="mt-10 hidden md:flex items-center gap-4">
                {socialIcons.map((icon) => (
                    <Icon key={icon} icon={icon} />
                ))}
            </div>

            <div className="mt-6 flex justify-around md:hidden bg-white shadow-card rounded-xl py-3 ">
                {mobileNavItems.map((item) => (
                    <button
                        key={item.label}
                        onClick={() => handleMobileNavClick(item)}
                        className="flex flex-col items-center gap-1.5 text-secondary hover:text-primary transition-colors"
                    >
                        <img
                            src={item.icon}
                            alt={item.label}
                            className="w-6 h-6"
                        />
                        <span className="text-[10px] font-medium">
                            {item.label}
                        </span>
                    </button>
                ))}
            </div>

            <LeaderboardModal
                isOpen={isLeaderboardOpen}
                onClose={() => setIsLeaderboardOpen(false)}
            />

            <AskQuestionModal
                isOpen={isAskQuestionOpen}
                onClose={() => setIsAskQuestionOpen(false)}
                text={askQuestionText}
                setText={setAskQuestionText}
            />
        </>
    );
}
