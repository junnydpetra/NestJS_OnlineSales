/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CityEntity } from './entities/city.entity';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class CityService {

    constructor(
    @InjectRepository(CityEntity)
        private readonly cityRepository: Repository<CityEntity>,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ) {}

  async getAllCitiesByStateId(state_id: number): Promise<CityEntity[]> {
    const citiesCashe: CityEntity[] = await this.cacheManager.get(`state_${state_id}`);
    
    if (citiesCashe) {
        return citiesCashe;
    }

    const cities = await this.cityRepository.find({
        where: {
            state_id
        },
    });
    
    await this.cacheManager.set(`state_${state_id}`, cities);

    return cities;
  }
}
