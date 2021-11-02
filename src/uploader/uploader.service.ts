import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp'

@Injectable()
export class UploaderService {
  constructor() { }
  async imgToWebp(img: Buffer) {
    return await sharp(img).webp({ lossless: true }).toBuffer()
  }
}
