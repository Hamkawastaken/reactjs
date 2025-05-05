import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { z } from "zod";

// type RegisterFormSchema = {
//     username: string;
//     password: string;
// }

const registerFormSchema = z.object({
    username: z.string().min(3).max(10),
    password: z.string().min(8),
    age: z.coerce.number().min(18)
})

type RegisterFormSchema = z.infer<typeof registerFormSchema>

const RHFPage = () => {

    const form = useForm<RegisterFormSchema>({
        resolver: zodResolver(registerFormSchema)
    });

    const handleRegisterUser = (values: RegisterFormSchema) => {
        alert("Form Submitted");
        console.log(values);
    }

    return (
        <div className="flex flex-col justify-center items-center mt-12 border py-4">
            <h1 className="text-2xl font-semibold">React Hook Form</h1>

            <form onSubmit={form.handleSubmit(handleRegisterUser)} className="border p-2 mt-2 flex flex-col gap-y-2">
                <label>
                    Username : 
                    <input type="text" placeholder="Your Username" className="border rounded py-1 px-2" {...form.register("username")} />
                </label>
                <span className="text-red-500">
                    {form.formState.errors.username?.message}
                </span>
                <label>
                    Password : 
                    <input type="password" placeholder="Your Password" className="border rounded py-1 px-2" {...form.register("password")} />
                </label>
                <span className="text-red-500">
                    {form.formState.errors.password?.message}
                </span>
                <label>
                    Age : 
                    <input type="number" placeholder="Your Age" className="border rounded py-1 px-2" {...form.register("age")} />
                </label>
                <span className="text-red-500">
                    {form.formState.errors.age?.message}
                </span>
                <button className="text-white bg-sky-500 font-semibold">Register</button>
            </form>
        </div>
    )
}

export default RHFPage