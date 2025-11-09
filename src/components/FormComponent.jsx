import { useForm } from "react-hook-form";
import ApiService from "../utils/ApiService";
import { toast } from "react-toastify";

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Sending Data:", data);

    try {
      const res = await ApiService(data); // ✅ Wait for API
      console.log("Server Response:", res);

      toast.success("Message sent successfully!");
      reset();
    } catch (err) {
      toast.error("Failed to send. Try again.", err);
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      
      {/* Name */}
      <input
        type="text"
        className="bg-white text-slate-600 w-120 px-4 text-sm font-content"
        {...register("name", {
          required: "Name is required",
          minLength: { value: 3, message: "Name must be at least 3 characters" },
        })}
        placeholder="Your name*"
      />
      {errors.name && (
        <span className="text-red-500 text-[10px]">{errors.name.message}</span>
      )}

      {/* Email */}
      <input
        type="email"
        className="bg-white text-slate-600 w-120 px-4 text-sm font-content"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter a valid email address",
          },
        })}
        placeholder="Your email*"
      />
      {errors.email && (
        <span className="text-red-500 text-[10px]">{errors.email.message}</span>
      )}

      {/* Phone */}
      <input
        type="tel"
        className="bg-white text-slate-600 w-120 px-4 text-sm font-content"
        {...register("phone", {
          required: "Phone number is required",
          pattern: {
            value: /^[0-9]{10}$/,
            message: "Phone number must be exactly 10 digits",
          },
        })}
        placeholder="Your phone no.*"
      />
      {errors.phone && (
        <span className="text-red-500 text-[10px]">{errors.phone.message}</span>
      )}

      {/* Message */}
      <textarea
        className="px-3 py-1 bg-white text-slate-600 font-content text-sm w-120"
        {...register("message", {
          required: "Message is required",
          minLength: { value: 5, message: "Message must be at least 5 characters long" },
        })}
        placeholder="Your message*"
      />
      {errors.message && (
        <span className="text-red-500 text-[10px]">{errors.message.message}</span>
      )}

      {/* Submit Button (Centered Now) */}
      <button
        type="submit"
        className="bg-[#F15D2B] px-4 py-2 text-white text-sm rounded-full font-content w-fit mx-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
