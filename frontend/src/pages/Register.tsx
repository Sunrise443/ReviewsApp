
import { UserForm } from "../components/UserForm"

export function Register () {
    return(
        <UserForm route="/api/user/register/" method="register"/>
    )
}
