import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function Home() {
  const count = await prisma.post.count();
  return <main style={{ padding: 40 }}>Posts: {count}</main>;
}
