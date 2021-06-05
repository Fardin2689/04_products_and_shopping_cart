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
  aNumber: number;

  @Column()
  sNumber: number;

  @Column()
  uploaded: string;

  @Column()
  mainThumb: string;

  @Column({ nullable: true })
  thumb1: string;

  @Column({ nullable: true })
  thumb2: string;

  @Column({ nullable: true })
  thumb3: string;

  @Column({ nullable: true })
  thumb4: string;

  @Column({ type: 'bytea', select: false })
  mainImg: Buffer;

  @Column({ type: 'bytea', nullable: true })
  img1: Buffer;

  @Column({ type: 'bytea', nullable: true })
  img2: Buffer;

  @Column({ type: 'bytea', nullable: true })
  img3: Buffer;

  @Column({ type: 'bytea', nullable: true })
  img4: Buffer;
}
