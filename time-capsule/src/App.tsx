import Header from "./components/Header/Header.tsx";
import Toolbar from "./components/Toolbar/Toolbar.tsx";
import Result from "./components/Result/Result.tsx";
import CreateModal from "./components/CreateModal/CreateModal.tsx";
import Toaster from "./components/toaster.tsx";

import CapsuleProviders from "./Providers/CapsuleProviders.tsx";
import ThemeProviders from "./Providers/ThemeProviders.tsx";

import "./App.css";

function App() {
  return (
    <ThemeProviders>
      <CapsuleProviders>
        <Header />
        <main>
          <Toolbar />
          <Result />
        </main>
        <CreateModal />
        <Toaster/>
      </CapsuleProviders>
    </ThemeProviders>
  );
}

export default App;
