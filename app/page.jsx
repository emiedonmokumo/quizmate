'use client';
import { useState } from "react";
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import withAuthRedirect from "@/utils/withAuthRedirect";

const Page = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const result = await signIn('credentials', {
            redirect: false,
            email: user.email,
            password: user.password,
        });

        setIsLoading(false);

        if (result.ok) {
            console.log('Sign-in successful, redirecting to dashboard...');
            router.push('/dashboard');
        } else {
            console.error('Sign-in failed:', result.error);
        }
    };

    if (isLoading) return <Loader />;

    return (
        <div className="lg:w-80 mx-auto mt-10">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 shadow-xl p-5">
                <input
                    type="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    className="border p-2 bg-transparent rounded-md outline-none text-white"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    className="border p-2 bg-transparent rounded-md outline-none text-white"
                    required
                />
                <input
                    type="submit"
                    value="Sign in"
                    className="text-white px-12 py-3 rounded-lg bg-gradient-to-r from-[#9D69FF] to-[#3E6EFF] sm:text-sm sm:px-8"
                />
            </form>
        </div>
    );
};

export default withAuthRedirect(Page);
