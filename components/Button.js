"use client"
const variants = {
    primary: 'text-white bg-[#756AB6] hover:bg-[#5d4a9f] active:bg-[#5d4a9f]',
    secondary: 'text-white bg-[#AC87C5] hover:bg-[#8e6ca8] active:bg-[#8e6ca8]',
}

const sizes = {
    sm: 'text-sm py-2.5 px-3',
    md: 'text-base py-3 px-4',
    lg: 'text-lg py-4 px-8',
}

export default function Button({ children, className, variant = 'primary', size = 'md', onClick }) {
    return (
        <button className={`block rounded-lg ${sizes[size]} ${variants[variant]} ${className}`}
            onClick={onClick}>
            {children}
        </button>
    )
}
