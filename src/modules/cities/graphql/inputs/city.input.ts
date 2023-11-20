import { InputType, Field } from '@nestjs/graphql';
import { PlaceInput } from './place.input';

@InputType()
export class CityInput {
    @Field()
    name: string;
    
    @Field(() => [PlaceInput], { nullable: true })
    places?: PlaceInput[];
}