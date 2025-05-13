const profile = {
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
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
      name: "headline",
      title: "Headline",
      type: "text",
      description: "Brief description that appears under your name",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "cvUrl",
      title: "CV URL",
      type: "url",
      description: "Link to your CV/resume",
    },
    {
      name: "linkedinUrl",
      title: "LinkedIn URL",
      type: "url",
    },
    {
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
    },
    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "passions",
      title: "Passions",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "education",
      title: "Education",
      type: "string",
    },
    {
      name: "availability",
      title: "Availability Status",
      type: "string",
      description: "e.g., 'Available to work', 'Open to freelance'",
    },
  ],
};

export default profile;
