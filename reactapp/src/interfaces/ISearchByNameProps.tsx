export interface ISearchByNameProps {
  label: string;
  id: string;
  entryName: string;
  setEntryName: (value: string) => void;
  isSearchDisabled: boolean;
  setIsSearchDisabled: (value: boolean) => void;
  searchAction: (value: React.MouseEvent<HTMLElement>) => void;
  description: string;
  helperText: string;
}