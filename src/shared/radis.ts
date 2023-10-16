import { createClient } from 'redis';
import config from '../config';
import logger from './logger';

let redisClient = createClient({
  url: config.redis.url
});

redisClient.on('error', (error) => {
  logger.error('RedisError', error);
});

redisClient.on('connect', (error) => {
  logger.info('Redis Connected');
});

const connect = async (): Promise<void> => {
  await redisClient.connect();
};

export const RedisClient = {
  connect
};
