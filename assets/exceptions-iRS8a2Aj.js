function authExceptions(errorCode) {
  const errors = {
    "auth/invalid-email": "Email inválido.",
    "auth/wrong-password": "Senha incorreta.",
    "auth/user-not-found": "Usuário não encontrado.",
    "auth/email-already-in-use": "Email já está em uso.",
    "auth/weak-password": "Senha muito fraca.",
    "auth/invalid-credential": "Usuário ou senha incorreta"
  };
  return errors[errorCode] || "Erro desconhecido. Tente novamente.";
}
export {
  authExceptions as a
};
//# sourceMappingURL=exceptions-iRS8a2Aj.js.map
