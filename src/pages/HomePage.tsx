import Welcome from "../components/Welcome";
import ProfileCard from "../components/ProfileCard";
import Counter from "../components/Counter";
import { Link } from "react-router";

type Persons = {
  name: string;
  birth: number;
  job: string;
  id: number;
};

const HomePage = () => {
  const persons: Persons[] = [
    {
      birth: 2007,
      job: "Software Engineer",
      name: "Muhammad Hamka",
      id: 1,
    },
    {
      birth: 1999,
      job: "Lecturer",
      name: "Martin Luther King Jr",
      id: 2,
    },
    {
      birth: 1833,
      job: "President",
      name: "Abraham Lincoln",
      id: 2,
    },
  ];

  return (
    <>
      <div style={{ padding: "16px 44px" }}>
        <h1>Home Page</h1>
        <div style={{display: "flex", gap: "16px"}}>
          <Link to="/terms">To Terms Page</Link>
          <Link to="/productList">To Product List Page</Link>
          <Link to="/product/:productSlug">To Product Page</Link>
        </div>

        <Welcome />

        <div style={{ display: "flex", gap: "8px", flexDirection: "row" }}>
          {persons.map((person) => {
            return (
              <ProfileCard
                birth={person.birth}
                name={person.name}
                job={person.job}
              />
            );
          })}
        </div>

        <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
          <Counter />
        </div>
      </div>
    </>
  );
};

export default HomePage;
