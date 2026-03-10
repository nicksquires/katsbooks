import Image from "next/image";
import kb from "@/public/img/katsbooks_logo1.png";
import styles from "../styles/home.module.css";
import SocialBar from "../components/SocialBar";
import Button from "../components/Button";
import NavBar from "../components/NavBar";

const Header = () => {
  return (
    <div className={styles.header}>
      <SocialBar />
      {/* Banner Content */}
      <div
        className="
          relative flex flex-col 
          justify-center items-center 
          h-full px-8 z-0"
      >
        {/* Logo + Header */}
        <div className="flex gap-4 md:mb-6">
          <Image
            src={kb}
            alt="Katsbooks Logo"
            className="h-15 md:h-20 w-auto md:mt-0"
            priority
          />
          <a href="/">
            <h1
              className="text-6xl md:text-8xl font-bold text-zinc-50 
                            font-poppins whitespace-nowrap opacity-95"
            >
              Katsbooks
            </h1>
          </a>
        </div>

        {/* Nav Menu */}
        <NavBar />

        {/* Blurb */}
        <p className="mt-12 md:mt-20 text-2xl md:text-4xl opacity-90 max-w-6xl text-zinc-50">
          Independent bookkeeping firm providing services to clients in
          Orangeville, Ontario
        </p>

        {/* Quote button */}
        <a href="mailto:kat.cutler.ryan@gmail.com" className="my-14">
          <Button color="green">Get a Quote</Button>
        </a>
      </div>
    </div>
  );
};

export default Header;
