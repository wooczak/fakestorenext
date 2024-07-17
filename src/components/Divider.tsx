import { DetailedHTMLProps, HTMLAttributes } from "react";

const DividerSize = {
  small: "1px",
  regular: "2px",
  big: "3px",
} as const;

type DividerProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  size?: keyof typeof DividerSize;
};

export default function Divider({ size = "small", ...props }: DividerProps) {
  return (
    <span
      {...props}
      style={{
        height: DividerSize[size],
      }}
      className={`${props.className} w-full block bg-yellow-400 my-6`}
    />
  );
}
