import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="sureshreddylg@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 974040**62" Image={FiPhone} />
      <SingleInfo text="Bangaluru" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
