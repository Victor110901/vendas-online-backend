import { Controller, Post, UsePipes, ValidationPipe, Body, Get } from '@nestjs/common';
import { Roles } from '../decorators/roles.decorators';
import { UserId } from '../decorators/user-id.decorator';
import { UserType } from '../user/enums/user-type.enum';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { ReturnAddressDto } from './dtos/returnAddress.dto';
import { AddressEntity } from './entities/address.entity';

@Roles(UserType.User, UserType.Admin)
@Controller('address')
export class AddressController {
    
    constructor(private readonly addressService: AddressService) {}
    
    @Post()
    @UsePipes(ValidationPipe)
    async createAddress(
        @Body() createAddressDto: CreateAddressDto,
        @UserId() userId: number,    
    ): Promise<AddressEntity> {
        return this.addressService.createAddress(createAddressDto, userId);
    }
    
    @Get()
    async findAddressByUserId(
        @UserId() userId: number,    
    ): Promise<ReturnAddressDto[]> {
        return (await this.addressService.findAddressByUserId(userId)).map(
            (address) => new ReturnAddressDto(address),
            );
    }
}
