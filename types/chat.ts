export type MessageRole = "assistant" | "user";

export type ChatMessageData = {
  id: string;
  role: MessageRole;
  content: string;
  createdAt: string;
};