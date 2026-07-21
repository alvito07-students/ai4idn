import type { Metadata } from "next";

import ChatShell from "@/components/chat/ChatShell";

export const metadata: Metadata = {
  title: "Ruang Curhat | AI4IDN",
  description:
    "Ruang percakapan AI4IDN yang dirancang untuk membantu pengguna bercerita dan merapikan pikiran tanpa kehilangan kendali atas dirinya.",
};

export default function CurhatPage() {
  return <ChatShell />;
}