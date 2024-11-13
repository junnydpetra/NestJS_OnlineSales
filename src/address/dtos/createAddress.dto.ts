/* eslint-disable prettier/prettier */
import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @IsOptional()
  complement: string;
  
  @IsInt()
  address_number: number;
  
  @IsString()
  cep: string;
  
  @IsInt()
  city_id: number;
}
