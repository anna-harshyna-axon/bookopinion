const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,90}$/

const emailRegex = /\S+@\S+\.\S+/

const nameRegex = /^[А-Я][а-я]*$/

export const required = {
  required: "Це поле є обов'язковим",
}

export const minLength = (
  value: number,
  message: string = `Мінімальна довжина -  ${value} символів `,
) => {
  return { value, message }
}

export const maxLength = (
  value: number,
  message: string = `Максимальна довжина - ${value} символів`,
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
