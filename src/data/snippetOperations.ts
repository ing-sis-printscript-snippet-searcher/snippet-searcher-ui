import {CreateSnippet, UpdateSnippet} from '@/data/snippet'
import {Snippet, SnippetResponse} from "@/util/types";

export interface SnippetOperations {
  listSnippetDescriptors(): Promise<SnippetResponse<Snippet[]>>

  createSnippet(createSnippet: CreateSnippet): Promise<SnippetResponse<Snippet>>

  getSnippetById(id: string): Promise<SnippetResponse<Snippet> | undefined>

  updateSnippetById(id: string, updateSnippet: UpdateSnippet): Promise<SnippetResponse<Snippet>>
}
