import { Material } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { IsBoolean, IsDecimal, IsNotEmpty, isString, IsString } from "class-validator";

export class CreateGyerekDto {
    @IsNotEmpty()
    @IsString()
    nev: string;
  
    @IsNotEmpty()
    @IsString()
    cim: string;

    @IsNotEmpty()
    @IsBoolean()
    joVolt: boolean;
}
