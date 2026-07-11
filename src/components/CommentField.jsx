import { useState } from "react";

export default function CommentField({ onAddComment }) {
    const [commentText, setCommentText] = useState("");

    const handleSubmit = () => {
        if (!commentText.trim()) return;
        onAddComment(commentText);
        setCommentText("");
    };

    return (
        <div className="mt-6 mb-10">
            <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="w-full bg-white shadow-card rounded-lg p-6 outline-none resize-y text-secondary placeholder:text-gray-400 min-h-[140px]"
                placeholder="Write a comment"
            ></textarea>
            <button 
                onClick={handleSubmit}
                className="mt-4 bg-btn text-white font-medium px-6 py-3 rounded flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
            >
                Submit Review{" "}
                <span className="text-xl leading-none">&rarr;</span>
            </button>
        </div>
    );
}
