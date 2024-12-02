import { Material } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { IsDecimal, IsEnum, IsNotEmpty, IsString } from "class-validator";

enum Status {
    IN_PROGRESS = "IN_PROGRESS",
    DONE = "DONE",
    ALL = "ALL",
}

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
