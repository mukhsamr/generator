"use client";

export default function Input({ placeholder, value, onChange }) {
    return (
        <input
            type="text"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm bg-[#f3d3da] focus:bg-white focus:border-primary focus:ring-primary focus:ring-opacity-50 focus:outline-none transition-all duration-300"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}