"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { usePathname, useRouter } from "next/navigation";
import { updateUser } from "@/lib/actions/user.action";

const schema = Yup.object().shape({
  username: Yup.string().min(5).max(50),
  bio: Yup.string().min(10).max(150),
});

const Profile = ({ user, clerkId }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  console.log(user);
  const { username, bio } = JSON.parse(user);
  const pathname = usePathname();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: username || "",
      bio: bio || "",
    },
  });

  const onSubmit = async (values) => {
    setIsSubmitting(true);

    try {
      await updateUser({
        clerkId,
        updateData: {
          username: values.username,
          bio: values.bio,
        },
        path: pathname,
      });

      router.back();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          <label className="text-light-1" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            placeholder="Your name..."
            {...register("username")}
            className="bg-dark-4 p-4 rounded-xl text-light-1"
          />
          <p className="text-red-600">{errors.username?.message}</p>
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-light-1" htmlFor="bio">
            Bio
          </label>
          <input
            id="bio"
            placeholder="Tell us about you..."
            {...register("bio")}
            className="bg-dark-4 p-4 rounded-xl text-light-1"
          />
          <p className="text-red-600">{errors.bio?.message}</p>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="text-white rounded-xl bg-red-500 p-4 font-semibold w-full text-xl hover:bg-red-700 transition-all duration-300 ease-in-out"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
