import socialData from "@/helper/social.json";
import Image from "next/image";

const SocialNav = () => {
  return (
    <ul className="flex justify-center gap-5 sm:gap-8 md:justify-start">
      {socialData?.map(({ url, icon, label }) => {
        return (
          <li key={url} className="relative cursor-target">
            <a href={url} target="_blank" title={label} rel="noreferrer">
              <Image
                width={100}
                height={100}
                src={icon}
                alt={label}
                loading="lazy"
                className={`w-12 aspect-square transition rounded-full border-2 border-white shadow-lg`}
              />
              <Image
                width={300}
                height={300}
                src={icon}
                alt={label}
                loading="lazy"
                className={`w-12 aspect-square absolute rounded-full top-0 transition border-2 border-white hover:animate-ping`}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialNav;
