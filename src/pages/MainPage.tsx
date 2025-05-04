import { useState } from "react";

const MainPage = () => {
  const [fullNameInput, setFullNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const handleSubmit = () => {};

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-12 border py-4">
        <h1 className="text-4xl font-bold">Home Page</h1>
        <p className="px-28 mt-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quod
          dolor quia ratione nesciunt perspiciatis ab numquam quibusdam, quo
          perferendis, et hic voluptates itaque consequuntur eveniet est! Nulla
          natus saepe ullam perspiciatis cupiditate quisquam magnam, dicta
          fugiat! Doloribus dignissimos debitis earum, esse numquam ab sequi
          animi quis repellendus ad facilis culpa placeat mollitia a hic,
          quaerat libero nobis similique maxime? Quasi obcaecati at consequatur
          similique pariatur quidem, necessitatibus dolorem maiores quis
          voluptatibus aspernatur magnam illum ipsa beatae rem rerum cum, qui
          quas harum laudantium perferendis quos voluptate! Obcaecati
          necessitatibus consequatur enim a ut tenetur
        </p>

        <br />
        <p> Full Name : {fullNameInput} </p>
        <p> Email : {emailInput} </p>
        <form action="" className="flex flex-col mt-4 border p-4 rounded-lg">
          <label htmlFor="full-name">Full Name</label>
          <input
            onChange={(e) => setFullNameInput(e.target.value)}
            type="text"
            id="full-name"
            className="border rounded-lg p-1"
            value={fullNameInput}
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmailInput(e.target.value)}
            type="text"
            id="email"
            className="border rounded-lg p-1"
            value={emailInput}
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="rounded-lg font-semibold p-1 mt-2 bg-sky-500 text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default MainPage;
