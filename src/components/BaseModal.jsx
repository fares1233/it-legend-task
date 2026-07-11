export default function BaseModal({ 
    isOpen, 
    onClose, 
    children, 
    containerClassName = "",
    headerContent = null,
    closeButtonClass = "text-gray-800",
    hideHeader = false
}) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className={`relative w-full rounded-[32px] overflow-hidden shadow-2xl flex flex-col ${containerClassName}`}
                onClick={(e) => e.stopPropagation()}
            >
                {!hideHeader && (
                    <div className="flex items-center justify-between px-6 pt-4 mb-6">
                        <button
                            onClick={onClose}
                            className={`hover:opacity-80 transition-opacity ${closeButtonClass}`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5 8.25 12l7.5-7.5"
                                />
                            </svg>
                        </button>
                        
                        {headerContent}
                        
                        {/* Spacer to ensure the header content remains centered */}
                        <div className="w-5"></div>
                    </div>
                )}
                
                {children}
            </div>
        </div>
    );
}
