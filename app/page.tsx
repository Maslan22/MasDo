import { Button } from "@/components/ui/button";
import Tasks from "@/components/masdo/tasks";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Todovex</h1>
      <Button>Click me</Button>
      <Tasks />
    </main>
  );
}
