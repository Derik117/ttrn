import random

from aiogram import filters, types

from config import config
from misc import dp
from utils import Decision


@dp.message_handler(
    filters.Text(equals=['дока', 'доку', 'документация',
                 'документацию'], ignore_case=True),
    chat_type=types.ChatType.SUPERGROUP
)
async def doka(msg: types.Message):
    await msg.answer('Доку профессора писали наверное')


@dp.message_handler(
    filters.Text(equals=['пидор', 'пидорас'], ignore_case=True),
    chat_type=types.ChatType.SUPERGROUP
)
async def pidor(msg: types.Message):
    await msg.answer('тотарен')


@dp.message_handler(
    filters.Regexp(
        r'(уфой|уфы|уфимскую|уфа|уфимскими|уфимской|уфимского|уфимских|уфе|уфимская|уфимским|уфимские|уфу|уфимский|уфимскому|уфимском)',
    ),
    chat_type=types.ChatType.SUPERGROUP
)
async def ufa_ruble(msg: types.Message):
    answers = (
        'рубль лучшая валюта',
        'сегодня все вложил в рублевый вклад',
        'финансовая подушка должна быть в рублях',
        'рубль укрепляется',
        'покупаю товары за рубли',
        'рубль деревянный, следовательно, должен плавать. логично'
        'рублю рынок не нужен',
        'курс рубля к доллару это спекуляция',
        'рубль не самая слабая валюта',
        'в ауде я бензин за рубли заливаю',
        'всегда все сбережения храню в рублях - ни разу не прогадал',
        'зарплаты подтянутся за рублем',
        'скоро бакс будет по 30, как за газ платить начнут рублями',
        'дефолта не будет, у нас много рублей',
    )
    await msg.answer(random.choice(answers))


@dp.message_handler(
    filters.Text(equals=['тотарен', 'тотарин', 'толик',
                 'толян', 'еболик'], ignore_case=True),
    chat_type=types.ChatType.SUPERGROUP
)
async def totaren(msg: types.Message):
    await msg.answer('пидор')


@dp.message_handler(
    filters.Text(equals=['ярик', 'ярек', 'ярослав'], ignore_case=True),
    chat_type=types.ChatType.SUPERGROUP
)
async def yarek(msg: types.Message):
    if Decision.make(config.YAREK_DECISION_LIMIT):
        await msg.answer('Вы всё ещё готовите на огне @yaroslav_y? Тогда мы идём к вам.')


@dp.message_handler(chat_type=types.ChatType.SUPERGROUP)
async def toopa(msg: types.Message):
    if Decision.make(config.TOOPA_DECISION_LIMIT):
        await msg.reply('ТУПА АЛЕГАНТОР))))))')


@dp.message_handler(
    equals=['тема', 'темка', 'схема', 'схемы'],
    ignore_case=True,
    chat_type=types.ChatType.SUPERGROUP
)
async def scheme(msg: types.Message):
    await msg.answer('заболел схематозом')
