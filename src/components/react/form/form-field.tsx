interface Props {
  name: string;
  label: string;
  children: React.ReactNode;
}

export const FormField = ({ name, label, children }: Props) => {
  return (
    <div className="flex flex-col gap-1 lg:gap-2">
      <label className="text-sm pl-3.5 lg:text-[15px] lg:pl-6" htmlFor={name}>
        {label}
      </label>
      {children}
    </div>
  );
};