"use client";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// import { createPost } from '../actions/createPost';
import Image from "next/image";
import UserFakeImg from "../public/assets/user-fake.jpg";
import CloseIcon from "../public/assets/close-create-post.svg";
import { useRouter } from "next/navigation";
import useLocalStorage from "../hooks/useLocalStorage";

const schema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  content: Yup.string()
    .required("Content is required")
    .min(6, "Content must be at least 6 characters"),
  category: Yup.string().required("Category is required"),
  accountId: Yup.string(),
});

const PostForm = () => {
  const router = useRouter();

  const [titleDraft, setTitleDraft] = useLocalStorage("titleDraft", "");
  const [textDraft, setTextDraft] = useLocalStorage("textDraft", "");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: titleDraft,
      content: textDraft,
      category: "",
    },
  });

  const handleCloseBtn = () => {
    router.back();
  };

  const onSubmit = async (values) => {
    // await createPost({
    //   title: values.title,
    //   text: values.content,
    //   category: values.category,
    // });
    console.log(values);
    localStorage.removeItem("titleDraft");
    localStorage.removeItem("textDraft");
    reset();
    router.back();
  };

  return (
    <div className="w-full max-w-[800px] mx-auto p-6 bg-white rounded-xl flex flex-col gap-8">
      <div className="flex justify-end items-center">
        <button
          onClick={handleCloseBtn}
          className="text-black"
          aria-label="Close"
        >
          <Image src={CloseIcon} alt="close-icon" width={20} height={20} />
        </button>
      </div>
      <div className="w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full flex flex-col">
            <div className="w-full flex gap-4">
              <div className="">
                <Image
                  src={UserFakeImg}
                  alt="user"
                  width={60}
                  height={60}
                  className="rounded-full w-full"
                />
              </div>
              <div className="w-full">
                <div className="mt-2">
                  <input
                    id="title"
                    placeholder="Scrie un titlu convingator"
                    onInput={(e) =>
                      setTitleDraft((e.target as HTMLInputElement).value)
                    }
                    {...register("title")}
                    className="w-full border-b font-semibold text-xl outline-none"
                  />
                  <p className="text-red-600">{errors.content?.message}</p>
                </div>

                <div className="w-full my-4">
                  <textarea
                    id="content"
                    placeholder="Scrie o poveste marfa..."
                    onInput={(e) =>
                      setTextDraft((e.target as HTMLInputElement).value)
                    }
                    {...register("content")}
                    className="w-full border-b font-normal text-xl outline-none h-48 resize-none"
                  />
                  <p className="text-red-600">{errors.content?.message}</p>
                </div>

                <div>
                  <select
                    id="category"
                    name="category"
                    className="mt-1 rounded-lg border text-gray-400 border-gray-500 p-2 w-[300px]"
                    {...register("category")}
                  >
                    <option value="">Te rog alege un subiect...</option>
                    <option className="text-black" value="sex">
                      Sex
                    </option>
                    <option className="text-black" value="alcool">
                      Alcool
                    </option>
                    <option className="text-black" value="droguri">
                      Droguri
                    </option>
                  </select>
                  <p className="text-red-600">{errors.category?.message}</p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="text-white rounded-xl bg-red-500 p-4 font-semibold w-full text-xl hover:bg-red-700 transition-all duration-300 ease-in-out"
              >
                Posteaza
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
