import { Controller, Get } from '@nestjs/common';
import type { HealthStatus } from './dto/health.dto.js';
import { HealthService } from './health.service.js';
import { Public } from '../auth/decorators/public.decorator.js';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}
  @Get()
  @Public()
  getHealthStatus(): HealthStatus {
    return this.healthService.check();
  }
}
