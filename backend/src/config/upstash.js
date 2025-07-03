import {Ratelimit} from '@upstash/ratelimit';
import {Redis} from '@upstash/redis';

import dotenv from "dotenv";



dotenv.config();

//create a rate limiter that allow 100 request per 60 seconds
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, '40s')

});

export default ratelimit;