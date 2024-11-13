import Image from "next/image";
import Hero from "@/assets/hero.png";
import Button from "./Button";
import { FaStethoscope } from "react-icons/fa6";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-primary/5">
      <div className="wrapper py-20 flex flex-col-reverse md:flex-row lg:py-10">
        <div className="mt-20 text-center md:w-[50%] flex flex-col md:items-start justify-center md:mt-0 md:text-start items-center">
          <h1 className="font-volkhov font-bold text-3xl my-4 flex flex-col md:text-3xl xl:text-4xl 2xl:text-5xl text-primary">
            KliniK 24 is ready to serve community complaints 24/7.
          </h1>
          <p className="mb-5 text-secondary md:w-full">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <Link
            href="#contact-us"
            className="bg-primary rounded-full text-white"
          >
            <Button>
              <span>
                <FaStethoscope />
              </span>
              Patient Register
            </Button>
          </Link>
        </div>
        <div className="flex justify-center lg:justify-end xl:justify-center md:w-[50%]">
          <Image
            src={Hero}
            alt="travel-app-hero"
            className="w-[100%] sm:w-[500px] md:w-fit md:h-fit lg:h-[450px] xl:h-[550px]"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
