from aiogram import types

from config import config
from misc import bot, dp


def thumb(msg: types.Message):
    if hasattr(msg.document.thumb, 'file_id'):
        return msg.document.thumb.file_id


@dp.message_handler(
    lambda message: message['from']['id'] in config.ADMIN_IDS,
    content_types=[
        types.ContentType.TEXT,
        types.ContentType.ANIMATION,
        types.ContentType.DOCUMENT,
        types.ContentType.DICE,
        types.ContentType.POLL,
        types.ContentType.STICKER
    ],
    chat_type=types.ChatType.PRIVATE
)
async def repost(msg: types.Message):
    content_type = msg.content_type
    if content_type is types.ContentType.TEXT:
        await bot.send_message(chat_id=config.GROUP_ID, text=msg.text)
    if content_type is types.ContentType.ANIMATION:
        await bot.send_animation(
            chat_id=config.GROUP_ID,
            animation=msg.animation.file_id,
            duration=msg.animation.duration,
            width=msg.animation.width,
            height=msg.animation.height,
            thumb=thumb(msg),
            caption=msg.caption,
            caption_entities=msg.caption_entities
        )
    if content_type is types.ContentType.DOCUMENT:
        await bot.send_document(
            chat_id=config.GROUP_ID,
            document=msg.document.file_id,
            thumb=thumb(msg),
            caption=msg.caption,
            caption_entities=msg.caption_entities
        )
    if content_type is types.ContentType.STICKER:
        await bot.send_sticker(chat_id=config.GROUP_ID, sticker=msg.sticker.file_id)
    if content_type is types.ContentType.POLL:
        options = list(map(lambda option: option.text, msg.poll.options))
        await bot.send_poll(
            chat_id=config.GROUP_ID,
            question=msg.poll.question,
            options=options,
            is_anonymous=msg.poll.is_anonymous,
            type=msg.poll.type,
            allows_multiple_answers=msg.poll.allows_multiple_answers,
            correct_option_id=msg.poll.correct_option_id,
            explanation=msg.poll.explanation,
            explanation_entities=msg.poll.explanation_entities,
            open_period=msg.poll.open_period,
            close_date=msg.poll.close_date,
            is_closed=msg.poll.is_closed,

        )
    if content_type is types.ContentType.DICE:
        await bot.send_dice(chat_id=config.GROUP_ID)
