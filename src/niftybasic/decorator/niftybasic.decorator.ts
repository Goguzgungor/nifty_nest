import { SetMetadata, Get, HttpCode, applyDecorators, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { NftBasicDto } from '../dto/nftbasic.dto';
import { NotFoundDto, ForbiddenDto, ValidationDto } from '../../models/default.dto';
export function getNft() {
    return applyDecorators(
        Get("/getNft"),
        HttpCode(200),
        ApiBody({type: NftBasicDto}),
        ApiOperation({summary:'Get the nft'}),
        ApiResponse({ status: 200, description: "OK", type: NftBasicDto }),
        ApiResponse({ status: 403, type: ForbiddenDto }),
        ApiResponse({ status: 404, type: NotFoundDto }),
        ApiResponse({ status: 422, type: ValidationDto }),
    )
}  
export function getCustomNft(path:string) {
    return applyDecorators(
        Post(path),
        HttpCode(200),
        ApiBody({type: NftBasicDto}),
        ApiOperation({summary:'Gets the specific nft'}),
        ApiResponse({ status: 200, description: "OK", type: NftBasicDto }),
        ApiResponse({ status: 403, type: ForbiddenDto }),
        ApiResponse({ status: 404, type: NotFoundDto }),
        ApiResponse({ status: 422, type: ValidationDto }),
    )
}  

