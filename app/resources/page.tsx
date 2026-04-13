import { getResourcesByType, getAllResourceTags } from "@/lib/resources"
import { bookmarks, getAllBookmarkTags } from "@/lib/data/resources-data"
import ResourcesClient from "./resources-client"

export const metadata = {
  title: "Resources | Lobsang Lama",
  description: "In-depth analysis, practical guides, and curated links for builders.",
}

export default function ResourcesPage() {
  // Load data on the server
  const deepDives = getResourcesByType("deep-dive")
  const guides = getResourcesByType("guide")
  const deepDiveTags = getAllResourceTags("deep-dive")
  const guideTags = getAllResourceTags("guide")
  const bookmarkTags = getAllBookmarkTags()

  return (
    <ResourcesClient
      deepDives={deepDives}
      guides={guides}
      bookmarks={bookmarks}
      deepDiveTags={deepDiveTags}
      guideTags={guideTags}
      bookmarkTags={bookmarkTags}
    />
  )
}
