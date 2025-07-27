import { PageWrapper } from "@/components/page-wrapper";
import RichTextEditor from "@/components/rich-text-editor";
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
    </PageWrapper>
  );
};

export default NotebookPage;
