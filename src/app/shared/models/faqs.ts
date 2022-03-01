export interface faqs {
  data: faqsData[];
}

interface faqsData {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}
