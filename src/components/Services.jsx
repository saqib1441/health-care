import ServiceCard from "./ServiceCard";
import { BsPrescription2 } from "react-icons/bs";
import { PiHeartbeat } from "react-icons/pi";
import { BiInjection } from "react-icons/bi";

const Services = () => {
  return (
    <section className="py-20" id="services">
      <div className="wrapper">
        <div className="flex flex-col items-center text-center md:flex-row md:justify-between">
          <h1 className="text-3xl font-bold mb-3">Our Services</h1>
          <p className="text-secondary md:w-[50%] md:text-start">
            Hospitals are an integral part of a social and health organization
            with the function of providing comprehensive services.
          </p>
        </div>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<BsPrescription2 />}
            title="24/7 Pharmacy"
            description="Our 24/7 pharmacy provides round-the-clock prescriptions, medications, and health consultations for your convenience."
            bg="bg-[#855FCE]/10"
            color="text-[#855FCE]"
          />
          <ServiceCard
            icon={<PiHeartbeat />}
            title="Medical Check Up"
            description="Our medical check-up offers comprehensive evaluations to promote health, detect issues, and ensure wellness."
            bg="bg-[#27AE60]/10"
            color="text-[#27AE60]"
          />
          <ServiceCard
            icon={<BiInjection />}
            title="Professional Doctor"
            description="Our professional doctors offers expert diagnosis, treatment plans, and personalized care for optimal health."
            bg="bg-primary/10"
            color="text-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
