import { CiFacebook } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import BurgerMenu from "./BurgerMenu";

const SocialBar = () => {
  return (
    <>
      {/* Social Icons Overlay */}
      <BurgerMenu />
      <div className="absolute top-4 right-4 z-10 flex gap-4">
        <a
          href="https://www.facebook.com/Kats-Books-107436844072493"
          aria-label="Facebook"
          className="text-white hover:text-black transition-colors duration-200"
        >
          <CiFacebook className="w-10 h-10" />
        </a>

        <a
          href="mailto:kat.cutler.ryan@gmail.com"
          aria-label="Email"
          className="text-white hover:text-black transition-colors duration-200"
        >
          <AiOutlineMail className="w-10 h-10" />
        </a>

        <a
          href="https://ca.linkedin.com/in/kathryn-ryan-66045617"
          aria-label="LinkedIn"
          className="text-white hover:text-black transition-colors duration-200"
        >
          <CiLinkedin className="w-10 h-10" />
        </a>
      </div>
    </>
  );
};

export default SocialBar;
