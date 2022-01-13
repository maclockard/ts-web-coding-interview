import { ServerApi, CellData } from "./api";
import { v4 as uuid } from "uuid";

class DefaultServer implements ServerApi {
  private cellData: CellData[] = [
    {
      id: uuid(),
      text: "hello world"
    }
  ];

  private static FAILURE_PERCENT = 0.0;
  private static SERVER_DELAY = 0;

  getCells(): Promise<CellData[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > DefaultServer.FAILURE_PERCENT) {
          resolve(this.cellData);
        } else {
          reject("Server error");
        }
      }, DefaultServer.SERVER_DELAY);
    });
  }

  updateCells(newCells: CellData[]): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > DefaultServer.FAILURE_PERCENT) {
          this.cellData = [...newCells];
          resolve();
        } else {
          reject("Server error");
        }
      }, DefaultServer.SERVER_DELAY);
    });
  }
}

export const SERVER = new DefaultServer();
