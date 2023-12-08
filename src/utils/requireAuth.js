import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isAuhtorized = false;

  if (!isAuhtorized) {
    return redirect("/auth?message=You must login first!");
  }
}
