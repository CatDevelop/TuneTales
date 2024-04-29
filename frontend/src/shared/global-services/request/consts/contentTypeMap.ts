import { ContentType } from '../model/content-type';

export const contentTypeMap: Map<ContentType, string> = new Map<ContentType, string>([
    [ContentType.raw, ''],
    [ContentType.json, 'application/json'],
    [ContentType.formUrlEncoded, 'application/x-www-form-urlencoded'],
    [ContentType.multipartFormData, 'multipart/form-data'],
    [ContentType.text, 'text'],
    [ContentType.blob, 'application/octet-stream'],
    [ContentType.imageSvg, 'image/svg+xml'],
]);
