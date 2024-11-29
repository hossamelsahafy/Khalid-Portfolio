import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { SiFreelancer } from "react-icons/si";
import Link from "next/link";
const Socials = [
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/khaled-hassan0/",
  },
  {
    icon: <FaSquareUpwork />,
    path: "https://www.upwork.com/freelancers/~01ac4e55f222985180?mp_source=share",
  },
  {
    icon: <SiFreelancer />,
    path: "https://www.freelancer.com/u/Khaledhassan2?frm=Khaledhassan2&sb=t",
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {Socials.map((social, index) => {
        return (
          <Link href={social.path} key={index} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
