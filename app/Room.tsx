"use client";

import { RoomProvider } from "@/liveblocks.config";
import { LiveMap } from "@liveblocks/client";
import { ClientSideSuspense } from "@liveblocks/react";
import type { PropsWithChildren } from "react";

export const Room = ({ children }: PropsWithChildren) => {
  return (
    <RoomProvider
      id="my-room"
      initialPresence={{
        cursor: null,
        message: null,
        selectedShape: null,
      }}
      initialStorage={{
        shapes: new LiveMap()
      }}
    >
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
};