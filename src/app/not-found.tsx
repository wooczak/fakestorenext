import { Button } from "@/components";
import { Content, Error, Route } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col gap-6 items-center">
      <Image src="/404.svg" alt="404 image" width={400} height={200} />
      <h1 className="text-xl">{Error.NOT_FOUND}</h1>
      <Link href={Route.HOME}>
        <Button variant="cta">{Content.Error.GO_TO_HOMEPAGE}</Button>
      </Link>
    </section>
  );
}
