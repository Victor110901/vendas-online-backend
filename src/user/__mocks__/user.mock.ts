import { UserEntity } from "../entities/user.entity";
import { UserType } from "../enums/user-type.enum";

export const userEntityMock: UserEntity = {
    cpf: '123543543',
    createdAt: new Date(),
    email: 'emailmock@email.com',
    id: 43242,
    name: 'nameMock',
    password: '$2b$10$.zpYQPE0SeKs04QcTkZyweufpuavdBlIakVKLysdLbSnMMefrTh8u',
    phone: '31983500946',
    typeUser: UserType.User,
    updatedAt: new Date(),
};