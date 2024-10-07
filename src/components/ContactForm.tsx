"use client";

import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useForm } from "react-hook-form";
import Toast from "./ui/Toast";

// Define the form data type
type FormData = {
  first_name: string;
  last_name: string;
  phone: string;
  role: "individual" | "business";
  company_name: string;
  loan_amount: string;
  email: string;
  website?: string;
  memo?: string;
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const ContactForm: React.FC = () => {
  const [toast, setToast] = useState<{
    message: string;
    type: "SUCCESS" | "ERROR";
  } | null>(null);

  const showToast = (message: string, type: "SUCCESS" | "ERROR") => {
    setToast({ message, type });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const { error } = await supabase.from("contact_form").insert([data]);

      if (error) throw error;
      showToast("Form Submitted!", "SUCCESS");
    } catch (error) {
      console.log(error);
      showToast("Internal Server Error!", "ERROR");
    }
  };

  return (
    <div className="m-12 border-2 border-zinc-500 p-4 md:p-8 lg:px-12 lg:mt-56 bg-white shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-zinc-500">
        Contact Form
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <label
              htmlFor="first_name"
              className="block font-semibold text-gray-700"
            >
              First Name*
            </label>
            <input
              {...register("first_name", {
                required: "First name is required",
              })}
              type="text"
              id="first_name"
              className="px-2 mt-1 block w-2/3 rounded-xl bg-zinc-200 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.first_name && (
              <span className="text-red-500">{errors.first_name.message}</span>
            )}
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block font-semibold text-gray-700"
            >
              Last Name*
            </label>
            <input
              {...register("last_name", { required: "Last name is required" })}
              type="text"
              id="last_name"
              className="px-2 mt-1 block w-2/3 rounded-xl bg-zinc-200 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.last_name && (
              <span className="text-red-500">{errors.last_name.message}</span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <label
              htmlFor="phone"
              className="block font-semibold text-gray-700"
            >
              Phone*
            </label>
            <input
              {...register("phone", { required: "Phone is required" })}
              type="tel"
              id="phone"
              className="px-2 mt-1 block w-2/3 rounded-xl bg-zinc-200 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.phone && (
              <span className="text-red-500">{errors.phone.message}</span>
            )}
          </div>
          <div>
            <label htmlFor="role" className="block font-semibold text-gray-700">
              I am a...*
            </label>
            <select
              {...register("role", { required: "Please select an option" })}
              id="role"
              className="px-2 mt-1 block w-2/3 rounded-xl bg-zinc-200 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="">Select...</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
            {errors.role && (
              <span className="text-red-500">{errors.role.message}</span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <label
              htmlFor="company_name"
              className="block font-semibold text-gray-700"
            >
              Company Name*
            </label>
            <input
              {...register("company_name", {
                required: "Company name is required",
              })}
              type="text"
              id="company_name"
              className="px-2 mt-1 block w-2/3 rounded-xl bg-zinc-200 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.company_name && (
              <span className="text-red-500">
                {errors.company_name.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="loan_amount"
              className="block font-semibold text-gray-700"
            >
              Loan Amount*
            </label>
            <input
              {...register("loan_amount", {
                required: "Loan amount is required",
              })}
              type="text"
              id="loan_amount"
              className="px-2 mt-1 block w-2/3 rounded-xl bg-zinc-200 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.loan_amount && (
              <span className="text-red-500">{errors.loan_amount.message}</span>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold text-gray-700">
            Email*
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
            type="email"
            id="email"
            className="px-2 mt-1 block w-full rounded-xl bg-zinc-200 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div>
          <label
            htmlFor="website"
            className="block font-semibold text-gray-700"
          >
            Website
          </label>
          <input
            {...register("website")}
            type="url"
            id="website"
            className="px-2 mt-1 block w-full rounded-xl bg-zinc-200 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="memo" className="block font-semibold text-gray-700">
            Memo
          </label>
          <textarea
            {...register("memo")}
            id="memo"
            rows={3}
            className="px-2 mt-1 block w-full rounded-xl bg-zinc-200 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default ContactForm;
