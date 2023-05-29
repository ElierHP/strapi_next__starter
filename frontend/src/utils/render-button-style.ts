export function renderButtonStyle(type: string) {
  switch (type) {
    case "primary":
      return "px-8 py-2 text-lg font-semibold rounded bg-emerald-400 dark:bg-emerald-400 dark:text-gray-900"
    case "secondary":
      return "px-8 py-2 text-lg font-semibold border border-black	rounded dark:border-gray-100"
    default:
      return "px-8 py-2 text-lg font-semibold rounded dark:bg-emerald-400 dark:text-gray-900"
  }
}
