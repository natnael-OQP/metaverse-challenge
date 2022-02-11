import Login from 'components/Login'
import Head from 'next/head'
import { useMoralis } from 'react-moralis'

export default function Home() {
    const { isAuthenticated, logout, user } = useMoralis()
    if (!isAuthenticated) return <Login />

    return (
        <div className="  ">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <div>welcome</div>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
}
