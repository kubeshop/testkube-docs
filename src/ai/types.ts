export interface QAPair {
  question: string;
  answer: string;
}

export type ImportStatement = {
  importedName: string;
  importPath: string;
};
