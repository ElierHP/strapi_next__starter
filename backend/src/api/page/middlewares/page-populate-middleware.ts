"use strict"

/**
 * `page-populate-middleware` middleware
 */

const populate = {
  contentSections: {
    populate: {
      picture: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      buttons: {
        populate: true,
      },
      submitButton: {
        populate: true,
      },
    },
  },
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query = {
      populate,
      filters: { slug: ctx.query.filters.slug },
    }

    console.log("page-populate-middleware.ts: ctx.query = ", ctx.query)

    await next()
  }
}
