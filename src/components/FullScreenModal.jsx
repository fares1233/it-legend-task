import PDF from "../../public/Fares_Elshafey_CV_.pdf";
import Close from "../assets/icons/close-1511-svgrepo-com.svg";

export default function FullScreenModal({ show, onClose, title }) {
    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50" onClick={onClose}>
            <div
                className="w-full h-full bg-white flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100">
                    <h3 className="text-base font-bold text-zinc-800 font-sans">
                        {title || "Lecture Material PDF"}
                    </h3>

                    <button
                        onClick={onClose}
                        className="p-1.5 rounded-lg text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 transition-colors"
                    >
                        <img src={Close} alt="close" className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex-1 w-full bg-zinc-50">
                    <iframe
                        src={PDF}
                        className="w-full h-full border-none"
                        title="PDF Viewer"
                    />
                </div>
            </div>
        </div>
    );
}
