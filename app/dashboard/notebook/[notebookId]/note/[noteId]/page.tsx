import { PageWrapper } from "@/components/page-wrapper";
import RichTextEditor from "@/components/rich-text-editor";
import { getNoteById } from "@/server/notes";
import React from "react";
import { JSONContent } from "@tiptap/react";

type Params = Promise<{
  noteId: string;
}>;

const NotePage = async ({ params }: { params: Params }) => {
  const { noteId } = await params;

  const { note } = await getNoteById(noteId);

  return (
    <PageWrapper
      breadcrumbs={[
        {
          label: "Dashboard",
          href: "/dashboard",
        },
        {
          label: note?.notebook?.name ?? "Notebook",
          href: `/dashboard/notebook/${note?.notebook?.id}`,
        },
        { label: note?.title ?? "Note", href: `/dashboard/note/${noteId}` },
      ]}
    >
      <h1 className="text-2xl font-bold">{note?.title}</h1>
      <RichTextEditor
        content={note?.content as JSONContent[]}
        noteId={noteId}
      />
    </PageWrapper>
  );
};

export default NotePage;
