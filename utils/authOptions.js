import Credentials from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'
import connectDB from "@/config/db";
import User from "@/models/User";

export const authOptions = {
    providers: [
        Credentials({
            credentials: {
                email: {
                    label: 'email',
                    type: 'email'
                },
                password: {
                    label: 'password',
                    type: 'text'
                },
            },
            authorize: async (credentials) => {
                await connectDB()

                const user = await User.findOne({ email: credentials.email });
                if (!user) {
                    throw new Error("No user found");
                    return null
                }

                // Compare the provided password with the stored hashed password
                const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
                if (!isPasswordValid) {
                    throw new Error("Invalid password");
                    return null
                }

                // If the password is valid, return the user object
                return {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                };
            }
        })
    ],
    pages: {
        signIn: "/signin",
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // Example: 30 days
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.email = token.email;
            }
            return session;
        },
    }
}