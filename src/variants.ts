export class Variant {
  private id: string;

  constructor(pId: string) {
    this.id = pId;
  }

  public getId(): string {
    return this.id;
  }
}

export const variants: Variant[] = [
  new Variant("taufkirchen"),
  new Variant("moosburg")
];

export function getStaticPaths() {
  return variants.map(pVariant => ({params: {variant: pVariant.getId()}, props: {variant: pVariant}}));
}

