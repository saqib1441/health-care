import { FaCalendar, FaWhatsapp } from "react-icons/fa6";
import Button from "./Button";
import Link from "next/link";

const Subcription = () => {
  return (
    <section className="py-20" id="contact-us">
      <div className="wrapper py-20 flex flex-col gap-4 bg-primary rounded-[50px]">
        <h1 className="text-3xl text-center font-bold text-white mx-auto sm:w-[600px] md:text-4xl">
          Reserve our Services now
        </h1>
        <p className="w-[80%] mx-auto text-center text-white/70">
          Hospitals are an integral part of a social and health organization
          with the function of providing comprehensive services.
        </p>
        <div className="flex justify-center gap-5 flex-col items-center md:flex-row">
          <Link href="#" className="border-2 rounded-full text-white">
            <Button>
              <span>
                <FaCalendar />
              </span>
              Check Doctor Schedule
            </Button>
          </Link>
          <Link href="#" className="text-primary rounded-full bg-white">
            <Button>
              <span>
                <FaWhatsapp />
              </span>
              Reservation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Subcription;
