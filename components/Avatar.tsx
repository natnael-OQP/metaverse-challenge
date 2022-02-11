import { useMoralis } from 'react-moralis'
import Image from 'next/image'

function Avatar() {
    const { user, logout } = useMoralis()

    return (
        <Image
            className="cursor-pointer rounded-full bg-black hover:opacity-75"
            src={`https://avatars.dicebear.com/api/pixel-art/${ user.get('username')}.svg`}
            layout="fill"
            onClick={() =>   logout()}
        />
    )
}

export default Avatar
