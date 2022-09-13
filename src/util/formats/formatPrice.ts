export const formatPrice = (number: number) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(number);
} 
