import { Param, Controller, Post, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorators';
import { UserType } from 'src/user/enums/user-type.enum';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { AddressEntity } from './entities/address.entity';

@Roles(UserType.User)
@Controller('address')
export class AddressController {

    constructor(private readonly addressService: AddressService) {}

    @Post('/:userId')
    @UsePipes(ValidationPipe)
    async createAddress(
        @Body() createAddressDto: CreateAddressDto,
        @Param('userId') userId: number,    
    ): Promise<AddressEntity> {
        return this.addressService.createAddress(createAddressDto, userId);
    }
}
