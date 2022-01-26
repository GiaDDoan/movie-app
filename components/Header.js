import Image from "next/image";
import { useRouter } from "next/router";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/solid";

const Header = () => {
  const router = useRouter();

  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <Image
        className="object-contain hover:cursor-pointer"
        src="/images/notflix.png"
        onClick={() => router.push("/")}
        width={200}
        height={100}
        alt="logo"
      />
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
    </header>
  );
};

export default Header;
