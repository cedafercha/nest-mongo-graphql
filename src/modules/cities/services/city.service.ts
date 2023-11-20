import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { City, CityDocument } from '../graphql/models/city.model';

@Injectable()
export class CityService {
    constructor(@InjectModel(City.name) private cityModel: Model<CityDocument>) { }

    async findAll(): Promise<City[]> {
        return this.cityModel.find().exec();
    }

    async findOne(id: string): Promise<City> {
        return this.cityModel.findById(id).exec();
    }

    async findOneByName(cityName: string): Promise<City> {
        return this.cityModel.findOne({name: cityName}).exec();
    }

    async create(city: City): Promise<City> {        
        const newCity = new this.cityModel(city);
        return newCity.save();
    }

    async update(id: string, city: City): Promise<City> {
        return this.cityModel.findByIdAndUpdate(id, city, { new: true }).exec();
    }

    async delete(id: string): Promise<City> {
        return this.cityModel.findByIdAndDelete(id).exec();
    }
}