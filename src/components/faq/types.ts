export interface FAQItemProps {
  question: string;
  answer: string;
  imageUrl: string;
}

export interface FAQData {
  title: string;
  subtitle: string;
  items: FAQItemProps[];
}