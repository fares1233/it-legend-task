import BaseModal from "./BaseModal";

export default function LeaderboardModal({ isOpen, onClose, courseName = "Course Name Shown Here" }) {
    if (!isOpen) return null;

    const headerTitle = (
        <div className="text-center">
            <p className="text-[10px] font-semibold text-[#3b5998] mb-0.5">
                {courseName}
            </p>
            <h2 className="text-sm font-bold text-[#3b5998]">
                Leaderboard
            </h2>
        </div>
    );

    return (
        <BaseModal 
            isOpen={isOpen} 
            onClose={onClose}
            containerClassName="max-w-[340px] bg-white pb-6 animate-in fade-in zoom-in duration-200"
            closeButtonClass="text-[#3b5998]"
            headerContent={headerTitle}
        >
            <div className="px-6">
                <div 
                    className="bg-[#f0f4f8] rounded-xl p-4 flex items-center justify-between gap-3 mb-6"
                    dir="rtl"
                >
                    <p className="text-[10px] leading-relaxed text-[#3b5998] font-medium text-right flex-1">
                        عظيم يا صديقي، أدائك في الكورس ده أفضل من ٦٠٪ من باقي الطلبة! كمل، عايز أشوف اسمك في الليدر بورد هنا
                    </p>
                    <span className="text-2xl" role="img" aria-label="muscle">
                        💪
                    </span>
                </div>

                <div className="bg-[#f8f9fa] rounded-2xl p-4 flex flex-col gap-2.5">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div 
                            key={item} 
                            className="bg-white rounded-lg h-8 shadow-sm border border-gray-100"
                        />
                    ))}
                </div>
            </div>
        </BaseModal>
    );
}
