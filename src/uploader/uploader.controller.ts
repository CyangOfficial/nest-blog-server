import { Controller, Post, UploadedFile, UseInterceptors, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express'
import { UploaderService } from './uploader.service'
import { diskStorage } from 'multer'

@Controller('uploader')
export class UploaderController {
  constructor(
    private readonly uploaderService: UploaderService
  ) { }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', { limits: { fileSize: 1024 * 1024 * 5 } }))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return await this.uploaderService.uploadFile(file)
  }
}
