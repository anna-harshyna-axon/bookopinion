const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,90}$/

const emailRegex = /\S+@\S+\.\S+/

const nameRegex =
  /^([A-Z, a-z, аАбБвВгГґҐдДеЕєЄжЖзЗиИіІїЇйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩьЬюЮяЯ])\S+$/

export const required = {
  required: 'This field is required',
}

export const minLength = (
  value: number,
  message: string = `Please lengthen this text to ${value} characters or more`,
) => {
  return { value, message }
}

export const maxLength = (
  value: number,
  message: string = `Please shorten this text to ${value} characters or less`,
) => {
  return { value, message }
}

export const nameValidation = {
  pattern: {
    value: nameRegex,
    message: 'Ім`я має містити лише букви латиниці або кирилиці.',
  },
}

export const emailValidation = {
  pattern: {
    value: emailRegex,
    message: 'Будь ласка, перевірте правильність написання пошти',
  },
}

export const passwordValidation = {
  pattern: {
    value: passwordRegex,
    message:
      'Пароль має містити мінімум 8 символів та включати хоча б одну велику букву, маленьку букву та цифру.',
  },
}
