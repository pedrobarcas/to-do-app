export class DateFormat {
  static DateFormatBrazilian() {
    const now = new Date();
    const formator = new Intl.DateTimeFormat("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    return formator.format(now);
  }
}