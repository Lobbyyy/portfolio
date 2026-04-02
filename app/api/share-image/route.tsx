import { createShareImageResponse, shareImageSizes, type ShareImageFormat } from '@/lib/share-image'
import { VARIATIONS, getDefaultVariation, type VariationKey } from '@/lib/share-image-config'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

/**
 * Share Image API
 *
 * Generates shareable images in various formats for social media.
 *
 * Query parameters:
 * - title (required): The main title text
 * - subtitle (optional): Secondary text/excerpt
 * - tag (optional): Category tag (e.g., "Essay", "Resource")
 * - format (required): vertical | square | instagram | landscape
 * - variation (optional): Variation key (e.g., "a", "b", "c"). Defaults to first variation for format.
 *
 * Example:
 * /api/share-image?title=My%20Essay&subtitle=A%20short%20description&tag=Essay&format=square&variation=b
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const title = searchParams.get('title')
  const subtitle = searchParams.get('subtitle') || undefined
  const tag = searchParams.get('tag') || undefined
  const format = searchParams.get('format') as ShareImageFormat | null
  const variation = searchParams.get('variation') || undefined

  // Validate required parameters
  if (!title) {
    return new Response(
      JSON.stringify({ error: 'Missing required parameter: title' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }

  if (!format || !shareImageSizes[format]) {
    return new Response(
      JSON.stringify({
        error: 'Missing or invalid parameter: format',
        validFormats: Object.keys(shareImageSizes),
      }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }

  // Get valid variations for this format
  const validVariations = VARIATIONS[format].map(v => v.key)
  const selectedVariation: VariationKey = variation && validVariations.includes(variation as VariationKey)
    ? (variation as VariationKey)
    : getDefaultVariation(format)

  try {
    return createShareImageResponse({
      title,
      subtitle,
      tag,
      format,
      variation: selectedVariation,
    })
  } catch (error) {
    console.error('Error generating share image:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to generate image' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
