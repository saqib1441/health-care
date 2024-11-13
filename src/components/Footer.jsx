import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import FooterLogo from "@/assets/footer_logo.png";

const Footer = () => {
  return (
    <footer className="bg-tertiary py-20 text-white">
      <div className="wrapper grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <div>
            <Image
              src={FooterLogo}
              alt="health-care-footer-log"
              className="w-[200px]"
            />
          </div>
          <p className="w-[80%] mx-auto text-center lg:mx-0 lg:text-start lg:w-full">
            Your trusted source for comprehensive health information, resources,
            and support for every step of wellness.
          </p>
          <div className="flex text-lg gap-2">
            <Link
              href="#"
              className="bg-white w-8 h-8 flex items-center justify-center rounded-md text-red-600 text-2xl"
            >
              <FaYoutube />
            </Link>
            <Link
              href="#"
              className="bg-white w-8 h-8 flex items-center justify-center rounded-md text-primary text-xl"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="bg-white w-8 h-8 flex items-center justify-center rounded-md text-green-600 text-2xl"
            >
              <FaWhatsapp />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h1 className="font-semibold text-lg">Company Info</h1>
          <div className="flex flex-col gap-3 items-center">
            <Link href="#">About Us</Link>
            <Link href="#">Career</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Service Info</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h1 className="font-semibold text-lg">Branch</h1>
          <div className="flex flex-col gap-3 items-center">
            <Link href="#">Tangerang</Link>
            <Link href="#">Jakarta</Link>
            <Link href="#">Surabaya</Link>
            <Link href="#">Bekasi</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h1 className="font-semibold text-lg">Contact Us</h1>
          <div className="flex flex-col gap-3 items-center">
            <Link href="#">+92301 2345678</Link>
            <Link href="#">info@klinik24.com</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
