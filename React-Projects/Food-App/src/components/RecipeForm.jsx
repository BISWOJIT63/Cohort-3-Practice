import { ImagePlus, Plus } from "lucide-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { MyStore } from "../context/MyStore";

const RecipeForm = () => {
    const navigate = useNavigate();
const {onAddRecipe} = useContext(MyStore);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  let onHandleSubmit = (data) => {
    console.log(data);
    onAddRecipe(data);
    navigate("/recipes")
    reset();
  };
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-gray-900">Add New Recipe</h2>

        <p className="text-sm text-gray-500 mt-1">Create your own recipe</p>
      </div>

      <form onSubmit={handleSubmit(onHandleSubmit)} className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">
            Recipe Name
          </label>

          <input
            {...register("name", {
              required: "Please enter a recipe name.",
            })}
            type="text"
            placeholder="Chicken Biryani"
            className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-orange-500"
          />
          {errors.name && (
            <p className="mt-1.5 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Description
          </label>

          <textarea
            {...register("description", {
              required: "Please enter recipe description.",
            })}
            rows="3"
            placeholder="Write recipe description..."
            className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-xl outline-none resize-none focus:border-orange-500"
          />
          {errors.description && (
            <p className="mt-1.5 text-sm text-red-500">
              {errors.description.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Price</label>

          <input
            {...register("price", {
              required: "Please enter amount.",
            })}
            type="number"
            placeholder="199"
            className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-orange-500"
          />
          {errors.price && (
            <p className="mt-1.5 text-sm text-red-500">
              {errors.price.message}
            </p>
          )}
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Time</label>

          <input
            {...register("time", {
              required: "Please enter recipe image.",
            })}
            type="number"
            placeholder="30"
            className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-orange-500"
          />
          {errors.time && (
            <p className="mt-1.5 text-sm text-red-500">{errors.time.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Image URL</label>

          <div className="relative">
            <ImagePlus
              size={18}
              className="absolute left-3 top-3.5 text-gray-400"
            />

            <input
              {...register("image", {
                required: "Please enter recipe image.",
              })}
              type="text"
              placeholder="https://..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-orange-500"
            />
            {errors.image && (
              <p className="mt-1.5 text-sm text-red-500">
                {errors.image.message}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
        >
          <Plus size={19} />
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
