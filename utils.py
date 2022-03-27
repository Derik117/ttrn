import random
from pyrate_limiter import RequestRate, Duration, Limiter, MemoryListBucket, BucketFullException

from config import DECISION_SCALE_SIZE, DEANON_HOUR_LIMIT


class Decision:
    scale: list[int] = list(range(DECISION_SCALE_SIZE))

    @classmethod
    def make(cls, probability: int) -> bool:
        return random.choice(cls.scale) <= probability


class RequestLimiter:
    limiter: Limiter

    def __init__(self, rate: RequestRate):
        self.limiter = Limiter(rate, bucket_class=MemoryListBucket)


deanon_limiter = RequestLimiter(
    rate=RequestRate(DEANON_HOUR_LIMIT, Duration.HOUR),
)
