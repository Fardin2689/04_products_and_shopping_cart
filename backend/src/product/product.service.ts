import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from './dto/product.dto';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private pruducRepository: ProductRepository,
  ) {}

  async addProduct(
    values: ProductDto,
    files: Express.Multer.File[],
  ): Promise<Product> {
    return this.pruducRepository.saveProduct(values, files);
  }

  async getProducts(): Promise<Product[]> {
    return this.pruducRepository.find();
  }

  async getProductById(id: number): Promise<Product> {
    return this.pruducRepository.findOne(id);
  }
}
