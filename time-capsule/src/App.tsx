import Header from "./components/Header/Header.tsx";
import Toolbar from "./components/Toolbar/Toolbar.tsx";
import Result from "./components/Result/Result.tsx";
import CreateModal from "./components/CreateModal/CreateModal.tsx";

import CapsuleProviders from "./Providers/CapsuleProviders.tsx";

import "./App.css";

function App() {
  return (
    <CapsuleProviders>
      <Header />
      <main>
        <Toolbar />
        <Result />
      </main>
      <CreateModal />
    </CapsuleProviders>
  );
}

export default App;
