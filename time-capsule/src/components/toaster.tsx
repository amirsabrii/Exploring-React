import {ReactNode, useContext} from "react";

import {Bounce, ToastContainer , ToastContainerProps} from "react-toastify";

import {ThemeContext} from "../context/ThemeContext.tsx";

import i18n from "i18next";

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
            rtl={i18n.dir() === 'rtl'}
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