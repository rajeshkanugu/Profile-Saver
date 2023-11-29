import type { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { username:"username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password", placeholder: "********" }
            },
            async authorize(credentials): Promise<any> {
                const user = { id: 1, name: 'Rajesh', password: '123' }
                if(credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ]
}