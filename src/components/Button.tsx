import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: ReactNode | ReactNode[];
  variant: "cta" | "link";
};

export default function Button({ children, variant, ...props }: ButtonProps) {
  const generalClassName = "px-6 py-2 rounded-md uppercase font-medium transition-all";
  const CTAClassName = "bg-yellow-500 text-black shadow shadow-yellow-600 hover:bg-yellow-400 transition-all hover:-translate-y-1";
  const LinkClassName = "italic underline !px-0 !py-0 tracking-wider hover:text-slate-400";
  return (
    <button
      {...props}
      className={`${generalClassName} ${
        variant === "cta" ? CTAClassName : LinkClassName
      } ${props.className} `}
    >
      {children}
    </button>
  );
}
