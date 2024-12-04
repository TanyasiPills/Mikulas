import { Material } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { IsDecimal, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateJatekDto {
    @IsNotEmpty()
    @IsString()
    name: string
  
    @IsNotEmpty()
    @IsEnum(Material)
    anyag: Material

    @IsNotEmpty()
    @IsDecimal()
    suly: Decimal
}
