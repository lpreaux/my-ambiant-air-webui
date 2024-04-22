import { Page } from "../../../types/page";
import { Thread } from "./thread";

export interface Category {
  key: string;
  name: string;
  totalThreads: number;
  threads: Page<Thread>;
}
