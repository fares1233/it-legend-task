import BaseModal from "./BaseModal";

export default function AskQuestionModal({ isOpen, onClose, text, setText }) {
    const handleSubmit = () => {
        if (!text.trim()) return;
        setText("");
        onClose();
    };

    const headerTitle = (
        <div className="text-center text-primary font-semibold">
            Ask a Question
        </div>
    );

    return (
        <BaseModal 
            isOpen={isOpen} 
            onClose={onClose} 
            headerContent={headerTitle}
            containerClassName="bg-white max-w-lg mx-auto"
        >
            <div className="px-6 pb-6 pt-2">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full bg-white shadow-card rounded-lg p-6 outline-none resize-y text-secondary placeholder:text-gray-400 min-h-[140px]"
                    placeholder="Write your question..."
                ></textarea>
                <button 
                    onClick={handleSubmit}
                    className="mt-4 bg-btn text-white font-medium px-6 py-3 rounded flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer w-full justify-center"
                >
                    Submit Question <span className="text-xl leading-none">&rarr;</span>
                </button>
            </div>
        </BaseModal>
    );
}
