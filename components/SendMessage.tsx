import { useState } from 'react'
import { useMoralis } from 'react-moralis'

function SendMessage({ endOfMessagesRef }) {
    const { user, Moralis } = useMoralis()
    const [message, setMessage] = useState('')

    const sendMessage = (e) => {
        e.preventDefault()
        // is empty
        if (!message) return

        const messages = new Moralis.Object('newMessages')
        // const messages = new Messages();
        // save message to moralis
        messages
            .save({
                message: message,
                username: user.getUsername(),
                ethAddress: user.get('ethAddress'),
            })
            .then(
                (message) => {
                    // The object was saved successfully.
                },
                (error) => {
                    // The save failed
                    // error is a Moralis.Error with an error code and message.
                    console.log(error.message)
                }
            )
        endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' })
        setMessage('')
    }

    return (
        <form className="fixed bottom-3 flex w-11/12 max-w-2xl rounded-full border-4 border-blue-400 bg-black/80 px-6 py-4 shadow-xl">
            <input
                type="text"
                className="flex-grow bg-transparent pr-5 text-white placeholder-gray-500 outline-none"
                placeholder={`Enter a message ${user.getUsername()}...`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button
                className="font-bold text-pink-500"
                onClick={sendMessage}
                type="submit"
            >
                Send
            </button>
        </form>
    )
}

export default SendMessage
