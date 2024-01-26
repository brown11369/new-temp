import { useState } from "react"
import { FORGOT_PASSWORD_URL } from "../utils/constant"


const useForgotPassword = () => {

    const [email, setEmail] = useState("")

    const handleForgotPassword = () => {
        fetch(FORGOT_PASSWORD_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        })
    }
    return { handleForgotPassword, setEmail }
}

export default useForgotPassword