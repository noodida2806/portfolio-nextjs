"use client"

import React from "react";
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
  } = useForm()

  const onSubmit = async (data: any) => {
    const { data: response, error } = await sendEmail(data);
    if (error) {
      toast.error(error);
      return;
    }
    toast.success(t.contact.successToast);
    reset();
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

      <p className="text-center text-gray-700 dark:text-white/80 mb-8">
        {t.contact.description}{" "}
        <a className="font-semibold text-violet-600 dark:text-blue-400 hover:underline transition" href="mailto:ngodinhdai77@gmail.com">
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
          <label className="text-sm font-semibold text-gray-700 dark:text-white/80">
            {t.contact.emailLabel}
          </label>
          <input
            {...register("senderEmail", { required: true, maxLength: 500 })}
            className="h-12 px-4 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/30 focus:border-violet-500 dark:focus:border-violet-400 focus:outline-none focus:shadow-[0_0_0_4px_rgba(124,58,237,0.1)] dark:focus:shadow-[0_0_0_4px_rgba(124,58,237,0.2)] transition-all duration-200"
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
          <label className="text-sm font-semibold text-gray-700 dark:text-white/80">
            {t.contact.messageLabel}
          </label>
          <textarea
            {...register("message", { required: true, maxLength: 5000 })}
            className="h-40 px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/30 focus:border-violet-500 dark:focus:border-violet-400 focus:outline-none focus:shadow-[0_0_0_4px_rgba(124,58,237,0.1)] dark:focus:shadow-[0_0_0_4px_rgba(124,58,237,0.2)] transition-all duration-200 resize-none"
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
          <SubmitBtn pending={isSubmitting} label={t.contact.submitBtn} />
        </motion.div>
      </form>
    </motion.section>
  );
}

export default Contact
