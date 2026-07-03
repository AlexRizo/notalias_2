import { useTranslations } from "@/i18n/utils";

interface Props {
  lang: "es" | "en";
  onClose: () => void;
}

export const FormSended = ({ lang, onClose }: Props) => {
  const ui = useTranslations(lang);

  return (
    <div
      className="fixed inset-0 z-40 bg-[#D9D9D9]/80 hidden"
    >
      <div className="bg-black rounded-lg h-[90dvh] w-[90dvw] -translate-x-1/2 absolute bottom-5 left-1/2 pb-16 pt-24">
        <article className="text-white text-center flex flex-col items-center justify-center gap-16 h-full">
          <h1 className="text-3xl">{ui.contact_page.form_modal.title}</h1>
          <p className="text-sm w-64 leading-[1.15]">
            {ui.contact_page.form_modal.description}
          </p>
          <img src="/assets/icons/stars.svg" />
          <button onClick={onClose}>
            <img src="/assets/icons/plus.svg" className="mt-auto" />
          </button>
        </article>
      </div>
    </div>
  );
};
