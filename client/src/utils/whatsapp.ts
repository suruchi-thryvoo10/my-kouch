import { brandInfo } from "../constants/data";

export function getWhatsAppLink(productName?: string) {
  const number = brandInfo.phone.replace(/[^0-9]/g, ""); // e.g. 918093376990
  const defaultMessage = brandInfo.whatsappMessage;
  
  // Use window object safely for current URL
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  let message = defaultMessage;
  if (productName) {
    message = `Hello Kouch Team, I am interested in the ${productName}. Please share more details.\n\nProduct URL: ${currentUrl}`;
  }
  
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
