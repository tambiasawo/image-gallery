import { NextRequest } from "next/server";
import { signOut } from "../../../../auth";

export async function GET(req: NextRequest) {
  console.log("out");
  await signOut();
  return;
}
