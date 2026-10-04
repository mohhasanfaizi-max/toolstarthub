import { ToolsView, toolsMetadata } from "@/views/ToolsView";

export async function generateMetadata({ searchParams }: PageProps<"/tools">) {
  return toolsMetadata("en", await searchParams);
}

export default function ToolsPage() {
  return <ToolsView locale="en" />;
}
