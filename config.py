from os import getenv
from typing import List

TOKEN = getenv('TOKEN')
GROUP_ID = getenv('GROUP')
ADMIN_IDS = getenv('ADMIN_IDS')  # comma-separated list
DECISION_SCALE_SIZE = int(getenv('DECISION_SCALE_SIZE', 100))
YAREK_DECISION_LIMIT = int(getenv('YAREK_DECISION_LIMIT', 5))
TOOPA_DECISION_LIMIT = int(getenv('TOOPA_DECISION_LIMIT', 5))
DEANON_HOUR_LIMIT = int(getenv('DEANON_HOUR_LIMIT', 10))

admin_ids: List[int] = list(map(int, ADMIN_IDS.split(",")))  # cast comma-separated list to `List[int]`