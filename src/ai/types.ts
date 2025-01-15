export interface QAPair {
  question: string;
  answer: string;
}

export type ImportStatement = {
  importedName: string;
  importPath: string;
};

export type SidebarItem = {
  type?: string;
  label?: string;
  id?: string;
  items?: SidebarItem[];
  value?: string;
  href?: string;
};

export type SidebarsConfig = {
  [key: string]: (SidebarItem | string)[];
};
