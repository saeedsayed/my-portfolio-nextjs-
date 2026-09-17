import SocialNav from "./SocialNav";

const Footer = () => {
  return (
    <footer className="pb-6 flex flex-col md:flex-row items-center gap-5 md:justify-between">
      <p>Thank you for visiting my portfolio 😊</p>
      <SocialNav />
      <p className="text-font-sub-color">
        © {new Date().getFullYear()} Saeed Sayed. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
