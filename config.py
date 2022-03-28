from typing import List
from pydantic import BaseSettings, Field


class ListOfStrField(List[str]):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v: str) -> List[str]:
        return v.split(',')


class Config(BaseSettings):
    TOKEN: str
    GROUP_ID: str
    ADMIN_IDS: ListOfStrField
    DECISION_SCALE_SIZE: int = 100
    YAREK_DECISION_LIMIT: int = 5
    TOOPA_DECISION_LIMIT: int = 5
    DEANON_HOUR_LIMIT: int = 10


config = Config()
