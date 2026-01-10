import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/note/$id")({ component: NoteComponent });

function NoteComponent() {
  const { id } = Route.useParams();
  return <div>RenderNote {id}</div>;
}
