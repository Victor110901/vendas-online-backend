import { Controller, Post, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorators';
import { UserId } from 'src/decorators/user-id.decorator';
import { UserType } from 'src/user/enums/user-type.enum';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { AddressEntity } from './entities/address.entity';

@Roles(UserType.User)
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
}
