"use client";

import { MdArrowBack as ArrowBackIcon } from "react-icons/md";
import { Content, Route } from "@/lib/constants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  MdFavorite as FavoriteIcon,
  MdHome as HomeIcon,
  MdShoppingCart as CartIcon,
} from "react-icons/md";

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();

  const isHomePage = pathname === Route.HOME;

  return (
    <nav className="sticky top-0 pt-2 z-50 bg-white mb-10">
      <div className="w-full flex justify-between border-1 border-yellow-500 rounded-lg p-4">
        <Link href={Route.HOME}>
          <HomeIcon size={24} />
        </Link>
        <div className="flex gap-4 justify-center align-center">
          <Link href={Route.FAVORITES}>
            <FavoriteIcon size={24} />
          </Link>
          <Link href={Route.CART}>
            <CartIcon size={24} />
          </Link>
        </div>
      </div>
      {!isHomePage && (
        <div className="flex gap-2 -mb-6 border-b py-4 items-center" onClick={() => router.back()}>
          <ArrowBackIcon size={18} />
          <p>{Content.Navigation.GO_BACK}</p>
        </div>
      )}
    </nav>
  );
}
