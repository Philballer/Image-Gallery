export const readFileAndConvertToReadableImage = async (
  file: File | undefined
): Promise<string | undefined> => {
  let imageString: string | undefined;

  //  read the data from the file
  if (file) {
    const readFile = (): Promise<string> =>
      new Promise((res, rej) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event: any) => {
          const image = event.target.result;
          res(image);
        };

        reader.onerror = (error) => {
          rej(error);
        };
      });

    try {
      imageString = await readFile();
    } catch (error) {
      console.log('from file reader', error);
    }
  }

  return imageString || undefined;
};
