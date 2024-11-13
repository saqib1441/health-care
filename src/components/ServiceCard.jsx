import Link from "next/link";
import Button from "./Button";
import { FaWhatsapp } from "react-icons/fa6";

const ServiceCard = ({ icon, title, description, bg, color }) => {
  return (
    <div className="shadow-main py-10 px-5 rounded-3xl">
      <div
        className={`w-14 h-14 rounded-full flex justify-center items-center text-2xl ${bg} ${color}`}
      >
        {icon}
      </div>
      <h1 className="font-semibold my-2 text-xl">{title}</h1>
      <p className="text-secondary">{description}</p>
      <Link
        href="#contact-us"
        className="flex bg-primary text-white rounded-full mt-3 sm:w-fit"
      >
        <Button>
          <span className="text-lg">
            <FaWhatsapp />
          </span>
          Reservation
        </Button>
      </Link>
    </div>
  );
};

export default ServiceCard;
