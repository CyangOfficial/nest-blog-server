import { Controller, Post, UploadedFile, UseInterceptors, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express'
import { UploaderService } from './uploader.service'
import { diskStorage } from 'multer'

@Controller('uploader')
export class UploaderController {
  constructor(
    private readonly uploaderService: UploaderService
  ) {}
  // @Post('upload')
  // @UseInterceptors(FileInterceptor('image'))
  // uploadFile(@UploadedFile() file: Express.Multer.File) {
  //   console.log(file)
  // }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', { storage: diskStorage({
    destination: (req: Express.Request, file: Express.Multer.File, cb) => {
      cb(null, 'public/uploads')
    },
    filename: (req: Express.Request, file: Express.Multer.File, cb) => {
      // const url = 'a.jpg'
      cb(null, file.originalname)
    }
  }), limits: { fileSize: 1024 * 1024 * 5 } }))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const { buffer } = file
    console.log(file)
    const webpBuffer = await this.uploaderService.imgToWebp(buffer)
    return {
      file: webpBuffer,
    }
  }
}
