import { useEffect, useRef, useState } from "react";
import { FormField } from "./form-field";
import { PhoneLadaSelector } from "./phone-lada-selector";
import { useTranslations } from "@/i18n/utils";
import { useForm } from "react-hook-form";
import { FormSended } from "./form-sended";

interface Props {
  lang: "es" | "en";
}

export interface FormData {
  name: string;
  phone: string;
  lada: string;
  email: string;
  business: string;
  message: string;
}

export const ContactForm = ({ lang }: Props) => {
  const ui = useTranslations(lang);

  const ladaRef = useRef<HTMLSelectElement>(null);

  const [sended, setSended] = useState<boolean>(false);

  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      business: "",
      message: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    const formData = {
      name: data.name,
      phone:
        ladaRef.current?.options[ladaRef.current.selectedIndex].dataset
          .dialCode + data.phone,
      email: data.email,
      business: data.business,
      message: data.message,
    };

    console.log(formData);

    setSended(true);
  });

  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
      });
    };
  }, []);

  useEffect(() => {
    console.log(sended);
  }, [sended]);

  return (
    <>
      <section>
        {screenWidth > 1024 ? (
          <form
            className="max-w-[1045px] mx-auto space-y-4 hidden lg:flex flex-col"
            id="contact-form"
            onSubmit={onSubmit}
          >
            <div className="grid grid-cols-2 gap-5">
              <FormField
                name="name"
                label={ui.contact_page.form.name_field.label}
              >
                <input
                  type="text"
                  id="name"
                  placeholder={ui.contact_page.form.name_field.placeholder}
                  required
                  {...register("name")}
                />
              </FormField>

              <FormField
                name="email"
                label={ui.contact_page.form.email_field.label}
              >
                <input
                  type="email"
                  id="email"
                  placeholder={ui.contact_page.form.email_field.placeholder}
                  required
                  {...register("email")}
                />
              </FormField>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <FormField
                name="phone"
                label={ui.contact_page.form.phone_field.label}
              >
                <div className="grid grid-cols-3 gap-4">
                  <PhoneLadaSelector
                    id="lada"
                    register={register}
                    ref={ladaRef}
                  />
                  <input
                    type="text"
                    id="phone"
                    inputMode="numeric"
                    minLength={10}
                    placeholder={ui.contact_page.form.phone_field.placeholder}
                    required
                    className="col-span-2"
                    {...register("phone")}
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(
                        /\D/g,
                        "",
                      );
                    }}
                  />
                </div>
              </FormField>

              <FormField
                name="business"
                label={ui.contact_page.form.business_field.label}
              >
                <input
                  type="text"
                  id="business"
                  placeholder={ui.contact_page.form.business_field.placeholder}
                  required
                  {...register("business")}
                />
              </FormField>
            </div>

            <FormField
              name="message"
              label={ui.contact_page.form.description_field.label}
            >
              <textarea
                id="message"
                className="resize-none"
                placeholder={ui.contact_page.form.description_field.placeholder}
                rows={4}
                required
                {...register("message")}
              ></textarea>
            </FormField>
            <button
              type="submit"
              className="uppercase px-12 py-2.5 rounded-full bg-primary hover:opacity-95 cursor-pointer ml-auto mt-1"
            >
              {ui.contact_page.form.button}
            </button>
          </form>
        ) : (
          <form
            className="max-w-96 mx-auto space-y-5 px-4 lg:hidden"
            id="contact-form"
            onSubmit={onSubmit}
          >
            <FormField
              name="name"
              label={ui.contact_page.form.name_field.label}
            >
              <input
                type="text"
                id="name"
                placeholder={ui.contact_page.form.name_field.placeholder}
                required
                {...register("name")}
              />
            </FormField>

            <FormField
              name="phone"
              label={ui.contact_page.form.phone_field.label}
            >
              <div className="grid grid-cols-2 gap-4">
                <PhoneLadaSelector
                  id="lada"
                  register={register}
                  ref={ladaRef}
                />
                <input
                  type="text"
                  id="phone"
                  inputMode="numeric"
                  minLength={0}
                  maxLength={10}
                  placeholder={ui.contact_page.form.phone_field.placeholder}
                  required
                  {...register("phone")}
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(
                      /\D/g,
                      "",
                    );
                  }}
                />
              </div>
            </FormField>

            <FormField
              name="email"
              label={ui.contact_page.form.email_field.label}
            >
              <input
                type="email"
                id="email"
                placeholder={ui.contact_page.form.email_field.placeholder}
                required
                className="placeholder:underline placeholder:underline-offset-2"
                {...register("email")}
              />
            </FormField>
            <FormField
              name="business"
              label={ui.contact_page.form.business_field.label}
            >
              <input
                type="text"
                id="business"
                placeholder={ui.contact_page.form.business_field.placeholder}
                required
                className="placeholder:underline placeholder:underline-offset-2"
                {...register("business")}
              />
            </FormField>
            <FormField
              name="message"
              label={ui.contact_page.form.description_field.label}
            >
              <textarea
                id="message"
                className="resize-none placeholder:underline placeholder:underline-offset-2"
                placeholder={ui.contact_page.form.description_field.placeholder}
                rows={4}
                required
                {...register("message")}
              ></textarea>
            </FormField>
            <button
              type="submit"
              className="uppercase px-7.5 py-1 rounded-2xl bg-primary hover:opacity-95 cursor-pointer"
            >
              {ui.contact_page.form.button}
            </button>
          </form>
        )}
      </section>

      {sended && <FormSended lang={lang} onClose={() => setSended(false)} />}
    </>
  );
};
