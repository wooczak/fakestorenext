import { Route } from "@/lib/constants";
import { firstCharUpperCase } from "@/lib/helpers";
import Link from "next/link";
import Button from "../Button";
import { ButtonVariant } from "../types";

export default function Category({ categoryName }: { categoryName: string }) {
    return (
        <div className="flex flex-col justify-center gap-4 border border-slate-200 shadow-lg p-4 rounded-lg text-center">
            <p className="font-bold text-lg">{firstCharUpperCase(categoryName)}</p>
            <Link href={`${Route.CATEGORY}/${categoryName}`}>
                <Button variant={ButtonVariant.CTA}>
                    Go to category
                </Button>
            </Link>
        </div>
    )
}