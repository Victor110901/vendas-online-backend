import { UserEntity } from "../entities/user.entity";
import { UserType } from "../enums/user-type.enum";

export const userEntityMock: UserEntity = {
    cpf: '123543543',
    createdAt: new Date(),
    email: 'emailmock@email.com',
    id: 43242,
    name: 'nameMock',
    password: 'largePassword',
    phone: '31983500946',
    typeUser: UserType.User,
    updatedAt: new Date(),
};