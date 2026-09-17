"use client"

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import SubmitBtn from "./button/submit-btn";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const { t } = useLanguage();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm()

  const messageValue = watch("message", "")
  const [justSent, setJustSent] = useState(false);

  const onSubmit = async (data: any) => {
    const { data: response, error } = await sendEmail(data);
    if (error) {
      toast.error(error);
      return;
    }
    toast.success(t.contact.successToast);
    reset();
    setJustSent(true);
    setTimeout(() => setJustSent(false), 2500);
  }

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,42rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>{t.contact.heading}</SectionHeading>

      <p className="text-center text-steel-gray dark:text-white/60 mb-8">
        {t.contact.description}{" "}
        <a className="font-semibold text-ocean-blue hover:text-sky-link transition-colors duration-200" href="mailto:ngodinhdai77@gmail.com">
          ngodinhdai77@gmail.com
        </a>{" "}
        {t.contact.descriptionSuffix}
      </p>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          <label className="text-sm font-semibold text-steel-gray dark:text-white/80">
            {t.contact.emailLabel}
          </label>
          <input
            {...register("senderEmail", { required: true, maxLength: 500 })}
            className={`h-12 px-4 rounded-xl border bg-white-canvas dark:bg-white/5 text-jet-black dark:text-white placeholder-medium-gray dark:placeholder-white/30 focus:outline-none transition-all duration-200 ${
              errors.senderEmail
                ? "border-red-400 focus:shadow-[0_0_0_4px_rgba(248,113,113,0.12)]"
                : "border-frost-gray dark:border-white/8 focus:border-ocean-blue focus:shadow-[0_0_0_4px_rgba(0,113,227,0.12)]"
            }`}
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder={t.contact.emailPlaceholder}
          />
          {errors.senderEmail && (
            <span className="text-xs text-red-500">{t.contact.emailRequired}</span>
          )}
        </motion.div>

        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-steel-gray dark:text-white/80">
              {t.contact.messageLabel}
            </label>
            <span className={`text-xs transition-colors duration-200 ${
              (messageValue?.length ?? 0) > 4500
                ? "text-red-400"
                : (messageValue?.length ?? 0) > 3000
                ? "text-amber-400"
                : "text-medium-gray dark:text-white/30"
            }`}>
              {messageValue?.length ?? 0} / 5000
            </span>
          </div>
          <textarea
            {...register("message", { required: true, maxLength: 5000 })}
            className={`h-40 px-4 py-3 rounded-xl border bg-white-canvas dark:bg-white/5 text-jet-black dark:text-white placeholder-medium-gray dark:placeholder-white/30 focus:outline-none transition-all duration-200 resize-none max-h-64 ${
              errors.message
                ? "border-red-400 focus:shadow-[0_0_0_4px_rgba(248,113,113,0.12)]"
                : "border-frost-gray dark:border-white/8 focus:border-ocean-blue focus:shadow-[0_0_0_4px_rgba(0,113,227,0.12)]"
            }`}
            name="message"
            placeholder={t.contact.messagePlaceholder}
            required
            maxLength={5000}
          />
          {errors.message && (
            <span className="text-xs text-red-500">{t.contact.messageRequired}</span>
          )}
        </motion.div>

        <motion.div
          className="flex justify-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <SubmitBtn pending={isSubmitting} success={justSent} label={t.contact.submitBtn} />
        </motion.div>
      </form>
    </motion.section>
  );
}

export default Contact
