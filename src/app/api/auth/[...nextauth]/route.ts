import users from "@/app/helpers/constants"
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions : NextAuthOptions = {
    providers : [

        CredentialsProvider({
            name : "Credentials",
            credentials : {
                email: { label: "Email", placeholder: "Enter Email" },
                password: {  label: "Password", placeholder: "Enter Password" }
            },

            async authorize(credentials): Promise<any> {
                if (!credentials || !credentials.email || !credentials.password) {
                    return null
                }
                const user = users.find(user => user.email === credentials.email)
                if (!user) {
                    return null
                }
                if (user.password !== credentials.password) {
                    return null
                }
                return user
            }
        })
    ]
}

// const handler = (req:any, res:any) => NextAuth(req, res, authOptions)

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }