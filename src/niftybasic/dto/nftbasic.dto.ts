import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { IsNotEmpty, IsString, Length } from "class-validator";


export class NftBasicDto{
    @ApiProperty({type: String,description: "ContractAddress",minimum:5,maximum:120,example:'0xaa6013d9c1ed5d44e262285a2f6d9b2c31cbefc4',})
    @IsNotEmpty({message: 'Invalid contractAddress'})
    @IsString({message: 'ContractAddress must be string'})
    @Length(1,400, {message: 'Contrant Adress length error'})
    contractAddress: string;
    @ApiProperty({type: String,description: "Token Id",minimum:5,maximum:120,example:3000482 ,})
    @IsNotEmpty({message: 'Invalid tokenId'})
    @IsString({message: 'tokenId must be number'})
    @Length(1,20, {message: 'TokenId length error'})
    tokenId: number;
    @ApiProperty({type: String,description: "Chain Id",minimum:5,maximum:120,example:4 ,})
    @IsNotEmpty({message: 'Invalid chainId'})
    @IsString({message: 'chainId must be number'})
    @Length(1,20, {message: 'chainId length error'})
    chainId: number;
}