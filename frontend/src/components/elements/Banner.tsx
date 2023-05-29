import classNames from "classnames"

function colors(type: string) {
  switch (type) {
    case "info":
      return "bg-emerald-400"
    case "warning":
      return "bg-yellow-500"
    case "alert":
      return "bg-rose-500"
    default:
      return "bg-gray-900"
  }
}

interface BannerProps {
  data: {
    title: string
    text: string
    type: string
    link: {
      id: number
      url: string
      newTab: boolean
      text: string
    }
    show: boolean
  } | null
}

export default function Banner({ data }: BannerProps) {
  if (!data) return null

  const { title, text, type, link, show } = data
  return (
    <>
      {show ? (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
          <div
            className={classNames(
              "pointer-events-auto flex items-center justify-between gap-x-6 py-2.5 px-6 sm:rounded-xl sm:py-3 sm:pr-3.5 sm:pl-4",
              colors(type)
            )}
          >
            <p className="text-sm leading-6 text-white">
              <a href={link.url} target={link.newTab ? "_blank" : "_self"}>
                <strong className="font-semibold">{title}</strong> {text}&nbsp;
                <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
      ) : null}
    </>
  )
}
