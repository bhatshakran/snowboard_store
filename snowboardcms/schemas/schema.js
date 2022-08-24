// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import { array, string } from "prop-types";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "mySchema",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      name: "snowboard",
      type: "document",
      title: "Snowboard",
      fields: [
        {
          title: "Name",
          name: "name",
          type: "string",
        },
        {
          title: "Brand",
          name: "brand",
          type: "string",
        },
        {
          title: "Description",
          name: "description",
          type: "text",
        },
        {
          title: "Features",
          name: "features",
          type: "object",
          fields: [
            { name: "base", title: "Base", type: "string" },
            { name: "bend", title: "Bend", type: "string" },
            { name: "construction", title: "Construction", type: "string" },
            { name: "core", title: "Core", type: "string" },
            { name: "reinforcement", title: "Reinforcement", type: "string" },
            { name: "sidewall", title: "Sidewall", type: "string" },
          ],
        },
        {
          title: "Measurements and Parameters",
          name: "measurements_and_parameters",
          type: "array",
          of: [
            {
              name: "parameters",
              title: "Parameters",
              type: "object",
              fields: [
                { title: "Size", name: "size", type: "string" },
                { name: "length", title: "Length", type: "string" },
                {
                  name: "running_length",
                  title: "Running Length",
                  type: "string",
                },
                { name: "nose_width", title: "Nose Width", type: "string" },
                { name: "waist_width", title: "Waist Width", type: "string" },
                { name: "tail_width", title: "Tail Width", type: "string" },
                {
                  name: "sidecut_radius",
                  title: "Sidecut Radius",
                  type: "string",
                },
                { name: "stance_width", title: "Stance Width", type: "string" },
                { name: "setback", title: "Setback", type: "string" },
                {
                  name: "riders_weight",
                  title: "Riders Weight",
                  type: "string",
                },
              ],
            },
          ],
        },

        {
          name: "img",
          title: "Img",
          type: "image",
        },
      ],
    },
    {
      name: "user",
      type: "document",
      title: "User",
      fields: [
        {
          name: "email",
          title: "Email",
          type: "string",
        },
      ],
    },
    {
      title: "Images",
      name: "images",
      type: "document",
      fields: [
        {
          name: "img",
          title: "Img",
          type: "object",
          fields: [
            { name: "logo", title: "Logo", type: "image" },
            { name: "hero", title: "Hero", type: "image" },
          ],
        },
      ],
    },
  ]),
});
