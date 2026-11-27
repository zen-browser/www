/**
 * Builders for schema.org JSON-LD. Every node carries a stable `@id` so that the same entity
 * emitted on several pages (e.g. the Organization) resolves to a single node in a knowledge graph.
 */

export type JsonLd = Record<string, unknown>

export const SCHEMA_CONTEXT = 'https://schema.org'

/** Stable entity ids, relative to the site origin. */
const ids = (site: string) => ({
  organization: `${site}/#organization`,
  website: `${site}/#website`,
  software: `${site}/#software`,
})

export type SchemaContext = {
  /** Site origin without trailing slash, e.g. `https://zen-browser.app`. */
  site: string
  name: string
  description: string
  /** Absolute URL of a square logo. */
  logo: string
  /** Absolute URL of a representative image. */
  image: string
  /** Current stable version, e.g. `1.24.3b`. */
  version?: string
  /** Names of the headline features. */
  features?: string[]
  inLanguage: string
}

export const SAME_AS = [
  'https://github.com/zen-browser',
  'https://discord.gg/zen-browser',
  'https://www.patreon.com/zen_browser',
  'https://ko-fi.com/zen_browser',
]

export function organizationSchema(ctx: SchemaContext): JsonLd {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'Organization',
    '@id': ids(ctx.site).organization,
    name: ctx.name,
    url: `${ctx.site}/`,
    logo: { '@type': 'ImageObject', url: ctx.logo },
    sameAs: SAME_AS,
  }
}

export function websiteSchema(ctx: SchemaContext): JsonLd {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'WebSite',
    '@id': ids(ctx.site).website,
    name: ctx.name,
    url: `${ctx.site}/`,
    inLanguage: ctx.inLanguage,
    publisher: { '@id': ids(ctx.site).organization },
  }
}

export function softwareApplicationSchema(ctx: SchemaContext): JsonLd {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'SoftwareApplication',
    '@id': ids(ctx.site).software,
    name: ctx.name,
    description: ctx.description,
    url: `${ctx.site}/`,
    image: ctx.image,
    applicationCategory: 'BrowserApplication',
    operatingSystem: 'macOS, Windows, Linux',
    ...(ctx.version ? { softwareVersion: ctx.version } : {}),
    ...(ctx.features?.length ? { featureList: ctx.features } : {}),
    downloadUrl: `${ctx.site}/download`,
    license: 'https://www.mozilla.org/en-US/MPL/2.0/',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@id': ids(ctx.site).organization },
    publisher: { '@id': ids(ctx.site).organization },
  }
}

export type Crumb = {
  name: string
  /** Absolute URL. */
  url: string
}

export function breadcrumbSchema(crumbs: Crumb[]): JsonLd {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}

export type FaqItem = {
  question: string
  answer: string
}

/**
 * Builds `FAQPage` markup. Only use this with questions and answers that are visible on the page.
 */
export function faqSchema(items: FaqItem[]): JsonLd {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
}

/** Serializes JSON-LD safely for embedding inside a `<script>` element. */
export function serializeJsonLd(data: JsonLd): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
