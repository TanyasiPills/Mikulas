import { Material } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { IsDecimal, IsNotEmpty, IsString } from "class-validator";

export class CreateJatekDto {
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsNotEmpty()
    anyag: Material;

    @IsNotEmpty()
    @IsDecimal()
    suly: Decimal;
}
