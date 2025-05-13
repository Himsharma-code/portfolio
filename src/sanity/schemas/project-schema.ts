const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "projectLink",
      title: "Project Link",
      type: "url",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Frontend", value: "Frontend" },
          { title: "Backend", value: "Backend" },
          { title: "Fullstack", value: "Fullstack" },
          { title: "Mobile", value: "Mobile" },
          { title: "Freelance", value: "Freelance" },
        ],
      },
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Self", value: "Self" },
          { title: "Client", value: "Client" },
          { title: "Freelance", value: "Freelance" },
          { title: "Work", value: "Work" },
        ],
      },
    },
  ],
};

export default project;
