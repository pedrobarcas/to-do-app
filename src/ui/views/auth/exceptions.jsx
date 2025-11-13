
/**
 * Filtra os erros retornados enviando uma mensagem significativa
 * --
 * 
 * @param {Error} traceback retornado pelo FireAuth 
 */
export function authExceptions(errorCode){
    const errors = {
    "auth/invalid-email": "Email inválido.",
    "auth/wrong-password": "Senha incorreta.",
    "auth/user-not-found": "Usuário não encontrado.",
    "auth/email-already-in-use": "Email já está em uso.",
    "auth/weak-password": "Senha muito fraca.",
    "auth/invalid-credential": "Usuário ou senha incorreta"
  }
  return errors[errorCode] || "Erro desconhecido. Tente novamente."
}