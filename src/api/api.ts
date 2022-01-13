export interface CellData {
  id: string;
  text: string;
}

export interface ServerApi {
  getCells(): Promise<CellData[]>;

  updateCells(newCells: CellData[]): Promise<void>;
}
