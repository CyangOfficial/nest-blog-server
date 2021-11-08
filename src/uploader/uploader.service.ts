import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp'
import * as OSS from 'ali-oss'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class UploaderService {
  private client: any
  constructor(
    private configService: ConfigService
  ) {
    const res = this.configService.get<string>('database')
    console.log('res',res)
    // this.client = new OSS(configService.get('alioss'))
  }
  async imgToWebp(img: Buffer) {
    return await sharp(img).webp({ lossless: true }).toBuffer()
  }
}
