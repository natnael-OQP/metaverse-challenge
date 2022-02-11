import { useMoralis } from 'react-moralis'

function ChangeUsername() {
    const { setUserData, isUserUpdating, user } = useMoralis()

    const setUsername = () => {
        const username = prompt(
            `Enter your new Username '(current: ${user.getUsername()})'`
        )
        if (!username) return
        setUserData({
            username,
        })
    }

    return (
        <div className="absolute top-3 right-3 text-sm md:text-base ">
            <button
                className="font-semibold hover:text-emerald-100 text-color1 hover:underline"
                disabled={isUserUpdating}
                onClick={setUsername}
            >
                Change your Username
            </button>
        </div>
    )
}

export default ChangeUsername
