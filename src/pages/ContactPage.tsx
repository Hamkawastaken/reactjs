const ContactPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-12 border py-4">
        <form
          action=""
          className="bg-blue-500 rounded-xl w-72 py-4 px-4 flex flex-col justify-center items-center gap-y-2"
        >
          <h1 className="text-white text-xl font-semibold">Contact Me</h1>
          <input
            type="text"
            className="bg-white rounded w-full border px-2 py-1 text-xs"
            placeholder="Name"
          />
          <input
            type="text"
            className="bg-white rounded w-full border px-2 py-1 text-xs"
            placeholder="Subject"
          />
          <input
            type="text"
            className="bg-white rounded w-full border px-2 py-1 text-xs"
            placeholder="Email"
          />
          <textarea
            name=""
            id=""
            className="bg-white rounded w-full border px-2 py-1 text-xs"
          ></textarea>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
