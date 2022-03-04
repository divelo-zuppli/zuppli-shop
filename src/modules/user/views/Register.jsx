import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { GlobalContext } from '../../../App';

import userService from "../user.service";

function Login() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
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

    const register = async (event) => {
        event.preventDefault();

        setMessage("");

        if (!email || !password) {
            setMessage("error: Please fill all required fields");
            return;
        }

        try {
            const result = await userService.register({
                fullName,
                email,
                phoneNumber,
                password,
            });

            setMessage(result.message);
        } catch (error) {
            setMessage(`error: ${error.message}`);
        }
    };

    return (
        <div>
            <h3> Register </h3>
            <form onSubmit={register}>
                <input
                    placeholder="full name"
                    name="fullName"
                    type="text"
                    onChange={(event) => { setFullName(event.target.value); }}
                />
                <input
                    placeholder="email"
                    name="email"
                    required
                    type="email"
                    onChange={(event) => { setEmail(event.target.value); }}
                />
                <input 
                    placeholder="phone number"
                    name="phoneNumber"
                    required
                    type="text"
                    onChange={(event) => { setPhoneNumber(event.target.value); }}
                />
                <input
                    placeholder="password"
                    name="password"
                    required
                    type="password"
                    onChange={(event) => { setPassword(event.target.value); }}
                />
                <br />
                <button type="submit"> Register </button>
            </form>
            <br />
            <br />
            <br />
            {message && <div><p>{message}</p></div>}
        </div>
    );
}

export default Login;