import { Snippet } from "next/dist/compiled/@next/font/dist/google";

export interface Snippet {
  id: string;
  name: string;
  role: string;
  content: string;
}

export type SnippetResponse<T> = {
  data: T;
  status: number;
};
