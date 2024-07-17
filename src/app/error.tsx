"use client";

import Button from "@/components/Button";
import { Content, Route } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <section className="flex flex-col gap-6 items-stretch text-center">
      <Image src="/404.svg" alt="404 image" width={400} height={200} />
      <h1 className="text-xl">{error?.message}</h1>
      <Link href={Route.HOME}>
        <Button variant="cta">{Content.Error.GO_TO_HOMEPAGE}</Button>
      </Link>
    </section>
  );
}
