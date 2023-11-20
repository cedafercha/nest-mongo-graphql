import { InputType, ObjectType, Field } from '@nestjs/graphql';

@InputType()
@ObjectType()
export class PlaceInput {
    @Field()
    name: string;

    @Field()
    address: string;
};