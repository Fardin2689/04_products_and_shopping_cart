import { EntityRepository, Repository } from 'typeorm';
import { ProductDto } from './dto/product.dto';
import { Product } from './product.entity';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  async saveProduct(
    { title, price, discountP, aNumber, uploaded, thumbs }: ProductDto,
    files: Express.Multer.File[],
  ): Promise<Product> {
    const prod = new Product();
    prod.title = title;
    prod.price = price;
    prod.discountP = discountP;
    prod.aNumber = aNumber;
    prod.sNamber = 0;
    prod.uploaded = uploaded;
    thumbs.forEach((el, ind) => {
      if (ind === 0) prod.mainThumb = el;
      else prod[`thumb${ind}`] = el;
    });
    files.forEach((el, ind) => {
      if (ind === 0) prod.mainImg = el.buffer;
      else prod[`img${ind}`] = el.buffer;
    });

    await prod.save();
    return prod;
  }
}
