import { defineField, defineType } from "sanity";

export default defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "profession",
      title: "Profession",
      type: "string",
    }),
    defineField({
      name: "staff",
      title: "BLK Tech ODB Staff",
      type: "boolean",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "socials",
      type: "array",
      title: "Social Media",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              type: "string",
              title: "Social Media Platform",
              options: {
                list: [
                  { title: "Twitter", value: "twitter" },
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "Facebook", value: "facebook" },
                  { title: "Instagram", value: "instagram" },
                  { title: "TikTok", value: "tiktok" },
                  { title: "Website", value: "website" },
                ],
              },
            },
            {
              name: "username",
              type: "string",
              title: "Username",
            },
          ],
          preview: {
            select: {
              platform: "platform",
              username: "username",
            },
            prepare: ({ platform, username }) => ({
              title:
                platform === "Website" || platform === "website"
                  ? username
                  : `${platform}: ${username}`,
              subtitle:
                platform === "Website" || platform === "website"
                  ? username
                  : `www.${platform}.com/${username}`,
            }),
          },
        },
      ],
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
