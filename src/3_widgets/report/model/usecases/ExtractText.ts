import { createWorker } from 'tesseract.js';

export async function ExtractText(imageURL: string): Promise<string> {
  const worker = await createWorker('eng')
  const ret = await worker.recognize(imageURL)
  await worker.terminate()
  return ret.data.text
}