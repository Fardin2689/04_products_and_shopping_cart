import { Injectable, NotFoundException } from '@nestjs/common';
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
    return this.pruducRepository.find({
      select: [
        'id',
        'title',
        'price',
        'discountP',
        'aNumber',
        'sNumber',
        'mainThumb',
      ],
      order: {
        id: 'ASC',
      },
    });
  }

  async getProductById(id: number): Promise<Product> {
    const found = await this.pruducRepository.findOne(id);
    if (!found) throw new NotFoundException(`product with Id:${id} not found`);
    return found;
  }

  async deleteProduct(id: number): Promise<void> {
    const result = await this.pruducRepository.delete(id);
    if (result.affected === 0)
      throw new NotFoundException(`product with ID ${id} not found.`);
  }

  async buyProducts(items): Promise<void> {
    items.forEach(async (el) => {
      const product = await this.getProductById(el.id);
      product.aNumber -= el.qty;
      product.sNumber = el.qty;
      await product.save();
    });
  }
}
