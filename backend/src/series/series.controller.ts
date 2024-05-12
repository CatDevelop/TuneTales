import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {SeriesService} from './series.service';
import {CreateSeriesDto} from './dto/create-series.dto';
import {UpdateSeriesDto} from './dto/update-series.dto';
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {AdminGuard} from "../guards/admin.guard";

@Controller('series')
export class SeriesController {
    constructor(private readonly seriesService: SeriesService) {
    }

    @Post()
    @UseGuards(JwtAuthGuard, AdminGuard)
    create(@Body() createSeriesDto: CreateSeriesDto) {
        return this.seriesService.create(createSeriesDto);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    findAll() {
        return this.seriesService.findAll();
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    findOne(@Param('id') id: string) {
        return this.seriesService.findOne(id);
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard, AdminGuard)
    update(@Param('id') id: string, @Body() updateSeriesDto: UpdateSeriesDto) {
        return this.seriesService.update(id, updateSeriesDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, AdminGuard)
    remove(@Param('id') id: string) {
        return this.seriesService.remove(id);
    }
}
