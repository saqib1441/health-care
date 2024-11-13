import Image from "next/image";
import SectionTitle from "./SectionTitle";
import AhmadHospital from "@/assets/partners/ahmad_hospital.png";
import Ciputra from "@/assets/partners/ciputra.png";
import KarmenHospital from "@/assets/partners/karmen_pet_hospital.png";
import Mayapada from "@/assets/partners/mayapada.png";
import StJude from "@/assets/partners/st_jude.png";

const Partners = () => {
  return (
    <section className="py-20 bg-primary/15" id="partners">
      <div className="wrapper">
        <SectionTitle slogan="Partners" title="Our Partners and Friends" />
        <div className="grid mt-10 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <Image
            src={AhmadHospital}
            alt="health-care-partners"
            className="w-[175px] h-[125px] mx-auto md:w-[150px] sm:h-[100px]"
          />
          <Image
            src={Ciputra}
            alt="health-care-partners"
            className="w-[175px] h-[125px] mx-auto md:w-[150px] sm:h-[100px]"
          />
          <Image
            src={KarmenHospital}
            alt="health-care-partners"
            className="w-[175px] h-[125px] mx-auto md:w-[150px] sm:h-[100px]"
          />
          <Image
            src={Mayapada}
            alt="health-care-partners"
            className="w-[175px] h-[125px] mx-auto md:w-[150px] sm:h-[100px]"
          />
          <Image
            src={StJude}
            alt="health-care-partners"
            className="w-[175px] h-[125px] mx-auto md:w-[150px] sm:h-[100px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
