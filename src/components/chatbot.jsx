'use client';
import { useEffect, useState } from "react";

export default function ChatBot() {
    const[isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [sessionId, setSessionId] = useState("");
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([ 
        {role: "bot", content: "Hello! I'm MalBot, your friendly chatbot. Ask me anything about Maloudnee!"}
    ]);

    useEffect(() => {
        setSessionId("session-" + Math.random().toString(36).substring(7));
    }, []);

    const sendMessage = async() => {
        if (!input.trim()) return;

        const userMessage = {role: "user", content: input};
        const newMessage = [...messages, userMessage];
        setMessages(newMessage);
        const currentInput = input;
        setInput("");

        setIsLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({user_input: currentInput, session_id: sessionId})
            });
            const data = await res.json();
            setMessages([...newMessage, { role: 'bot', content: data.response }]);
        } catch (e) {
            setMessages([...newMessage, { role: 'bot', content: "Error connecting to server." }]);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {isOpen &&  (
                <div className="w-80 h-96 bg-[#eee3c3] shadow-2xl rounded-lg mb-4 border border-black-200 overflow-hidden flex flex-col">
                    <div className="text-[#510400] font-bold text-lg p-4">
                        MalBot Chat
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto space-y-3">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.role === "bot" ? "justify-start" : "justify-end"}`}>
                                <div className={`max-w-[80%] p-2 rounded-lg text-sm ${
                                    msg.role === "bot" 
                                    ? "bg-[#510400] text-white rounded-bl-none" 
                                    : "bg-[#313131] text-white rounded-br-none"}`}>
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-start p-2">
                        {isLoading && (
                            <div className="text-sm text-black-500 animate-pulse">
                                MalBot is typing...
                            </div>
                        )}
                    </div>

                    <div className="p-4 border-t border-black-300">
                        <input 
                            type="text" 
                            value={input} 
                            onChange={(e) => setInput(e.target.value)} 
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()} 
                            placeholder="Type your message..." 
                            className="w-full p-2 border border-black-300 rounded focus:outline-none focus:ring-2 focus:ring-[#510400]"
                        />
                    </div>
                </div>
            )}
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-white p-3 rounded-xl shadow-lg hover:bg-[#A13046] transition-colors"
            >
                {isOpen ? (
                    <span className="text-xl font-bold">X</span>
                ) : (
                    <img src="/images/MalBotIcon.png" alt="chat icon" className="w-30 h-30 object-contain" />
                )}
            </button>
        </div>
    );
}