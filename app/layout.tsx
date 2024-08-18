import "./global.css";
import { Room } from "./Room";

export const metadata = {
  title: "Liveblocks Cursors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <Room>{ children }</Room>
      </body>
    </html>
  );
}
