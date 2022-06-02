import random
from pyrate_limiter import RequestRate, Duration, Limiter, MemoryListBucket

from config import config


class Decision:
    scale: list[int] = list(range(config.DECISION_SCALE_SIZE))

    @classmethod
    def make(cls, probability: int) -> bool:
        return random.choice(cls.scale) <= probability


class RequestLimiter:
    limiter: Limiter

    def __init__(self, rate: RequestRate):
        self.limiter = Limiter(rate, bucket_class=MemoryListBucket)


deanon_limiter = RequestLimiter(
    rate=RequestRate(config.DEANON_HOUR_LIMIT, Duration.HOUR),
)
