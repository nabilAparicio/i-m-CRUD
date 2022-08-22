/* eslint-disable react/react-in-jsx-scope */
import CardsContainer from "./components/CardsContainer";
import UsersForm from "./components/UsersForm";
import Modal from "./components/Modal";
import { useState } from "react";
function App() {
  const [reload, setReload] = useState(true);
  const [editUser, setEditUser] = useState(false);
  const [dataCard, setDataCard] = useState();
  const editUserfn = (data) => {
    setEditUser(!editUser);
    setDataCard(data);
  };
  const reloadCards = () => setReload(!reload);
  return (
    <div className="flex min-h-screen bg-slate-500">
      <div className="w-7/12 bg-red-200">
        <section>
          <CardsContainer
            reload={reload}
            editUserfn={editUserfn}
            reloadCards={reloadCards}
          />
        </section>
      </div>
      <div className="w-5/12 bg-blue-200">
        <section>
          <UsersForm reloadCards={reloadCards} />
        </section>
        {editUser && <Modal dataCard={dataCard} editUserfn={editUserfn} />}
      </div>
    </div>
  );
}

export default App;
