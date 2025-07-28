import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import React, { Suspense } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <AppSidebar />
      </Suspense>
      <main className="flex-1">{children}</main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
