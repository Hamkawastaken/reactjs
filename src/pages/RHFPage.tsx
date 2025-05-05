import { useForm } from "react-hook-form"

type RegisterFormSchema = {
    username: string;
    password: string;
}

const RHFPage = () => {


    const form = useForm<RegisterFormSchema>();

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
                <label>
                    Password : 
                    <input type="password" placeholder="Your Password" className="border rounded py-1 px-2" {...form.register("password")} />
                </label>
                <button className="text-white bg-sky-500 font-semibold">Register</button>
            </form>
        </div>
    )
}

export default RHFPage