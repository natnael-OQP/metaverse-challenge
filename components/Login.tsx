import Image from 'next/image'
import { useMoralis } from 'react-moralis'

const Login = () => {
    const { authenticate } = useMoralis()
    return (
        <div className="min-h-screen  w-full">
            <div className="absolute  left-[50%] top-[25%]  z-50 -translate-x-[50%]">
                {/* github profile  */}
                <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full bg-black p-1 ring ring-amber-500 ">
                    <Image
                        layout="fill"
                        objectFit="cover"
                        src="https://avatars.githubusercontent.com/u/81810944?s=400&u=0591265a4ce7049248bbe2835e6f38087a883b8e&v=4"
                        alt="github-profile"
                    />
                </div>
                {/* login button  */}
                <button
                    onClick={() => authenticate()}
                    className="mt-5 transform-cpu rounded-md bg-amber-500 px-5 py-2 text-base font-semibold capitalize text-white shadow-md shadow-fuchsia-400 duration-200 hover:scale-105 active:scale-95"
                >
                    login with MetaMask
                </button>
            </div>
            {/* background Image */}
            <div className="relative h-screen w-full">
                <Image
                    layout="fill"
                    objectFit="cover"
                    src="https://links.papareact.com/55n"
                    alt="background-image"
                />
            </div>
        </div>
    )
}

export default Login

// avatar generator url:https://avatars.dicebear.com/api/male/love.svg?background=%23000000
