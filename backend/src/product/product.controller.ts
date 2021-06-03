import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ProductService } from './product.service';

@Controller('api/product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('add')
  @UseInterceptors(FilesInterceptor('images'))
  uploadFile(@Body() body, @UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files, body);
  }
}
