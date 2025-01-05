import axios from "axios";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AddItems = () => {
  const imageApi =import.meta.env.VITE_IMAGE_API_KEY

  const axiosSecure =useAxiosSecure()
  const { register, handleSubmit,reset } = useForm();

  const onSubmit = async(data) => {
    
    console.log(data) //checking al data
    const fileData=data.file[0] //it store the iamge url
    // console.log(imageUrl)


    const formData = new FormData();
    formData.append("image", fileData);


  // console.log(imageApi)
    const upload= await axios.post(`https://api.imgbb.com/1/upload?key=${imageApi}`,formData)
    console.log(upload.data.data.url) //this the image url
  // const imgageUrl=upload.data.data.url
    const combinedData={...data,...{"image":upload.data.data.url}}



    axiosSecure.post('/addrecipie',combinedData)
    .then(res=>{
      console.log("its from add recipie",res)
    })

    reset()
    

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
        <label htmlFor="">Select a Catagory</label>
        <select defaultValue={"default"} {...register("category" )} className="select select-bordered h-8 ">
          <option disabled value={"default"}>
            Select a catagory
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
    {...register("price",{required:true})}
  type="text"
  placeholder="Price *"
  className="input input-bordered input-primary w-full max-w-xs"
/>
</div>

     </div>
        <label htmlFor="">Recipe Details*</label>
        <textarea {...register("recipe",{required:true})} className="textarea textarea-primary" placeholder="Bio"></textarea>

        <div className="my-8 flex flex-col gap-4 ">
        <input {...register("file")} type="file" />
        <input className="btn btn-primary w-[100px]" type="submit" value={"Add Items"}/>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddItems;
