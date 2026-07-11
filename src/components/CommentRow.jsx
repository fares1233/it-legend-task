export default function CommentRow({ comment }) {
    return (
        <div className="flex gap-6 py-4">
            <img
                src={comment.avatar}
                alt={comment.studentName}
                className="h-17 w-17 shrink-0 rounded-full object-cover shadow-sm"
            />
            <div className="flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h4 className="text-md font-medium text-secondary">{comment.studentName}</h4>
                        <span className="text-medium text-ternary font-md">{comment.date}</span>
                    </div>
                </div>
                <p className="text-medium text-ternary font-md">
                    {comment.commentText}
                </p>
            </div>
        </div>
    );
}