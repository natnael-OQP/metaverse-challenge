import { useMoralis } from 'react-moralis'
import Image from 'next/image'
import Avatar from './Avatar'
import ChangeUsername from './ChangeUsername'

function Header() {
    const { user } = useMoralis()
    return (
        <div className="sticky top-0 z-50 border-b-2 border-blue-500 bg-black p-5  text-blue-500 shadow-sm select-none">
            <div className="grid grid-cols-5 items-end lg:grid-cols-6 lg:items-center">
                <a
                    href="https://github.com/natnael-OQP"
                    target="_blank"
                    className="relative mx-auto hidden h-28 w-28 cursor-pointer lg:inline-grid"
                >
                    <Image
                        src="https://avatars.githubusercontent.com/u/81810944?s=400&u=0591265a4ce7049248bbe2835e6f38087a883b8e&v=4"
                        layout="fill"
                        className="rounded-full object-cover"
                    />
                </a>

                <div className="col-span-4 text-left lg:text-center">
                    <div className="relative h-44 w-44 rounded-full border-8 border-purple-600 lg:mx-auto">
                        <Avatar />
                    </div>

                    <h1 className="text-3xl py-2">Welcome to the Metaverse</h1>
                    <h2 className="truncate text-4xl font-bold">
                        {user.getUsername()}
                    </h2>

                    {/* Change username component */}
                    <ChangeUsername />
                </div>
            </div>
        </div>
    )
}

export default Header
