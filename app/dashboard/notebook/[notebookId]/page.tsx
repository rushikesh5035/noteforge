import CreateNoteButton from "@/components/create-note-button";
import NoteCard from "@/components/note-card";
import { PageWrapper } from "@/components/page-wrapper";
import { getNotebookById } from "@/server/notebook";

import React from "react";

type Params = Promise<{
  notebookId: string;
}>;

const NotebookPage = async ({ params }: { params: Params }) => {
  const { notebookId } = await params;

  const { notebook } = await getNotebookById(notebookId);

  return (
    <PageWrapper
      breadcrumbs={[
        {
          label: "Dashboard",
          href: "/dashboard",
        },
        {
          label: notebook?.name ?? "Note",
          href: `/dashboard/note/${notebookId}`,
        },
      ]}
    >
      <h1 className="text-2xl font-bold">{notebook?.name}</h1>

      <CreateNoteButton notebookId={notebookId} />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {notebook?.notes?.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </PageWrapper>
  );
};

export default NotebookPage;
