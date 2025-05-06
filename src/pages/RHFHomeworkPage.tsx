const RHFHomeworkPage = () => {
    return (
        <>
        <div className="flex flex-col justify-center items-center mt-12 border py-4">
            <h1 className="text-2xl font-bold">React Hook Form Homework</h1>

            <div>
                <form action="" className="flex flex-col border rounded justify-center items-center py-4 px-8 mt-4">
                    <p className="text-xl font-bold text-blue-700">Registration Form </p>
                    <label>
                        <input type="text" className="border-b border-teal-600 mt-6 pb-1  focus:outline-none" placeholder="Username"/>
                    </label>
                    <label>
                        <input type="email" className="border-b border-teal-600 mt-6 pb-1  focus:outline-none" placeholder="Email"/>
                    </label>
                    <label>
                        <input type="password" className="border-b border-teal-600 mt-6 pb-1  focus:outline-none" placeholder="Password"/>
                    </label>
                    <label>
                        <input type="number" className="border-b border-teal-600 mt-6 pb-1  focus:outline-none" placeholder="Age"/>
                    </label>
                    <button className="bg-gradient-to-r bg-blue-500 to-60% to-teal-500 rounded-full px-4 py-2 mt-4 text-white font-semibold cursor-pointer">Create Account</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default RHFHomeworkPage