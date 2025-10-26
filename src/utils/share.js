export async function sendCopy(text) {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Lista de tarefas",
        text: text,
      });
    } catch (err) {
      console.error("Erro ao compartilhar:", err);
    }
  } else {
    alert("Seu navegador não suporta compartilhamento nativo");
  }
}
