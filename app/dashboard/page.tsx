import Notebooks from "@/components/notebooks";
import { PageWrapper } from "@/components/page-wrapper";
import { getNotebook } from "@/server/notebook";

const page = async () => {
  const notebooks = await getNotebook();

  return (
    <PageWrapper breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }]}>
      <h1>Dashboard</h1>

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
