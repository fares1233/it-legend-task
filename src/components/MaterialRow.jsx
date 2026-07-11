export default function MaterialRow({ material, isMobile }) {
    if (!isMobile && material.title === "Instructor:") return null;
    return (
        <div className="flex justify-between items-center py-4 ">
            <div className="flex gap-3 items-center ">
                <img src={material.icon} alt="" className="w-6" />
                <h3 className="font-medium text-md text-ternary ">{material.title}</h3>
            </div>
            <p className="text-lg font-medium">{material.description}</p>
        </div>
    );
}
