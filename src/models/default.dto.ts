import { ApiProperty } from "@nestjs/swagger";

export class BadRequestDto {
    @ApiProperty({ type: String, required: true, description: 'Hata Kodu', default: 'BAD_REQUEST'})
    error_code: string;
  
    @ApiProperty({ type: String, required: true, description: 'Hata mesajı', default:'Hatalı istek'})
    message: string;
}
export class UnauthorizedDto {
    @ApiProperty({ type: String, required: true, description: 'Hata Kodu', default: 'UNAUTHORIZED'})
    error_code: string;
  
    @ApiProperty({ type: String, required: true, description: 'Hata mesajı', default:'Unauthorized'})
    message: string;
}

export class ForbiddenDto {
    @ApiProperty({ type: String, required: true, description: 'Hata Kodu', default: 'FORBIDDEN'})
    error_code: string;
  
    @ApiProperty({ type: String, required: true, description: 'Hata mesajı', default:'Unauthorized'})
    message: string;
}

export class NotFoundDto {
    @ApiProperty({ type: String, required: true, description: 'Hata Kodu', default: 'NOT_FOUND'})
    error_code: string;
  
    @ApiProperty({ type: String, required: true, description: 'Hata mesajı', default:'Kayıt bulunamadı'})
    message: string;
}

export class ValidationDto {
    @ApiProperty({ type: String, required: true, description: 'Hata Kodu', default: 'VALIDATION_ERROR'})
    error_code: string;
  
    @ApiProperty({ type: String, required: true, description: 'Hata mesajı', default:'Hata mesajı'})
    message: string;
}

export class DuplicateDto {
    @ApiProperty({ type: String, required: true, description: 'Hata Kodu', default: 'CONFLICT_ERROR'})
    error_code: string;
  
    @ApiProperty({ type: String, required: true, description: 'Hata mesajı', default:'Hata mesajı'})
    message: string;
}


export class CompletedDto {
    @ApiProperty({ type: Boolean, required: true, description: 'Islem Durumu', default: true})
    completed: boolean;
}

export class GeneralErrorDto {
    @ApiProperty({ type: String, required: true, description: 'Hata Kodu', default: 'GENERAL_ERROR'})
    error_code: string = 'GENERAL_ERROR';
  
    @ApiProperty({ type: String, required: true, description: 'Hata mesajı', default:'Hata Oluştu, Lütfen daha sonra tekrar deneyiniz.'})
    message: string = 'Hata Oluştu, Lütfen daha sonra tekrar deneyiniz.';
}


export enum LangDto{
    tr,
    en,
    de
}

export enum ErrorMessages {
    "E400"="BAD_REQUEST",
    "E401"="UNAUTHORIZED",
    "E403"="FORBIDDEN",
    "E404"="NOT_FOUND",
    "E422"="VALIDATION_ERROR",
    "E500"="GENERAL_ERROR"
}