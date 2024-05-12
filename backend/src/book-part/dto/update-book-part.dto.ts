import { PartialType } from '@nestjs/swagger';
import { CreateBookPartDto } from './create-book-part.dto';

export class UpdateBookPartDto extends PartialType(CreateBookPartDto) {}
