import { Studio, type WorkspaceOptions } from "sanity";
import { deskTool } from "sanity/desk";

export type ConfigProps = Pick<WorkspaceOptions, "projectId" | "title">;

type ContentEditorProps = {
  config?: Partial<ConfigProps>;
};

const baseConfig = {
  basePath: "/",
  plugins: [deskTool()],
  schema: {
    types: [
      {
        name: "item",
        title: "Item",
        type: "document",
        fields: [
          {
            name: "title",
            title: "Title",
            type: "string",
          },
        ],
      },
    ],
  },
  projectId: "",
  dataset: "production",
};

export default function ContentEditor({ config = {} }: ContentEditorProps) {
  return <Studio config={{ ...baseConfig, ...config }} />;
}
