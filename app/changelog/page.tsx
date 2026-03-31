import { getEventsByYear, getYears } from "@/lib/data/changelog-data"
import ChangelogClient from "./changelog-client"

export const metadata = {
  title: "Changelog - Lobsang",
  description: "The story so far. A timeline of life events and milestones."
}

export default function ChangelogPage() {
  const eventsByYear = getEventsByYear()
  const years = getYears()

  return <ChangelogClient eventsByYear={eventsByYear} years={years} />
}
