export type Position = {
  id: string;
  organization: string;
  role: string;
  context: string[];
  startDate: string;
  endDate?: string;
  description: string;
  tags: string[];
  url?: string;
};
