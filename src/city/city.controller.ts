/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { CityEntity } from './entities/city.entity';
import { CityService } from './city.service';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get('/:state_id')
  async getAllCitiesByStateId(
        @Param('state_id') state_id: number,
    ): Promise<CityEntity[]> {
    return this.cityService.getAllCitiesByStateId(state_id);
  }
}
