import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions : NextAuthOptions = {
    providers : [

        CredentialsProvider({
            name : "Credentials",
            credentials : {
                username : { label : "Username", type : "text", placeholder : "Username" },
                password : { label : "Password", type : "password", placeholder : "Password" }
            },

            async authorize(credentials) {
                if(!credentials || !credentials.username || !credentials.password) return null
            }
        })
    ]
}

const handler = NextAuth({
  
})

export { handler as GET, handler as POST }