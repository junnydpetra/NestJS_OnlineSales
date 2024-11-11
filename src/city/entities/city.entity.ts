/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name:'city' })
export class CityEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'state_id', nullable: false })
  state_id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'address_number', nullable: false })
  address_number: number;

  @Column({ name: 'cep', nullable: false })
  cep: string;

  @Column({ name: 'city_id', nullable: false })
  city_id: number;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;
  
  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;
}