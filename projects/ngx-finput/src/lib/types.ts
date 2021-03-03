export interface IOptions {
  thousands: string;
  decimal: string;
  fixed: boolean;
  range: 'POSITIVE' | 'ALL';
  scale: number;
  shortcuts: { [shortcut: string]: number };
  onInvalidKey: (event: KeyboardEvent) => void;
  onFocus: (event: FocusEvent) =>  void;
}
