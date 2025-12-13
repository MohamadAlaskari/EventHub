import { Controller, Get, Post, Body, Patch, Param, Delete, Query,Request, UseGuards } from '@nestjs/common';
import { EventService } from './event.service';
import { GetEventsDto } from './dto/get-events.dto';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';


@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}



  @Get("events")
  @ApiOperation({ summary: 'Get events by Country Code and Date and Size and Page but all this Options are optional' })
  @ApiQuery({ name: 'countryCode', description: 'Country Code', required: false })
  @ApiQuery({ name: 'segmentName', description: 'Segment', required: false })
  @ApiQuery({ name: 'keyword', description: 'Keyword', required: false })
  @ApiQuery({ name: 'startDate', description: 'Start Date', required: false })
  @ApiQuery({ name: 'size', description: 'Size', required: false })
  @ApiQuery({ name: 'page', description: 'Page', required: false })
  

  getEventsByLocation(@Query() query: GetEventsDto) {
    
    return this.eventService.getEvents(
      query.startDate,
      query.countryCode,
      query.segmentName,
      query.keyword,
      query.size,
      query.page,);
  }

 
  @Get(':id')
  @ApiOperation({ summary: 'Get event by id' })
  @ApiResponse({ status: 200, description: 'Event found' })
  @ApiParam({ name: 'id', description: 'Event id' })
  getEventById(@Param('id') id: string) {
    return this.eventService.getEventById(id);
  }



 
}
