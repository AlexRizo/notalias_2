import type { RegisterOptions, UseFormRegister } from "react-hook-form";
import countries from "world-countries";
import type { FormData } from "./contact-form";
import type { Ref } from "react";

interface CountryOption {
  iso: string;
  dialCode: string;
  name: string;
}

const countryCodes: CountryOption[] = countries
  .filter((c) => c.idd.root)
  .map((c) => ({
    iso: c.cca2,
    dialCode: `${c.idd.root}${c.idd.suffixes?.[0] ?? ""}`,
    name: c.translations?.eng?.common ?? c.name.common,
  }))
  .sort((a, b) => a.name.localeCompare(b.name, "en"));

interface Props {
  id: string;
  register: UseFormRegister<FormData>
  ref: Ref<HTMLSelectElement>
}

export const PhoneLadaSelector = ({ id, register, ref }: Props) => {
  return (
    <select
      { ...register("lada")}
      id={id}
      ref={ref}
      defaultValue={'MX'}
      className="appearance-none bg-[url(/assets/icons/chevron.svg)] bg-no-repeat bg-position-[center_right_1rem]"
    >
      {countryCodes.map((country) => (
        <option
          key={country.iso}
          value={country.iso}
          data-dial-code={country.dialCode}
        >
          {country.dialCode} {country.name}
        </option>
      ))}
    </select>
  );
};
