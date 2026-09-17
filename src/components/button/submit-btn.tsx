import React from "react";
import { FaCheck, FaPaperPlane } from "react-icons/fa";

type Props = {
  pending: boolean;
  success?: boolean;
  label?: string;
}

const SubmitBtn = ({ pending, success = false, label = "Submit" }: Props) => {
  return (
    <button
      type="submit"
      className={`group flex items-center justify-center gap-2 h-[3rem] w-[8rem] text-white rounded-full outline-none transition-all active:scale-95 disabled:scale-100 disabled:opacity-60 ${
        success ? "bg-verdant-green" : "bg-ocean-blue hover:bg-sky-link"
      }`}
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
      ) : success ? (
        <FaCheck className="text-base" />
      ) : (
        <>
          {label}{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
};

export default SubmitBtn;