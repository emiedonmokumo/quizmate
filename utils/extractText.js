import { createWorker } from 'tesseract.js';

async function extractText(image) {
  const worker = await createWorker('eng');

  const text = (await worker.recognize(image)).data.text;

  let formattedText = text
    .replace(/(\d+)\s*-\s*(\d+)\s*÷\s*(\d+)\s*\/\s*(\d+)\s*\+\s*(\d+)/g, '$1 - $2 \\div \\frac{$3}{$4} + $5') 
    .replace(/(\d+)\s*-\s*(\d+)\s*÷\s*1\/(\d+)\s*\+\s*(\d+)/g, '$1 - $2 \\div \\frac{1}{$3} + $4')             
    .replace(/(\d+)[\n\s]*-\s*(\d+)[\n\s]*÷[\n\s]*(\d+)\s*\/[\n\s]*(\d+)\s*\+\s*(\d+)/g, '$1 - $2 \\div \\frac{$3}{$4} + $5');

  await worker.terminate();;

  return formattedText.trim()
}

export default extractText;
