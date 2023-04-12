import { IsString, IsOptional, IsInt } from "class-validator";

export class CreateAddressDto {
    @IsString()
    @IsOptional()
    complement: string

    @IsString()
    numberAddress: number;

    @IsString()
    cep: string;

    @IsInt()
    cityId: number;
}