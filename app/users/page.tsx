import type { Metadata } from 'next'
import getAllUsers from '@/lib/getAllUsers'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Users',
}

export default async function UsersPage() {
    const usersData: Promise<User[]> = getAllUsers()

    const users = await usersData

    return (
        <section>
            <h2>
                <Link href="/">Back Home</Link>
            </h2>
            {users.map((user) => {
                return (
                    <>
                        <div key={user.id}>
                            <Link href={`/users/${user.id}`}> <h1>{user.name}</h1></Link>
                            <p>{user.email}</p>
                        </div>
                        <br />
                    </>
                )
            })}
        </section>
    )
}
