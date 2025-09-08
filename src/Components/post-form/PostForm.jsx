import React, { useState } from 'react'
import Button from '../Button'
import Input from '../Input'
import { useForm } from 'react-hook-form'
import RTE from '../RTE'
import ObjService from '../../appwrite/Config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useCallback } from 'react'
import Select from '../Select'

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
      defaultValues: {
          title: post?.title || "",
          slug: post?.$id || "",
          content: post?.content || "",
          status: post?.status || "active",
      },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const [isSubmitting,setisSubmitting] = useState(false);

  const submit = async (data) => {
    setisSubmitting(!isSubmitting);
    if (post) {
        const file = data.image[0] ? await ObjService.UploadFileploadFile(data.image[0]) : null;

        if (file) {
            ObjService.DeleteFile(post.featuredImage);
        }
        console.log("User id ", userData.$id);
        const dbPost = await ObjService.updatePost(post.$id, {
            ...data,
            featuredImage: file ? file.$id : undefined,
        });

        if (dbPost) {
            navigate(`/post/${dbPost.$id}`);
        }
    } else {
        const file = await ObjService.UploadFile(data.image[0]);

        if (file) {
            const fileId = file.$id;
            data.featuredImage = fileId;
            console.log("User id ", userData.$id);
            const dbPost = await ObjService.createPost({ ...data, userId: userData.$id });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        }
    }
};

const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
        return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, "-")
            .replace(/\s/g, "-");

    return "";
}, []);

React.useEffect(() => {
    const subscription = watch((value, { name }) => {
        if (name === "title") {
          // Set kar do value slug pe slugtransform ki 
            setValue("slug", slugTransform(value.title), { shouldValidate: true });
        }
    });

    return () => subscription.unsubscribe(); 
    // That return statement is used for optimisation 
}, [watch, slugTransform, setValue]);

return (
  <div className="w-full">
    <form onSubmit={handleSubmit(submit)} className="mx-auto max-w-5xl bg-white rounded-2xl shadow-md ring-1 ring-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 md:p-10">
      {/* Left / Main column (2/3 on large screens) */}
      <div className="lg:col-span-2">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 mb-1">
            {post ? "Edit Post" : "Create New Post"}
          </h3>
          <p className="text-sm text-gray-500">
            Add title, content and featured image for your post.
          </p>
        </div>

        <div className="space-y-5">
          <Input
            label="Title"
            placeholder="Enter post title"
            className="mb-0"
            {...register("title", { required: true })}
          />

          <Input
            label="Slug"
            placeholder="auto-generated from title"
            className="mb-0"
            {...register("slug", { required: true })}
            onInput={(e) => {
                setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
            }}
          />

          <div>
           
            <div className="rounded-lg  overflow-hidden">
              <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
          </div>
        </div>
      </div>

      {/* Right / Sidebar column (1/3 on large screens) */}
      <div className="lg:col-span-1 space-y-5">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 ">
          <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image</label>
          <Input
            type="file"
            className="mb-2"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
          />

          {/* Preview box */}
          {/* <div className="mt-3">
            {post ? (
              <div className="w-full rounded-lg overflow-hidden border border-dashed border-gray-200 bg-white">
                <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                  <img
                    src={ObjService.getFilePreview(post.featuredImage)}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-3 text-xs text-gray-500">
                  Current image — it will be replaced if you choose a new file.
                </div>
              </div>
            ) : (
              <div className="w-full h-40 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-sm text-gray-400">
                No image selected
              </div>
            )}
          </div> */}
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
          <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
          <Select
            options={["Active", "Inactive"]}
            label="status"
            className="mb-0"
            {...register("status", { required: true })}
          />
        </div>

        <div className="pt-2">
          <Button
            loading={isSubmitting}
            type="submit"
            bgColor={post ? "bg-green-600" : undefined}
            className={`w-full py-3 text-white font-semibold rounded-lg transition ${
              post ? "bg-green-600 hover:bg-green-700" : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {post ? "Update Post" : "Publish Post"}
          </Button>
        </div>

        {/* small note */}
        <p className="text-xs text-gray-500 mt-2">
          Tip: Slug will be generated automatically from title but you can edit it manually.
        </p>
      </div>
    </form>
  </div>
);
}