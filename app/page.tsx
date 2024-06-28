import Image from "next/image";
import logo from "../public/logo.png";
import { Button } from "@/components/ui/button";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Todovex</h1>
      <Button>Click me</Button>
      {tasks?.map((task, idx)=> (
        <p key={idx}>{JSON.stringify(task)}</p>
      ))}
    </main>
  );
}
