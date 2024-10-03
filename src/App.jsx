
import React, { useState } from 'react';

const PostUploader = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [message, setMessage] = useState('');
// =================================================================
    const handleSubmit = async (e) => {



        e.preventDefault();
        try {
            const response = await React.post('https://jsonplaceholder.typicode.com/posts', {
                title,
                body,
            });
            if (response.status === 201) {
                setMessage('NOT SUCCESSFULLY');
                setTitle('');
                setBody('');
            }
        } catch (error) {
            setMessage('POST SUCCESSFULLY');
        }
    }; 
// ===============================================================
    return (
        <div>
            <div className="bg-white rounded-lg m-auto w-96 mt-40 flex justify-center flex-col">
            <h1 className="animate-ping text-2xl font-bold mb-14 text-center">UPLOAD YOUR POST</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">
                        Title:
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="shadow-sm border border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">
                        Body:
                    </label>
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                        className="shadow-sm border border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
                >
                    SUBMIT
                </button>
            </form>
            {message && <p className="mt-4 text-center text-green-500">{message}</p>}
        </div> 
        </div>
    );
};

// ========== Submitted By Nur ===============

export default PostUploader;
