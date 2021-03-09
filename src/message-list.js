import React, { useState } from 'react';
import MessageView from './message-view';

export default function MessageList () {
    const initialValues = [
        {
            _id: 'd2504a54',
            from: 'Derrick',
            content: 'I will be traveling soon',
            status: 'unread'
        },
        {
            _id: 'l342dbba',
            from: 'Austin',
            content: 'I will be traveling soon',
            status: 'read'
        },
        {
            _id: 'buu45ta3',
            from: 'Jay',
            content: 'I will be traveling soon',
            status: 'read'
        }
    ];

    const [messages] = useState(initialValues);
    const messageViews = messages.map(
        message => <MessageView key={message._id} message={message} />
    )

    return(
        <div className="containter">
            <h1>List of Messages</h1>
            {messageViews}
        </div>
    )
}
