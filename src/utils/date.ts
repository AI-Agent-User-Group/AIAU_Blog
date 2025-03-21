export function formatDate(date: Date): string {
  return date.toLocaleDateString('ja-jp', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function isPublished(date: Date): boolean {
  return date <= new Date();
}