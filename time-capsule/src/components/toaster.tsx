import {ReactNode, useContext} from "react";

import {Bounce, ToastContainer , ToastContainerProps} from "react-toastify";

import {ThemeContext} from "../context/ThemeContext.tsx";

type Props =  ToastContainerProps

function Toaster(props : Props) : ReactNode{
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
            {...props}
        />
    )
}

export default Toaster;