export async function makeImageToBase64(file?: File): Promise<string> {

  if (!file) {
    return ''
  }

  return new Promise((resolve, reject) => {

    const fileReader = new FileReader()

    fileReader.onload = () => {
      const result = fileReader.result as string;
      const base64String = result.split(',')[1]
      resolve(base64String)
    }
    fileReader.onerror = reject

    fileReader.readAsDataURL(file)
  })
}