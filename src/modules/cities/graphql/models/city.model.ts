import { Field, ObjectType } from '@nestjs/graphql';
import { Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Place, PlaceSchema } from './place.model';

export type CityDocument = City & Document;

@ObjectType()
@Schema()
export class City {
    @Field()
    name: string;

    @Field(() => [Place], { nullable: true })
    places?: Place[];
}

export const CitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    places: [PlaceSchema]
});