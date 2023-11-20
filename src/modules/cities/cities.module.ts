import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CityService } from './services/city.service';
import { CityResolver } from './city.resolver';
import { City, CitySchema } from './graphql/models/city.model';

@Module({
    providers: [
        CityService,
        CityResolver
    ],
    imports: [MongooseModule.forFeature([
        {
            name: City.name,
            schema: CitySchema,
        },
    ]),
  ],
})

export class CitiesModule {}