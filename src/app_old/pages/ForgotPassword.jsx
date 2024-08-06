import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import { StoreContext } from '../store/store-context.js';

export default function ForgotPassword() {
    const [state] = useContext(StoreContext);

    const [otp, setOtp] = useState('');
    const [otpId, setOtpId] = useState('');

    const [loading, setLoading] = useState(false);
    const [verified, setVerified] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const [touched, setTouched] = useState(false);

    const [token, setToken] = useState('');

    const navigate = useNavigate();

    const samePassword = password === password2;

    const handleSendEmail = async e => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch(`${BASE_URL}/user/forgot-password`, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    email,
                }),
                redirect: "follow"
            });

            const { success, message, otp_key } = await response.json();

            if(!success) {
                throw new Error(message);
            }
            
            setOtpId(otp_key);
            toast(message);
        } catch(e) {
            console.error(e);
            toast(e.message, { type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    const handleVerify = async e => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch(`${BASE_URL}/user/verify`, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    email,
                    otp,
                    otp_key: otpId
                }),
                redirect: "follow"
            });

            const { success, message, data: { token } } = await response.json();
            
            if(!success) {
                throw new Error("Incorrect OTP");
            }

            setToken(token);
            setVerified(true);
            toast(message);
        } catch(e) {
            console.error(e);
            toast(e.message, { type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    const handleChangePassword = async e => {
        e.preventDefault();
        try {
            setLoading(true);

            if(!password) {
                throw new Error('Password is required.');
            }

            const response = await fetch(`${BASE_URL}/user/change-password`, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }),
                body: JSON.stringify({
                    newPassword: password,
                }),
            });

            const { message } = await response.json();

            if(!response.ok) {
                throw new Error(message);
            }

            toast('Password Changed.');
            navigate('/login');
        } catch(e) {
            console.error(e);
            toast(e.message, { type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen w-screen bg-zinc-100 flex items-center justify-center">
            <div className="flex justify-center items-center">
                <div className="max-w-sm w-screen md:w-full h-screen md:h-auto bg-white rounded-xl md:shadow-lg md:border">
                    {
                        !otpId
                            ? (
                                <form className="px-5 md:px-12 py-10 grid gap-8 mx-5 md:mx-0" onSubmit={handleSendEmail}>
                                    <div className="mt-5 md:mt-0">
                                        <img
                                            src="logo.svg"
                                            alt="logo"
                                            className="object-contain h-16 mx-auto md:hidden"
                                        />
                                        <h3 className="text-center font-semibold text-xl mt-2">
                                            Forgot Password
                                        </h3>
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="otp"
                                            className="text-sm font-medium"
                                        >
                                            Enter email
                                        </label>
                                        <input
                                        autoFocus
                                            type="text"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            className="py-2 px-3 mt-1 outline-none border focus:border-primary rounded"
                                        />
                                    </div>

                                    <button
                                        disabled={loading}
                                        className="bg-primary px-8 py-3 text-white rounded-md font-semibold text-sm cursor-pointer"
                                    >
                                        {
                                            loading ? (<span className="inline-block w-4 h-4 border-white border-b-zinc-400 border-r-zinc-400 border-2 border-solid rounded-full animate-spin"></span>)
                                            : 'Send OTP'
                                        }
                                    </button>
                                </form>
                            )
                            : !verified
                                    ? (
                                        <form className="px-5 md:px-12 py-10 grid gap-8 mx-5 md:mx-0" onSubmit={handleVerify}>
                                            <div className="mt-5 md:mt-0">
                                                <img
                                                    src="logo.svg"
                                                    alt="logo"
                                                    className="object-contain h-16 mx-auto md:hidden"
                                                />
                                                <h3 className="text-center font-semibold text-xl mt-2">
                                                    Verify OTP
                                                </h3>
                                            </div>
                                            <div className="flex flex-col">
                                                <label
                                                    htmlFor="otp"
                                                    className="text-sm font-medium"
                                                >
                                                    Enter OTP
                                                </label>
                                                <input
                                                autoFocus
                                                    type="text"
                                                    name="otp"
                                                    id="otp"
                                                    placeholder="otp"
                                                    value={otp}
                                                    onChange={e => setOtp(e.target.value)}
                                                    className="py-2 px-3 mt-1 outline-none border focus:border-primary rounded"
                                                />
                                            </div>
        
                                            <button
                                                disabled={loading}
                                                className="bg-primary px-8 py-3 text-white rounded-md font-semibold text-sm cursor-pointer"
                                            >
                                                {
                                                    loading ? (<span className="inline-block w-4 h-4 border-white border-b-zinc-400 border-r-zinc-400 border-2 border-solid rounded-full animate-spin"></span>)
                                                    : 'Verify OTP'
                                                }
                                            </button>
                                        </form>
                                    )
                                    : (
                                        <form className="px-5 md:px-12 py-10 grid gap-8 mx-5 md:mx-0" onSubmit={handleChangePassword}>
                                            <div className="mt-5 md:mt-0">
                                                <img
                                                    src="logo.svg"
                                                    alt="logo"
                                                    className="object-contain h-16 mx-auto md:hidden"
                                                />
                                                <h3 className="text-center font-semibold text-xl mt-2">
                                                    Change Password
                                                </h3>
                                            </div>
                                            <div className="flex flex-col">
                                                <label
                                                    htmlFor="otp"
                                                    className="text-sm font-medium"
                                                >
                                                    Enter New Password
                                                </label>
                                                <input
                                                autoFocus
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    placeholder="password"
                                                    value={password}
                                                    onChange={e => setPassword(e.target.value)}
                                                    className="py-2 px-3 mt-1 outline-none border focus:border-primary rounded"
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <label
                                                    htmlFor="otp"
                                                    className="text-sm font-medium"
                                                >
                                                    Confirm Password
                                                </label>
                                                <input
                                                autoFocus
                                                    type="password"
                                                    name="password2"
                                                    id="password2"
                                                    placeholder="password2"
                                                    value={password2}
                                                    onChange={e => {
                                                        setTouched(true);
                                                        setPassword2(e.target.value);
                                                        console.log(password)
                                                    }}
                                                    className="py-2 px-3 mt-1 outline-none border focus:border-primary rounded"
                                                />
                                                {
                                                    (touched && !samePassword)
                                                        ? <div className="text-red-500">Password not matched.</div>
                                                        : null
                                                }
                                            </div>
        
                                            <button
                                                disabled={loading || !samePassword}
                                                className="bg-primary px-8 py-3 text-white rounded-md font-semibold text-sm cursor-pointer"
                                            >
                                                {
                                                    loading ? (<span className="inline-block w-4 h-4 border-white border-b-zinc-400 border-r-zinc-400 border-2 border-solid rounded-full animate-spin"></span>)
                                                    : 'Change Password'
                                                }
                                            </button>
                                        </form>
                                    )
                    }
                </div>
            </div>
        </div>
    );
}