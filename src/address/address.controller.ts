/* eslint-disable prettier/prettier */
import {
    Body,
  Controller,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { AddressService } from './address.service';
import { AddressEntity } from './entities/address.entity';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post('/:user_id')
  @UsePipes(ValidationPipe)
  async createAddress(
    @Body() createAddressDto: CreateAddressDto,
    @Param('user_id') user_id: number,
  ): Promise<AddressEntity> {
    return this.addressService.createAddress(createAddressDto, user_id);
  }
}
