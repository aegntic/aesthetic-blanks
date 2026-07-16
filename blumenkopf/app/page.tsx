import { redirect } from "next/navigation";

// Site root falls through to the Home plate (capture entry was /about; the studio's
// own front index lives at /home). Override per [USER_PROJECT] if root should be About.
export default function RootPage(): never {
  redirect("/home");
}
