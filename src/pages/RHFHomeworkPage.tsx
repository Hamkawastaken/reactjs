import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const SignUpSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .regex(/[A-Z]/, { message: "Must contain 1 uppercase" })
    .regex(/[0-9]/, { message: "Must contain 1 number" }),
  age: z.coerce.number().min(18),
});

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

const RHFHomeworkPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit = (values: SignUpSchemaType) => {
    alert(JSON.stringify(values));
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-12 border py-4">
        <h1 className="text-2xl font-bold">React Hook Form Homework</h1>

        <div>
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col border rounded justify-center items-center py-4 px-8 mt-4"
          >
            <p className="text-xl font-bold text-blue-700">
              Registration Form{" "}
            </p>
            <label>
              <input
                type="text"
                className="border-b border-teal-600 mt-6 pb-1  focus:outline-none"
                placeholder="Username"
                {...register("username")}
              />
            </label>
            {errors.username && (
              <span className="text-xs text-red-500 mt-2">
                {errors.username.message}
              </span>
            )}
            <label>
              <input
                type="email"
                className="border-b border-teal-600 mt-6 pb-1  focus:outline-none"
                placeholder="Email"
                {...register("email")}
              />
            </label>
            {errors.email && (
              <span className="text-xs text-red-500 mt-2">
                {errors.email.message}
              </span>
            )}
            <label>
              <input
                type="password"
                className="border-b border-teal-600 mt-6 pb-1  focus:outline-none"
                placeholder="Password"
                {...register("password")}
              />
            </label>
            {errors.password && (
              <span className="text-xs text-red-500 mt-2">
                {errors.password.message}
              </span>
            )}
            <label>
              <input
                type="number"
                className="border-b border-teal-600 mt-6 pb-1  focus:outline-none"
                placeholder="Age"
                {...register("age")}
              />
            </label>
            {errors.age && (
              <span className="text-xs text-red-500 mt-2">
                {errors.age.message}
              </span>
            )}
            <button className="bg-gradient-to-r bg-blue-500 to-60% to-teal-500 rounded-full px-4 py-2 mt-4 text-white font-semibold cursor-pointer">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RHFHomeworkPage;
