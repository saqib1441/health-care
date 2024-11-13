import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { FaWhatsapp } from "react-icons/fa6";
import Reserve from "@/assets/reserve_1.png";

const Reserved = () => {
  return (
    <section id="about-us">
      <div className="wrapper py-20 flex flex-col md:flex-row lg:py-10">
        <div className="flex justify-center md:w-[50%] md:items-center">
          <Image
            src={Reserve}
            alt="travel-app-hero"
            className="w-[100%] sm:w-[500px] md:w-fit md:h-fit lg:h-[400px]"
          />
        </div>
        <div className="mt-20 text-center md:w-[50%] flex flex-col md:items-start justify-center md:mt-0 md:text-start items-center">
          <h1 className="font-volkhov font-bold text-3xl my-4 flex flex-col md:text-3xl xl:text-4xl 2xl:text-5xl text-primary">
            Best service from severe medical experts
          </h1>
          <p className="mb-5 text-secondary md:w-full">
            Experience top-tier care with our team of highly skilled medical
            experts, dedicated to delivering the best service possible. We
            prioritize your health and well-being, offering compassionate
            support and innovative treatments tailored to your needs. Trust in
            our expertise to guide you through your medical journey with
            confidence and reassurance.
          </p>
          <Link
            href="#contact-us"
            className="bg-primary rounded-full text-white"
          >
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

export default Reserved;
