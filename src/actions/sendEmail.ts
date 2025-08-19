"use server";

import React from "react";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";
import ContactFormEmail from "@/components/contact-form-email";
import { IFormData } from "@/lib/types";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: IFormData) => {
  // simple server-side validation
  if (!validateString(formData.senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(formData.message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "ngodinhdai77@gmail.com",
      subject: "Message from contact form",
      replyTo: formData.senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: formData.message,
        senderEmail: formData.senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
