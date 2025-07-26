import CreateNotebookButton from "@/components/create-notebook-button";
import { PageWrapper } from "@/components/page-wrapper";
import { getNotebooks } from "@/server/notebook";

const page = async () => {
  const notebooks = await getNotebooks();

  return (
    <PageWrapper breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }]}>
      <h1>Dashboard</h1>

      <CreateNotebookButton />

      <div>
        {notebooks.success &&
          notebooks?.notebooks?.map((notebook) => (
            <div key={notebook.id}>{notebook.name}</div>
          ))}
      </div>

      {notebooks.success && notebooks?.notebooks?.length === 0 && (
        <div>No Notebooks Found</div>
      )}
    </PageWrapper>
  );
};

export default page;
