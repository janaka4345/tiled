/**
 * Prepends the file with JSDoc containing author and license info
 *
 * @type {import('@sly-cli/sly').Transformer}
 */
export default function jsMetaComments(input, meta) {
  return [
    `/**`,
    ` * Downloaded from ${meta.name}`,
    ` * @license ${meta.license} -->`,
    ` * @see ${meta.source}`,
    `*/`,
    input,
  ].join("\n")
}