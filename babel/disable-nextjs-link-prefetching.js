/**
 * Based on the docs at https://nextjs.org/docs/api-reference/next/link, the
 * only way to disable prefetching is to make sure every <Link /> has <Link
 * prefetch={false} />
 *
 * We don't want to create a wrapper Component or go around changing every
 * single <Link />, so we use this Babel Plugin to add them in at build-time.
 */
module.exports = function (babel) {
    const { types: t } = babel
    return {
      name: 'disable-link-prefetching',
      visitor: {
        JSXOpeningElement(path) {
          if (path.node.name.name === 'Link') {
            path.node.attributes.push(
              t.jSXAttribute(
                t.jSXIdentifier('prefetch'),
                t.stringLiteral("force-off"),
              ),
            )
          }
        },
      },
    }
  }