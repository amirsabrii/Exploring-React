import "./App.css";
import { createContext, useState } from "react";

import { Capsule } from "./types/capsule.ts";

import Header from "./components/Header/Header.tsx";
import Toolbar from "./components/Toolbar/Toolbar.tsx";
import Result from "./components/Result/Result.tsx";
import CreateModal from "./components/CreateModal/CreateModal.tsx";

type CapsuleContextsetCpsule = {
  capsule: Capsule[];
  setCpsule: React.Dispatch<React.SetStateAction<Capsule[]>>;
};

export const capsuleContext = createContext<CapsuleContextsetCpsule>({
  capsule: [],
  setCpsule: () => {},
});

function App() {
  const [capsule, setCpsule] = useState<Capsule[]>([]);

  return (
    <capsuleContext.Provider value={{ capsule, setCpsule }}>
      <Header />
      <main>
        <Toolbar />
        <Result />
      </main>
      <CreateModal />
    </capsuleContext.Provider>
  );
}

export default App;
