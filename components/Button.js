"use client";

const variants = {
    secondary: 'text-white bg-primary hover:bg-primary-dark active:bg-primary-dark transition-colors duration-300',
    secondary: 'text-white bg-secondary hover:bg-secondary-dark active:bg-secondary-dark transition-colors duration-300',
};

const sizes = {
    sm: 'text-sm py-2.5 px-3',
    md: 'text-base py-3 px-4',
    lg: 'text-lg py-4 px-8',
};

export default function Button({ children, className, variant = 'primary', size = 'md', onClick }) {
    return (
        <button
            className={`block rounded-lg ${sizes[size]} ${variants[variant]} ${className} transform transition-transform duration-300 hover:scale-105`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
