"use client";

const variants = {
    success: 'bg-green-300 text-green-800',
    error: 'bg-rose-300 text-rose-800',
};

export default function Alert({ message, variant }) {
    return (
        <div className={`mt-2 ${variants[variant]} text-sm font-semibold text-center rounded-lg p-4 mb-2 transition-opacity duration-500`} role="alert">
            {message}
        </div>
    );
}
