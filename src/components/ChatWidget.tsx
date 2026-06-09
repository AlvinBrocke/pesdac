"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

const WELCOME: Message = {
  role: "assistant",
  content:
    "Hello! 👋 I'm the PESDAC assistant. Ask me anything about our church, service times, beliefs, or the Seventh-day Adventist faith — I'm here to help!",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [open, messages]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput("");
    setLoading(true);

    // Placeholder for the streaming assistant reply
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history.map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!res.ok || !res.body) throw new Error("Request failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const last = prev[prev.length - 1];
          return [
            ...prev.slice(0, -1),
            { ...last, content: last.content + chunk },
          ];
        });
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    } catch {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          role: "assistant",
          content:
            "I'm sorry, I couldn't reach the server. Please try again or contact the church directly at +233 30 222 3720.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <div className="chat-widget">
      {/* Chat panel */}
      {open && (
        <div
          className="chat-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="chat-panel-title"
        >
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-logo">
              <Image
                src="/pesdac-logo.png"
                alt="PESDAC"
                width={32}
                height={32}
              />
            </div>
            <div className="chat-header-text">
              <div id="chat-panel-title" className="chat-header-title">
                PESDAC Assistant
              </div>
              <div className="chat-header-sub">Ask us anything</div>
            </div>
            <button
              className="chat-close-btn"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <i className="ti ti-x" aria-hidden="true" />
            </button>
          </div>

          {/* Messages */}
          <div
            className="chat-messages"
            role="log"
            aria-live="polite"
            aria-label="Conversation"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat-bubble ${msg.role === "user" ? "chat-bubble-user" : "chat-bubble-bot"}`}
              >
                {msg.role === "assistant" && msg.content === "" && loading && (
                  <span
                    className="chat-typing"
                    aria-label="Assistant is typing"
                  >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                  </span>
                )}
                {msg.content}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="chat-input-row">
            <textarea
              ref={inputRef}
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type a message…"
              rows={1}
              disabled={loading}
              aria-label="Message input"
            />
            <button
              className="chat-send-btn"
              onClick={send}
              disabled={!input.trim() || loading}
              aria-label="Send message"
            >
              <i className="ti ti-send" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      {/* Floating toggle button */}
      <button
        className="chat-toggle-btn"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close assistant" : "Open church assistant"}
        aria-expanded={open}
        aria-controls="chat-panel"
      >
        <i
          className={`ti ${open ? "ti-x" : "ti-message-circle"}`}
          aria-hidden="true"
        />
        {!open && <span className="chat-toggle-label">Ask us</span>}
      </button>
    </div>
  );
}
