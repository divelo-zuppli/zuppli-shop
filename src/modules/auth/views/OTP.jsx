import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

import { GlobalContext } from '../../../App';

function OTP() {
    const ctx = useContext(GlobalContext);
    const navigate = useNavigate();

    const { user } = ctx;

    console.log('user', user);

    useEffect(() => {
        if (user) {
            return navigate("/home");
        }
    }, [navigate, user]);

    return (
        <div>
            <h1>OTP</h1>
            <nav style={{ margin: 10 }}>
            <Link to="/otp/send" style={{ padding: 5 }}>
              Send
            </Link>
            |
            <Link to="/otp/verify" style={{ padding: 5 }}>
                Verify
            </Link>
            </nav>
        </div>
    );
}

export default OTP;