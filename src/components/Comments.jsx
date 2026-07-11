import { useState } from "react";
import commentsData from "../data/commentsData";
import CommentRow from "./CommentRow";
import CommentField from "./CommentField";

export default function Comments() {
    const [comments, setComments] = useState(commentsData);

    const handleAddComment = (text) => {
        const newComment = {
            id: Date.now(),
            studentName: "Current User",
            date: "Just now",
            commentText: text,
            avatar: "https://i.pravatar.cc/150?u=currentuser",
        };
        
        setComments([newComment, ...comments]);
    };

    return (
        <section id="comment-section" className="scroll-mt-[320px] md:scroll-mt-0">
            <h2 className="font-medium text-2xl md:text-4xl mt-12 mb-6 text-primary">
                Comments
            </h2>
            <div className="flex flex-col divide-y divide-border mt-4">
                {comments?.map((comment) => (
                    <CommentRow key={comment.id} comment={comment} />
                ))}
            </div>
            <CommentField onAddComment={handleAddComment} />
        </section>
    );
}
