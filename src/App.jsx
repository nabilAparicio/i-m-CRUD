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
    <div className="flex max-h-full min-h-screen bg-slate-500">
      <div className="w-7/12 bg-gradient-to-b from-cyan-500 to-blue-500">
        <section className=" h-full overflow-y-scroll">
          <CardsContainer
            reload={reload}
            editUserfn={editUserfn}
            reloadCards={reloadCards}
          />
        </section>
      </div>
      <div className="w-5/12 bg-neutral-100">
        <section className="max-h-full">
          <UsersForm reloadCards={reloadCards} />
        </section>
        {editUser && (
          <Modal
            dataCard={dataCard}
            reloadCards={reloadCards}
            editUserfn={editUserfn}
          />
        )}
      </div>
    </div>
  );
}

export default App;
