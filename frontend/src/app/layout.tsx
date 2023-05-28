import type { Metadata } from "next"
import "@/globals.css"
import { Inter } from "next/font/google"
import { getStrapiMedia, getStrapiURL } from "@/utils/api-helpers"
import { fetchAPI } from "@/utils/fetch-api"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Banner from "@/components/elements/Banner"

const inter = Inter({ subsets: ["latin"] })

const FALLBACK_SEO = {
  title: "Strapi Next Starter",
  description: "Strapi Next Starter",
}

async function getGlobal(): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN

  if (!token)
    throw new Error("The Strapi API Token environment variable is not set.")

  const path = `/global`
  const options = { headers: { Authorization: `Bearer ${token}` } }

  const urlParamsObject = {
    populate: [
      "metadata.shareImage",
      "favicon",
      "notificationBanner.link",
      "navbar.links",
      "navbar.navbarLogo.logoImg",
      "footer.footerLogo.logoImg",
      "footer.menuLinks",
      "footer.legalLinks",
      "footer.socialLinks",
    ],
  }

  const response = await fetchAPI(path, urlParamsObject, options)
  return response
}

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getGlobal()

  if (!meta.data) return FALLBACK_SEO
  const { metadata, favicon } = meta.data.attributes

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    icons: {
      icon: [
        new URL(favicon.data && favicon.data.attributes.url, getStrapiURL()),
      ],
    },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const global = await getGlobal()

  const { notificationBanner, navbar, footer } = global.data.attributes

  const navbarLogoUrl = getStrapiMedia(
    navbar?.navbarLogo?.logoImg?.data
      ? navbar.navbarLogo.logoImg.data.attributes.url
      : null
  )

  const footerLogoUrl = getStrapiMedia(
    footer?.footerLogo?.logoImg?.data
      ? footer.footerLogo.logoImg.data.attributes.url
      : null
  )

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar
          links={navbar?.links}
          logoUrl={navbarLogoUrl}
          logoText={
            navbar?.navbarLogo?.logoText
              ? navbar.navbarLogo.logoText
              : "Starter Theme"
          }
        />

        <main>{children}</main>

        <Banner data={notificationBanner} />

        <Footer
          logoUrl={footerLogoUrl}
          logoText={
            footer?.footerLogo?.logoText
              ? footer?.footerLogo.logoText
              : "Starter Theme"
          }
          menuLinks={footer?.menuLinks}
          legalLinks={footer?.legalLinks}
          socialLinks={footer?.socialLinks}
          copyright={footer?.copyright}
        />
      </body>
    </html>
  )
}
