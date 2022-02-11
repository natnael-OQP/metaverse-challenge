import Header from 'components/Header'
import Login from 'components/Login'
import Message from 'components/Messages'
import Head from 'next/head'
import { useMoralis } from 'react-moralis'

export default function Home() {
    const { isAuthenticated, logout, user } = useMoralis()
    if (!isAuthenticated) return <Login />

    return (
        <div className="h-screen w-full">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Component  Wrapper */}
            <div className="mx-auto max-w-screen-lg  ">
                <Header />
                <Message />
            </div>
        </div>
    )
}
