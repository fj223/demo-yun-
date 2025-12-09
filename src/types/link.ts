export interface LinkItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  url: string;
  route: string;
}

export interface HomePageProps {
  links: LinkItem[];
}

export interface SubPageProps {
  title: string;
  externalUrl: string;
  onBack: () => void;
}