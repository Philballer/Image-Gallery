export const readFile = (file: File) => {
  //  read the data from the file
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (event: any) => {
    return event.target.result;
  };
};
