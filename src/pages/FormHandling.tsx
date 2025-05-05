import { useState } from "react";

const FormHandling = () => {
  const [emailForm, setEmailForm] = useState("");
  const [errorForm, setErrorForm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmailForm(e.target.value);

  const handleSubmit = () => {
    if (!emailForm) {
      setErrorForm("Email Cannot Be Empty");
      return;
    }

    if (!emailForm.includes("@")) {
      setErrorForm("Email Must Contain : @");
      return;
    }

    if (emailForm.includes(" ")) {
      setErrorForm("No Space Allowed!");
      return;
    }

    if (emailForm.length < 8) {
      setErrorForm("Email Is Too Short!");
    }

    setErrorForm("");
    alert(`Email Telah Diisi : ${emailForm} `);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-12 border py-4">
      <form action="" className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={emailForm}
          onChange={handleChange}
          id="email"
          className="border rounded px-2 py-1 mt-1"
          placeholder="Masukan Email"
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-sky-500 text-white mt-2 rounded cursor-pointer"
        >
          Kirim
        </button>

        {errorForm && <p className="text-red-500">{errorForm}</p>}
      </form>

      <br />
      <p>Email Kamu : {emailForm} </p>
    </div>
  );
};

export default FormHandling;
