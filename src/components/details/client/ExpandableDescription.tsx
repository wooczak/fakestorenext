"use client";

import { Content } from "@/lib/constants";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";

type ExpandableDescriptionProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & { description: string };

export default function ExpandableDescription({
  description,
  ...props
}: ExpandableDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDescriptionShort, setIsDescriptionShort] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  function handleSeeMore() {
    setIsExpanded((prevState) => !prevState);
  }

  useEffect(() => {
    const linesAmount = descriptionRef.current?.getClientRects().length;

    if (linesAmount) setIsDescriptionShort(linesAmount <= 4);
  }, [description]);

  const { SEE_MORE, HIDE } = Content.CategoryProductCard.Description;

  return (
    <div onClick={handleSeeMore}>
      <div
        className={`${
          !isExpanded && !isDescriptionShort ? "line-clamp-4" : ""
        }`}
      >
        <p className={`inline ${props.className}`} ref={descriptionRef}>
          {description}
        </p>
      </div>
      <>
        {!isDescriptionShort && (
          <p className="underline cursor-pointer text-slate-500 mt-1 tracking-wider uppercase">
            {!isExpanded ? SEE_MORE : HIDE}
          </p>
        )}
      </>
    </div>
  );
}
