import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { getPayload } from './payload'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        try {
          const payload = await getPayload()
          const { user, token } = await payload.login({
            collection: 'users',
            data: {
              email: credentials.email as string,
              password: credentials.password as string,
            },
          })
          if (user) {
            return {
              id: user.id,
              email: user.email,
              name: user.name,
              role: user.role,
              payloadToken: token,
            }
          }
          return null
        } catch (error) {
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role
        token.payloadToken = (user as any).payloadToken
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role
        (session.user as any).payloadToken = token.payloadToken
      }
      return session
    },
  },
  pages: {
    signIn: '/admin/login',
  },
})
