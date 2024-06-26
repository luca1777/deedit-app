"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Image from "next/image";
import CloseIcon from "../public/assets/close-create-post.svg";
import { useRouter } from "next/navigation";
import useLocalStorage from "../hooks/useLocalStorage";
import { createPost } from "@/lib/actions/post.action";

const schema = Yup.object().shape({
  content: Yup.string()
    .required("Content is required")
    .min(6, "Content must be at least 6 characters"),
  category: Yup.string().required("Category is required"),
});

const PostForm = ({ username, userPicture, authorId }) => {
  const router = useRouter();
  const [textDraft, setTextDraft] = useLocalStorage("textDraft", "");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      content: textDraft,
      category: "",
    },
  });

  const handleCloseBtn = () => {
    router.back();
  };

  const onSubmit = async (values) => {
    try {
      await createPost({
        author: JSON.parse(authorId),
        content: values.content,
        category: values.category,
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
    localStorage.removeItem("textDraft");
    reset();
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
            <div className="w-full flex gap-3">
              <div className="">
                <Image
                  src={userPicture}
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full w-full"
                />
              </div>
              <div className="w-full">
                <div className="w-full">
                  <p className="font-semibold">{username}</p>
                </div>
                <div className="w-full mb-4 mt-2">
                  <textarea
                    id="content"
                    placeholder="What's on your mind?"
                    onInput={(e) =>
                      setTextDraft((e.target as HTMLInputElement).value)
                    }
                    {...register("content")}
                    className="w-full border-b font-normal outline-none h-36 resize-none"
                  />
                  <p className="text-red-600">{errors.content?.message}</p>
                </div>

                <div>
                  <select
                    id="category"
                    name="category"
                    className="mt-1 rounded-lg border-2 text-gray-400 border-gray-500 p-2 w-full"
                    {...register("category")}
                  >
                    <option value="">Please choose a category...</option>
                    <option className="text-black" value="funny">
                      Funny
                    </option>
                    <option className="text-black" value="sad">
                      Sad
                    </option>
                    <option className="text-black" value="love">
                      Love
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
