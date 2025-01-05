import axios from "axios";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useLoaderData } from "react-router";
import { useEffect } from "react";

const UpdateItems = () => {
  const imageApi = import.meta.env.VITE_IMAGE_API_KEY;
  const axiosSecure = useAxiosSecure();
  const item = useLoaderData(); // Loaded data
  const { register, handleSubmit, reset } = useForm();
  console.log(item)

  useEffect(() => {
    // Ensure the form values are set once the data is loaded
    if (item && item[0]) {
      reset({
        name: item[0].name,
        price:item[0].price,
        recipe:item[0].recipe,
        
        // Setting default values dynamically
         // Set other default values if needed
      });
    }
  }, [item, reset]); // Runs when `item` changes

  const onSubmit = async (data) => {
    console.log(data); // Checking all data
    const fileData = data.file[0]; // It stores the image file

    const formData = new FormData();
    formData.append("image", fileData);

    // Upload image
    const upload = await axios.post(
      `https://api.imgbb.com/1/upload?key=${imageApi}`,
      formData
    );
    console.log(upload.data.data.url); // This is the image URL

    const combinedData = { ...data, image: upload.data.data.url };

   const updateMenu =await axios.post(`http://localhost:5000/menu/updatemenu/${item[0]._id}`,combinedData)



  };

  return (
    <div>
      <div className="bg-slate-100 w-[500px]">
        <form className="flex flex-col  m-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex  flex-col mt-8">
            <label htmlFor="">Enter Recipe name *</label>
            <input
              placeholder="Enter Recipe name"
              className="input input-bordered h-8 "
              {...register("name")}
            />
          </div>

          <div className="flex gap-14">
            <div className="my-4 flex flex-col">
              <label htmlFor="">Select a Category</label>
              <select
                defaultValue={"default"}
                {...register("category")}
                className="select select-bordered h-8 "
              >
                <option disabled value={"default"}>
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            <div className="flex my-4 flex-col">
              <label htmlFor="">Price*</label>
              <input
                {...register("price", { required: true })}
                type="text"
                placeholder="Price *"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
          </div>

          <label htmlFor="">Recipe Details*</label>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-primary"
            placeholder="Bio"
          ></textarea>

          <div className="my-8 flex flex-col gap-4 ">
            <input {...register("file")} type="file" />
            <input
              className="btn btn-primary w-[100px]"
              type="submit"
              value={"Update Items"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItems;
