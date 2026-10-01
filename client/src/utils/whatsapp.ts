import { brandInfo } from "../constants/data";

export function getWhatsAppLink(productName?: string) {
  const number = brandInfo.phone.replace(/[^0-9]/g, ""); // e.g. 918093376990
  const defaultMessage = brandInfo.whatsappMessage;
  const message = productName 
    ? `Hello Kouch Team, I am interested in ${productName}. Please share more details.`
    : defaultMessage;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
