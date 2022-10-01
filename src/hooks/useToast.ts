import { useContext } from "react"
import {
  ToastContext,
  ToastProviderReturn,
} from "../components/providers/ToastProvider"

function useToast(): ToastProviderReturn {
  return useContext<ToastProviderReturn>(ToastContext)
}

export default useToast
