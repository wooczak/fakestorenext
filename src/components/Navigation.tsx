import { Route } from "@/lib/constants";
import Link from "next/link";
import { MdFavorite as FavoriteIcon, MdHome as HomeIcon } from "react-icons/md";

export default function Navigation() {
  return (
    <nav className="w-full flex justify-between border border-slate-300 rounded-lg p-4 mb-4">
      <Link href={Route.HOME}>
        <HomeIcon size={24} />
      </Link>
      <Link href={Route.FAVORITES}>
        <FavoriteIcon size={24} />
      </Link>
    </nav>
  );
}
