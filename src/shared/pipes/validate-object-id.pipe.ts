import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException  } from '@nestjs/common';
import * as mongoose from 'mongoose'

@Injectable()
export class ValidateObjectIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const isObjectId = mongoose.Types.ObjectId.isValid(value)
    if(!isObjectId) throw new BadRequestException('无效的ID')
    return value;
  }
}
