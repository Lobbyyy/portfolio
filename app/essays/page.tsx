import { getAllEssays, getAllTags } from "@/lib/essays"
import EssaysClient from "./essays-client"

export default function EssaysPage() {
  // Load data on the server
  const essays = getAllEssays()
  const tags = getAllTags()

  return <EssaysClient essays={essays} tags={tags} />
}
