import { useTranslations } from "@/i18n/utils";

interface Props {
  lang: "es" | "en";
  onClose: () => void;
}

export const FormSended = ({ lang, onClose }: Props) => {
  const ui = useTranslations(lang);

  return (
    <div className="fixed z-60 bg-primary h-screen w-screen top-0 left-0">
      <div className="flex justify-between items-center py-8 max-w-96 mx-auto px-6 lg:container">
        <img src="/assets/icons/notalias.svg" alt="Not Alias" />

        <button
          id="close-menu"
          onClick={onClose}
          className="cursor-pointer size-6"
        >
          <img src="/assets/icons/quit.svg" alt="X" />
        </button>
      </div>
      <div className="rounded-lg pb-16 pt-24 lg:size-full lg:px-0 lg:py-0 max-w-96 mx-auto lg:max-w-none lg:mx-0">
        <article className="text-center flex flex-col items-center justify-center gap-10 h-full lg:gap-3">
          <h1 className="text-[64px] lg:text-8xl font-arvo w-70 lg:w-120 leading-[0.90]">
            {ui.contact_page.form_modal.title}
          </h1>
          <p className="text-lg lg:text-xl w-50 leading-snug lg:w-96 lg:leading-relaxed lg:mt-6 lg:mb-12">
            {ui.contact_page.form_modal.description}
          </p>
          <img src="/assets/icons/planet-black.svg" />
        </article>
      </div>
    </div>
  );
};
