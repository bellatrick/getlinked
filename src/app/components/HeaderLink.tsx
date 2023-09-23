import Link from "next/link";
import { usePathname } from "next/navigation";

type props = {
  name: string;
  href: string;
};
const HeaderLink = ({ name, href }: props) => {
  const isLinkActive = usePathname() === href;

  return (
    <li className="group ">
      <Link
        href={href}
        className={`block cursor-pointer ${
          isLinkActive
            ? "font-semibold tgradient"
            : "hover:font-semibold text-gradient"
        } font-[400] text-[16px] text-gradient text-white md:p-0`}
      >
        {name}
      </Link>
      <div
        className={`w-0 group-hover:w-full h-[2px] transition-all duration-500 bg-gradient-to-r to-[#903AFF] via-[#D434FE] from-[#FF26B9]`}
      />
    </li>
  );
};

export default HeaderLink;
