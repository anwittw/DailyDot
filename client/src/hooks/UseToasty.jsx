import {toast} from "react-toastify";

function UseToasty() {

    function toastOnAbbort(msg, autoClose = true) {
        return toast.warn(msg, {autoClose: autoClose});
    }

    function toastOnSuccess(msg, autoClose = true) {
        return toast.success(msg, {autoClose: autoClose});
    }

    function toastOnFailure(err, autoClose = true) {
        return toast.error(`Fehler: ${err}`, {autoClose: autoClose});
    }

    function toastAsStatus(msg, autoClose = true) {
        return toast(msg, {autoClose: autoClose});
    }

    return {toastOnAbbort, toastOnSuccess, toastOnFailure, toastAsStatus}
};

export default UseToasty
