import { Field, ObjectType } from '@nestjs/graphql';
import { Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type PlaceDocument = Place & Document;

@ObjectType()
@Schema()
export class Place {
    @Field()
    name: string;

    @Field()
    address: string;
}

export const PlaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true }
});