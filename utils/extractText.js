import { createWorker } from 'tesseract.js';

async function extractText(image) {
  const worker = await createWorker('eng');
  const ret = await worker.recognize(image);
  return ret.data.text;
}

export default extractText;
