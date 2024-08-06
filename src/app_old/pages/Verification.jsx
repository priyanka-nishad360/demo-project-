import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import { useAuth } from '../hooks/useAuth.js';
import { StoreContext } from '../store/store-context.js';
import Image from 'next/image.js';
export default function Verification() {
    const [state] = useContext(StoreContext);

    const { verifyUser } = useAuth();

    const [otp, setOtp] = useState('');

    const [loading, setLoading] = useState('');

    const navigate = useNavigate();

    const handleVerify = async e => {
        e.preventDefault();
        try {
            setLoading(true);

            const res = await fetch(
                `${BASE_URL}/user/verify`,
                {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json',
                    }),
                    body: JSON.stringify({
                        email: state.verification.email,
                        otp_key: state.verification.otpId,
                        otp: otp
                    })
                }
            );

            const { success, message, data, token } = await res.json();

            if (!success) {
                throw new Error(message);
            }

            verifyUser({ data, token });
            localStorage.setItem('token', JSON.stringify(data.token))
            navigate('/');
        } catch (e) {
            toast.error(e.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen w-screen bg-zinc-100 flex items-center justify-center">
            <div className="flex justify-center items-center">
                <div className="max-w-sm w-screen md:w-full h-screen md:h-auto bg-white rounded-xl md:shadow-lg md:border">
                    <form className="px-5 md:px-12 py-10 grid gap-8 mx-5 md:mx-0" onSubmit={handleVerify}>
                        <div className="mt-5 md:mt-0">
                            <Image width={200} height={200} 
                                src="logo.svg"
                                alt="logo"
                                className="object-contain h-16 mx-auto md:hidden"
                            />
                            <h3 className="text-center font-semibold text-xl mt-2">
                                Verify Email
                            </h3>
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="otp"
                                className="text-sm font-medium"
                            >
                                OTP
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
                                    : 'Verify'
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}