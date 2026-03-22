import { ErrorMessage, Field } from "formik";

function FormField({
  name,
  type = "text",
  placeholder,
  as,
  rows,
  className = "",
}) {
  const baseClassName =
    "block w-full rounded-2xl border border-emerald-500 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-2 focus:border-emerald-500";

  return (
    <div className="mb-5">
      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        as={as}
        rows={rows}
        className={`${baseClassName} ${className}`.trim()}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="mt-2 ml-2 text-[13px] text-red-500"
      />
    </div>
  );
}

export default FormField;
