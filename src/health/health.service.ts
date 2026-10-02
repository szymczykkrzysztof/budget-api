import { Injectable } from '@nestjs/common';
import { HealthStatus } from './dto/heatth.dto.js';

@Injectable()
export class HealthService {
  check(): HealthStatus {
    return {
      status: 'OK',
      timestamp: new Date().toISOString(),
    };
  }
}
