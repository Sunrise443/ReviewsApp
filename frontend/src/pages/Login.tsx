import { UserForm } from "../components/UserForm";

export function Login () {
    return(
        <UserForm route="/api/user/login/" method="login"/>
    )
}
