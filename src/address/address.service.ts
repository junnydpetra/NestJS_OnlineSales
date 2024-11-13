/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { AddressEntity } from './entities/address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
  ) {}

  async createAddress(
    createAddressDto: CreateAddressDto,
    user_id: number,
    ) : Promise<AddressEntity> {
        console.log('createAddressDto', createAddressDto);
    return this.addressRepository.save({
        ...createAddressDto,
        user_id,        
    });
  }
}
 