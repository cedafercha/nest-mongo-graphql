import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { City } from './graphql/models/city.model';
import { CityInput } from './graphql/inputs/city.input';
import { CityService } from './services/city.service';

@Resolver(() => City)
export class CityResolver {
    constructor(private readonly cityService: CityService) { }

    //#region Queries
    @Query(() => [City])
    async cities(): Promise<City[]> {
        return this.cityService.findAll();
    }

    @Query(() => City)
    async city(@Args('id', { type: () => ID }) id: string): Promise<City> {
        return this.cityService.findOne(id);
    }

    @Query(() => City)
    async cityByName(@Args('name', { type: () => ID }) name: string): Promise<City> {
        return this.cityService.findOneByName(name);
    }
    //#endregion

    //#region Mutations
    @Mutation(() => City)
    async createCity(@Args('input') input: CityInput): Promise<City> {
        return this.cityService.create(input);
    }

    @Mutation(() => City)
    async updateCity(
        @Args('id', { type: () => ID }) id: string,
        @Args('input') input: CityInput,
    ): Promise<City> {
        return this.cityService.update(id, input);
    }

    @Mutation(() => City)
    async deleteCity(@Args('id', { type: () => ID }) id: string): Promise<City> {
        return this.cityService.delete(id);
    }
    //#endregion
}