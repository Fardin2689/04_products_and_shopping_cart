import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ProductDto } from './dto/product.dto';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('api/product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('add')
  @UseInterceptors(FilesInterceptor('images'))
  uploadFile(
    @Body() body: ProductDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ): Promise<Product> {
    return this.productService.addProduct(body, files);
    // console.log(files, body);
  }

  @Get()
  getProducts(): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProductById(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productService.getProductById(id);
  }
}
