import { getAllContextItems, getAllContextTags, getContextCategories } from "@/lib/data/context-data"
import ContextClient from "./context-client"

export default function ContextPage() {
  // Load data on the server
  const items = getAllContextItems()
  const tags = getAllContextTags()
  const categories = getContextCategories()

  return <ContextClient items={items} tags={tags} categories={categories} />
}
