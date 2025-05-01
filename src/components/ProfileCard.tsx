type ProfileCardProps = {
  name: string;
  birth: number;
  job?: string;
};

function ProfileCard(props: ProfileCardProps) {

    const { name, birth, job = "Jobless" } = props;
  return (
    <>
      <div className="card">
        <p>Name = {name}</p>
        <p>Birth Year = {birth}</p>
        { job && <p>Job = {job}</p>}
      </div>
    </>
  );
}

export default ProfileCard;
