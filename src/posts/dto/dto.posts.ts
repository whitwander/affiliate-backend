import { IsNotEmpty, IsString } from 'class-validator'

export class PostDto {
    @IsNotEmpty()
    @IsString()
    productName: string;

    @IsString()
    @IsNotEmpty()
    price: string;
}