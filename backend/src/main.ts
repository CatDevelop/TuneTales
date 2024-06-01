import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix('api');
    app.enableCors();

    const swaggerOptions = new DocumentBuilder()
        .setTitle('TuneTails')
        .setDescription('API для сервиса прослушивания аудио-книг')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, swaggerOptions);
    SwaggerModule.setup('docs', app, document);

    await app.listen(5022);
}

bootstrap();
