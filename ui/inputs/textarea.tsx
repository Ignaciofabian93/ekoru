"use client";
import { useState } from "react";
import clsx from "clsx";

import { LucideIcon, MessageSquare } from "lucide-react";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
  icon?: LucideIcon;
};

export default function Textarea({
  name,
  label,
  placeholder,
  value,
  onChange,
  icon: Icon = MessageSquare,
  ...rest
}: Props) {
  const [focused, setFocused] = useState<boolean>(false);
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-semibold text-gray-700 mb-2 block"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <Icon
          className={`absolute left-3 top-1/3 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
            focused ? "text-primary" : "text-gray-400"
          }`}
        />
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={clsx(
            "w-full pl-10 p-3 border border-gray-300 rounded-lg transition-all duration-200 resize-none bg-gray-50 focus:bg-white focus:border-primary focus:text-primary",
            "placeholder:text-gray-400 text-gray-800 focus:outline-none"
          )}
          placeholder={placeholder}
          required
          {...rest}
        />
      </div>
    </div>
  );
}
