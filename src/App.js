import ListBirthdays from "./components/ListBirthdays";
import { listenerMiembros } from "./FirebaseConfig";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    console.log(listenerMiembros());
  }, []);
  return (
    <div className="App">
      <h3> 0 birthdays today</h3>
      <ListBirthdays> 0 birthdays today</ListBirthdays>
      <button className="button is-primary">Clear All</button>
    </div>
  );
}
