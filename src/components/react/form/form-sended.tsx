import { useTranslations } from "@/i18n/utils";

interface Props {
  lang: "es" | "en";
  onClose: () => void;
}

export const FormSended = ({ lang, onClose }: Props) => {
  const ui = useTranslations(lang);

  return (
    <div
      className="fixed inset-0 z-60 bg-primary h-screen w-screen"
    >
      <img src="/assets/icons/notalias.svg" alt="Not Alias" className="m-10 w-36" />
      <div className="rounded-lg h-[90dvh] w-[90dvw] -translate-x-1/2 absolute bottom-5 left-1/2 pb-16 pt-24 lg:size-full lg:px-0 lg:py-0 lg:bottom-[initial] lg:top-0">
        <article className="text-center flex flex-col items-center justify-center gap-16 h-full lg:gap-3">
          <h1 className="text-3xl lg:text-8xl lg:w-100 leading-[0.90]">{ui.contact_page.form_modal.title}</h1>
          <p className="text-sm lg:text-xl w-64 leading-[1.15] lg:w-96 lg:leading-relaxed lg:mt-6 lg:mb-12">
            {ui.contact_page.form_modal.description}
          </p>
          <img src="/assets/icons/planet-black.svg" />
          <button onClick={onClose} className="lg:top-4 lg:right-10 lg:absolute lg:size-8">
            <img src="/assets/icons/plus.svg" className="mt-auto brightness-0 size-full" />
          </button>
        </article>
      </div>
    </div>
  );
};
