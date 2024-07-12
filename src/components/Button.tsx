import { ReactNode } from "react";
import { ButtonVariant } from "./types";

export default function Button({ children, variant }: { children: ReactNode, variant: ButtonVariant }) {
    const generalClassName = 'px-6 py-2 rounded-md w-full'
    const CTAClassName = 'bg-slate-600 text-white font-bold'
    return (
        <button className={`${generalClassName} ${variant === ButtonVariant.CTA ? CTAClassName : ''}`}>
            {children}
        </button>
    )
}