export type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  beds: string;
  baths: string;
  sqft: string;
  tag: string;
  description: string;
};

export const properties: Property[] = [
  {
    id: '54-fairmont-drive',
    title: '54 Fairmont Drive',
    location: 'Ocean Isle Beach, NC',
    price: 'Projected $2.0M-$2.4M',
    image: '/assets/salt-horizon-sunset-brand.jpg',
    beds: 'TBD',
    baths: 'TBD',
    sqft: 'TBD',
    tag: 'Coming Soon',
    description: 'A planned new-construction coastal residence in Ocean Isle Beach, designed for elevated coastal living and speculative sale by Salt & Horizon Signature Homes.',
  },
  {
    id: 'future-oib',
    title: 'Coastal Signature Residence',
    location: 'Southeastern NC Coast',
    price: 'Future Release',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663673420327/JqY9uRvYhrHcHGEnDvnSfU/property-sunset-2-SAaUTVMy7tUBxeg4s3RatB.webp',
    beds: 'TBD',
    baths: 'TBD',
    sqft: 'TBD',
    tag: 'Pipeline',
    description: 'A future Salt & Horizon coastal home opportunity. Details will be released as acquisition, design, and construction milestones are confirmed.',
  },
  {
    id: 'future-nc-sc',
    title: 'Horizon Collection Home',
    location: 'NC / SC Coastal Market',
    price: 'Future Release',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663673420327/JqY9uRvYhrHcHGEnDvnSfU/property-sunset-3-QmY76EpGsRAMypkaug3oMN.webp',
    beds: 'TBD',
    baths: 'TBD',
    sqft: 'TBD',
    tag: 'Planned',
    description: 'A placeholder for the next signature coastal project. This card can be updated as soon as a lot is under contract.',
  },
];
