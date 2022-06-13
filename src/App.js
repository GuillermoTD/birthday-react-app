import ListBirthdays from "./components/MemberCard";
import { onGetMembers } from "./FirebaseConfig";
import { useEffect, useState } from "react";
import MemberCard from "./components/MemberCard";

export default function App() {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    const getMembers = async () => {
      onGetMembers((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const time = doc.data().Fecha.seconds * 1000;
          // console.log(doc.data());
          const member = {
            name: doc.data().Nombre,
            birthday: {
              day: new Date(time).getFullYear(),
              month: new Date(time).getDate(),
              year: new Date(time).getMonth(),
            },
          };
          setMembers([...members, member]);
          console.log(typeof members);
        });
      });
    };

    getMembers();
  }, []);
  return (
    <>
      <div className="App">
        <h3> {members.length} birthdays today</h3>
        <ul>
          {members.map((member) => {
            return <MemberCard member={member}/>
          })}
        </ul>
        <button className="button is-primary">Clear All</button>
      </div>
    </>
  );
}
