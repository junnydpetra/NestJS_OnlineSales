/* eslint-disable prettier/prettier */
import { UserEntity } from '../entities/user.entity';

/* eslint-disable prettier/prettier */
export class ReturnUserDto {
  constructor(userEntity: UserEntity) {
    this.id = userEntity.id;
    this.name = userEntity.name;
    this.email = userEntity.email;
    this.phone = userEntity.phone;
    this.cpf = userEntity.cpf;
  }

  id: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;
}
