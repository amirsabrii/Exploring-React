import {ReactNode, useContext} from "react";
import {Bounce, ToastContainer} from "react-toastify";
import {ThemeContext} from "../context/ThemeContext.tsx";

function Toaster() : ReactNode{
    const {theme} = useContext(ThemeContext)
    return (
        <ToastContainer
            position="top-right"
            autoClose={4001}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={theme}
            transition={Bounce}
            aria-label={undefined}
        />
    )
}

export default Toaster;