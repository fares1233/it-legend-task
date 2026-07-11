export default function Icon({ icon }) {
    return (
        <a href="#">
            <img src={icon} alt="" className="w-[35px] h-[35px]" />
        </a>
    );
}
