const MemberCard = ({ member }) => {
  console.log(typeof member);
  const { name, birthday } = member;
  return (
    <div className="MemberCard">
      <div className="MemberCard_Name">{name}</div>
      <div className="MemberCard_Data">
        <div>{birthday.day}</div>
        <div>{birthday.month}</div>
        <div>{birthday.year}</div>
      </div>
    </div>
  );
};

export default MemberCard;
