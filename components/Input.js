"use client"

export default function Input({ placeholder, value, onChange }) {
    return (
        <input
            type="text"
            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            placeholder={placeholder}
            value={value}
            onChange={onChange} />
    )
}

