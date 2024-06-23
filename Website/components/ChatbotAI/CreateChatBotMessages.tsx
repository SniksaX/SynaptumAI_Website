// components/ChatbotAI/ChatMessages.tsx
import { SendMessage } from "@/lib/requests";
import { useState } from "react";
import { FaPaperPlane, FaRobot } from "react-icons/fa"; // Import the robot icon

interface ChatMessagesProps {
  messages: { sender: string; text: string }[];
  setMessages: React.Dispatch<
    React.SetStateAction<{ sender: string; text: string }[]>
  >;
}

// Utility function to replace **...** with <strong>...</strong>
const parseMessage = (text: string) => {
  const boldPattern = /\*\*(.*?)\*\*/g;
  return text.replace(boldPattern, "<strong>$1</strong>");
};

export default function ChatMessages({
  messages,
  setMessages,
}: ChatMessagesProps) {
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };

    // Immediately update state with user's message
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    try {
      const response = await SendMessage(userMessage.text);

      const botMessage = {
        sender: "bot",
        text: response.giminiResponse,
      };

      // Update state with bot's message when it's received
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <>
      <div className="flex-1 p-2 overflow-y-auto bg-[#2a4223] bg-opacity-50">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`my-2 flex items-start ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div>
              {msg.sender === "bot" && (
                <FaRobot className=" text-green-600  text-4xl self-center " />
              )}
              <span
                className={`inline-block p-2 ml-10 max-w-xs break-words ${
                  msg.sender === "user"
                    ? "text-white bg-[#45b841] rounded-l-3xl rounded-b-3xl"
                    : "text-white bg-[#3f703d] rounded-r-3xl rounded-b-3xl"
                }`}
                dangerouslySetInnerHTML={{ __html: parseMessage(msg.text) }}
              ></span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex p-2 bg-[#070806a7] bg-opacity-50 rounded-b-3xl border-gray-300">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your message..."
          className="flex-1 p-1 bg-transparent rounded-3xl border-0 focus:outline-none"
        />
        <div className="m-2">
          <button onClick={sendMessage} className="p-1  px-2 rounded-3xl ">
            <FaPaperPlane className="text-green-600" />
          </button>
        </div>
      </div>
    </>
  );
}
