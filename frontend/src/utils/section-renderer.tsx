import RichText from "@/components/shared/RichText"
import Hero from "../components/sections/Hero"
import VideoEmbed from "@/components/shared/VideoEmbed"
import Media from "@/components/shared/Media"
import Quote from "@/components/shared/Quote"
import Slideshow from "@/components/shared/Slideshow"
import PageHeader from "@/components/sections/PageHeader"

export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "sections.heading":
      return <PageHeader key={index} data={section} />
    case "sections.hero":
      return <Hero key={index} data={section} />
    case "shared.media":
      return <Media key={index} data={section} />
    case "shared.rich-text":
      return <RichText key={index} data={section} />
    case "shared.slideshow":
      return <Slideshow key={index} data={section} />
    case "shared.quote":
      return <Quote key={index} data={section} />
    case "shared.video-embed":
      return <VideoEmbed key={index} data={section} />
    default:
      return null
  }
}
