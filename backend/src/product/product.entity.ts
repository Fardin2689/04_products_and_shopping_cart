import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  discountP: number;

  @Column()
  aNumber: string;

  @Column()
  sNamber: number;

  @Column()
  thumbnail: string;

  @Column({ type: 'bytea', select: false })
  mainImg: Buffer;
}
