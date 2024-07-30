export interface itemI {
  count: number;
  description: string[];
  id: number;
  number: string;
  position: number;
  title: string;
}

export interface ModelWindowProps {
  item: itemI;
}
