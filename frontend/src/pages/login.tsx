// component
import { Container } from "@mui/material"
import LoginCard from '../components/common/card/loginCard'

const Login = () => {

    document.title ='Store Backend - Login'

    return (
        <Container>
            <LoginCard />
        </Container>
    )
}

export default Login