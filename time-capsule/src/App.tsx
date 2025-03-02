import "./App.css";
import { useState } from "react";

import { Capsule } from "./types/capsule.ts";

import Header from "./components/Header/Header.tsx";
import Toolbar from "./components/Toolbar/Toolbar.tsx";
import Result from "./components/Result/Result.tsx";
import CreateModal from "./components/CreateModal/CreateModal.tsx";

function App() {
  const [capsule, setCpsule] = useState<Capsule[]>([
    {
      id: 1,
      title: "gym",
      describtion: "going to the gym",
      date: new Date(2025, 4, 15),
      category: "family",
    },
    {
      id: 2,
      title: "school",
      describtion: "going to the gym",
      date: new Date(2025, 4, 15),
      category: "work",
    },
  ]);

  return (
    <>
      <Header />
      <main>
        <Toolbar />
        <Result capsule={capsule} />
      </main>
      <CreateModal setCpsule={setCpsule} />
    </>
  );
}

export default App;
