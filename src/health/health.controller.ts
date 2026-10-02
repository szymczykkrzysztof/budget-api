import { Controller, Get } from '@nestjs/common';
import type { HealthStatus } from './dto/health.dto.js';
import { HealthService } from './health.service.js';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}
  @Get()
  getHealthStatus(): HealthStatus {
    return this.healthService.check();
  }
}
