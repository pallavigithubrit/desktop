import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const FormField = forwardRef(({ label, className, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-base font-medium text-black font-montserrat">
        {label}
      </label>
      <input
        ref={ref}
        className={cn(
          "w-full h-11 px-3 rounded-lg border border-gray-300 bg-gray-100 font-helvetica text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent",
          className,
        )}
        {...props}
      />
    </div>
  );
});

FormField.displayName = "FormField";

export { FormField };
