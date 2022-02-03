import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import authService from '../auth.service';

import { GlobalContext } from '../../../App';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const ctx = useContext(GlobalContext);
    const navigate = useNavigate();

    const { user } = ctx;

    useEffect(() => {
        if (user) {
            return navigate("/home");
        }
    }, [navigate, user]);

    const login = async (event) => {
        event.preventDefault();

        setMessage("");

        if (!email || !password) {
            setMessage("error: Please fill all fields");
            return;
        }

        try {
            await authService.login({
                email,
                password,
            });

            // setMessage(message);
        } catch (error) {
            setMessage(`error: ${error.message}`);
        }
    };

    const loginWithGoogle = async (event) => {
        event.preventDefault();

        setMessage("");

        try {
            await authService.loginWithGoogle();

            // setMessage(message);
        } catch (error) {
            setMessage(`error: ${error.message}`);
        }
    };

    return (
        <div>
            <h3> Login with email n password </h3>
            <form onSubmit={login}>
                <input
                    placeholder="email"
                    name="email"
                    required
                    type="email"
                    onChange={(event) => { setEmail(event.target.value); }}
                />
                <input
                    placeholder="password"
                    name="password"
                    required
                    type="password"
                    onChange={(event) => {setPassword(event.target.value);}}
                />
                <button type="submit"> GO </button>
            </form>
            <br />
            <button onClick={loginWithGoogle}>GOOGLE</button>
            <br />
            <br />
            <Link to="/otp" style={{ padding: 5 }}> OTP </Link>
            {message && <div><p>{message}</p></div>}
        </div>
    );
}

export default Login;