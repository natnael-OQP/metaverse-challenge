import { useRef } from 'react'
import { useMoralis, ByMoralis, useMoralisQuery } from 'react-moralis'
import Message from './Message'
import SendMessage from './SendMessage'

// Only show messages from the last 7 weeks
const WEEK_DURATION = 10080

function Messages() {
    const { user } = useMoralis()
    const endOfMessagesRef = useRef(null)
    const { data } = useMoralisQuery(
        'newMessages',
        (query) =>
            query
                .ascending('createdAt')
                .greaterThan(
                    'createdAt',
                    new Date(Date.now() - 1000 * 60 * WEEK_DURATION)
                ),
        [],
        {
            live: true,
        }
    )

    return (
        <div className="pb-40">
            <div className="my-5">
                <ByMoralis
                    style={{ marginLeft: 'auto', marginRight: 'auto' }}
                    variant="dark"
                />
            </div>

            <div className="space-y-10 p-4">
                {data.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            </div>

            <div className="flex justify-center">
                <SendMessage endOfMessagesRef={endOfMessagesRef} />
            </div>

            <div
                className="mt-5 text-center text-gray-400"
                ref={endOfMessagesRef}
            >
                <p className="text-base ">
                    You're up to date {user.getUsername()}
                </p>
            </div>
        </div>
    )
}

export default Messages
