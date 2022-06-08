import { IsNumber, IsString, MinLength } from "class-validator";

export class BookDto{
    @IsString()
    id : string;

    @IsString()
    @MinLength(10)
    name: string;
    
    @IsNumber()
    price: number;
    
    @IsString()
    author: string
}