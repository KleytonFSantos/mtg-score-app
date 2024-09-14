type ButtonProps = {
children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
return (
    <button
    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#243047] text-white text-sm font-bold leading-normal tracking-[0.015em]"
    >
    <span className="truncate">{children}</span>
    </button>
);
}