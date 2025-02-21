export const variants = [
  "taufkirchen",
  "moosburg"
];

export function getStaticPaths() {
  return variants.map(pVariant => ({params: {variant: pVariant}, props: {variant: pVariant}}));
}

