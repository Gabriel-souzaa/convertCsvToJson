import fs from 'fs';
import { IGenarateJson } from './GenarateJson.interface';

export class GenerateJsonService {
  async generate({ data, fileName }: IGenarateJson): Promise<void> {
    fs.writeFile(`./uploads/${fileName}.json`, JSON.stringify(data), (err) => {
      if (err) throw err;
      console.log('O arquivo json foi criado!');
    });
  }
}