"use client";

import { useState } from "react";
import { LiveAvatarSession } from "./LiveAvatarSession";

export const LiveAvatarDemo = () => {
  const [sessionToken, setSessionToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleStart = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/start-session", {
        method: "POST",
      });
      if (!res.ok) {
        const error = await res.json();
        setError(error.error);
        return;
      }
      const { session_token } = await res.json();
      setSessionToken(session_token);
    } catch (error: unknown) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const onSessionStopped = () => {
    setSessionToken("");
  };

  if (sessionToken) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <LiveAvatarSession
          mode="FULL"
          sessionAccessToken={sessionToken}
          onSessionStopped={onSessionStopped}
        />
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      {error && <div className="text-red-500">{"Error: " + error}</div>}
      <button
        onClick={handleStart}
        disabled={isLoading}
        className="bg-white text-black px-8 py-4 rounded-md text-lg disabled:opacity-50"
      >
        {isLoading ? "Loading..." : "Start"}
      </button>
    </div>
  );
};
