import { Suspense } from "react";
import Chatbot from "./Chatbot"
import "./globals.css";

export default function Home() {
  return <Suspense>
      <Chatbot />
      </Suspense>;
}
