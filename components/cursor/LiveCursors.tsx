import { BaseUserMeta, User } from "@liveblocks/client"
import Cursor from "./Cursor"
import { COLORS } from "@/constants";

type Presence = any;
type LiveCursorsProps = {
  others: readonly User<Presence, BaseUserMeta>[]
}

function LiveCursors({ others }: LiveCursorsProps) {
  return (
    others.map(({ connectionId, presence }) => {
      if (presence == null || !presence?.cursor) {
        return null;
      }

      return (
        <Cursor
          key={connectionId}
          color={COLORS[Number(connectionId) % COLORS.length]}
          x={presence.cursor.x}
          y={presence.cursor.y}
          message={presence.message}
        />
      )
    })
  )
}

export default LiveCursors