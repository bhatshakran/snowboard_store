export interface DocLink {
  name: string;
  link: string;
}

export interface DocLinks {
  links?: DocLink[];
}

export interface Hero {
  hero: { title: string; body: string };
}
export type ContentType = {
  content: {
    features: { title: string; body: string }[];
    hero: { title: string; body: string };
  };
};
