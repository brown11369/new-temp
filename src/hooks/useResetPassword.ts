import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { RESET_PASSWORD_URL, VERIFY_PASSWORD_RESET_URL } from "../utils/constant"


const useResetPassword = () => {

    const navigate = useNavigate()
    const params = useParams()
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const { resetPassToken } = params

    useEffect(() => {
        handleVerifyPageAccess()
    }, [params])

    const handleVerifyPageAccess = async () => {
        try {
            let res = await fetch(VERIFY_PASSWORD_RESET_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ resetPassToken: resetPassToken })
            })

            await res.json()

            if (res.status === 401) {
                navigate(`/reset-password/${resetPassToken}/404-Not-Found`)
            }


        } catch (error) {
            console.error("404 not found")
        }


    }

    const handleNewPassSubmit = async () => {
        try {
            let res = await fetch(RESET_PASSWORD_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ resetPassToken, newPassword })
            })

            let data = await res.json()
            console.log(data)

        } catch (error) {
            console.error("404 not found")
        }

    }

    return { handleNewPassSubmit, handleVerifyPageAccess, setConfirmPassword, setNewPassword, confirmPassword, newPassword }
}

export default useResetPassword