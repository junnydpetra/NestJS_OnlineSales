/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CityEntity } from './entities/city.entity';
import { CacheService } from 'src/cache/cache.service';

@Injectable()
export class CityService {

    constructor(
    @InjectRepository(CityEntity)
        private readonly cityRepository: Repository<CityEntity>,
        private readonly cacheService: CacheService,
    ) {}

  async getAllCitiesByStateId(state_id: number): Promise<CityEntity[]> {
    return this.cacheService.getCache<CityEntity[]>(`state_${state_id}`,
        () => this.cityRepository.find({
            where: {
                state_id
            },
        })
    )
  }

  async findCityById(city_id: number): Promise<CityEntity> {
    const city = await this.cityRepository.findOne({
        where: {
            id: city_id
        }
    });

    if (!city) {
        throw new NotFoundException(`City ID: ${city_id} not found!`);
    }

    return city;
  }
}
