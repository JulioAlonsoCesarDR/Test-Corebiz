import { useContext } from "react"
import Context from "../context/ContextProvider.jsx"

const useContextProvider = () => {
    return useContext(Context)
}
export default useContextProvider