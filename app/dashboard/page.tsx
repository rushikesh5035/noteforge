import CreateNotebookButton from "@/components/create-notebook-button";
import NotebookCard from "@/components/notebook-card";
import { PageWrapper } from "@/components/page-wrapper";
import { getNotebooks } from "@/server/notebook";

const page = async () => {
  const notebooks = await getNotebooks();

  return (
    <PageWrapper breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }]}>
      <h1>Notebooks</h1>

      <CreateNotebookButton />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {notebooks.success &&
          notebooks?.notebooks?.map((notebook) => (
            <NotebookCard key={notebook.id} notebook={notebook} />
          ))}
      </div>

      {notebooks.success && notebooks?.notebooks?.length === 0 && (
        <div>No Notebooks Found</div>
      )}
    </PageWrapper>
  );
};

export default page;
