export interface PageLinks {
  first?: {
    href: string;
  };
  prev?: {
    href: string;
  };
  self: {
    href: string;
  };
  next?: {
    href: string;
  };
  last?: {
    href: string;
  };
}

export interface PageDetails {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}

export interface Page<T> {
  _embedded: {
    [key: string]: T[];
  };
  _links: PageLinks;
  page: PageDetails;
}
