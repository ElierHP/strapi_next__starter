import { fetchAPI } from "@/utils/fetch-api"
import { sectionRenderer } from "@/utils/section-renderer"

async function getPageBySlug(slug: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN
  const path = `/pages`
  const urlParamsObject = { filters: { slug } }
  const options = { headers: { Authorization: `Bearer ${token}` } }
  const response = await fetchAPI(path, urlParamsObject, options)
  return response
}

export default async function RootRoute({
  params,
}: {
  params: { slug: string }
}) {
  const page = await getPageBySlug(params.slug)

  if (page.data.length === 0) return null
  const contentSections = page.data[0].attributes.contentSections
  return contentSections.map((section: any, index: number) =>
    sectionRenderer(section, index)
  )
}
