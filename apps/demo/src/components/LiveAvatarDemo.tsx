"use client";

import { useState, useEffect } from "react";
import { LiveAvatarSession } from "./LiveAvatarSession";

export const LiveAvatarDemo = () => {
  const [sessionToken, setSessionToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const startSession = async () => {
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

    startSession();
  }, []);

  const onSessionStopped = () => {
    setSessionToken("");
  };

  if (isLoading) {
    return null;
  }

  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <div className="text-red-500">{"Error: " + error}</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      {sessionToken && (
        <LiveAvatarSession
          mode="FULL"
          sessionAccessToken={sessionToken}
          onSessionStopped={onSessionStopped}
        />
      )}
    </div>
  );
};
