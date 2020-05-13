import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class DemoPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
