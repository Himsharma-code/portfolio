const experience = {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "iconType",
      title: "Icon Type",
      type: "string",
      options: {
        list: [
          { title: "Work", value: "work" },
          { title: "Freelance", value: "freelance" },
          { title: "Education", value: "education" },
        ],
      },
    },
    {
      name: "date",
      title: "Date",
      type: "string",
      description: "e.g., '2021 - present'",
    },
  ],
};

export default experience;
