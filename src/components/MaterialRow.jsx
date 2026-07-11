export default function MaterialRow({ material }) {
    // Hide the Instructor row on desktop sizes
    const isInstructor = material?.title === "Instructor:";
    
    return (
        <div className={`flex justify-between items-center py-4 border-b border-border last:border-b-0 md:last:border-b-0 ${isInstructor ? "md:hidden" : ""}`}>
            <div className="flex gap-3 items-center ">
                <img src={material?.icon} alt="" className="w-6" />
                <h3 className="font-medium text-md text-ternary ">{material?.title}</h3>
            </div>
            <p className="text-lg font-medium">{material?.description}</p>
        </div>
    );
}
