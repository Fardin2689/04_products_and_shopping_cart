import {
  Body,
  Controller,
  Delete,
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
    console.log(files, body);
    return this.productService.addProduct(body, files);
  }

  @Get()
  getProducts(): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProductById(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productService.getProductById(id);
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.productService.deleteProduct(id);
  }

  @Post('buy')
  buyProducts(@Body() body) {
    return this.productService.buyProducts(body);
  }
}
