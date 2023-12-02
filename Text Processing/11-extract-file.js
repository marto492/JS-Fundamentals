function extractFile(input) {
  let text = input.split("\\").pop();
  let extension = text.slice(text.lastIndexOf(".") + 1);
  let fileName = text.slice(0, text.lastIndexOf("."));
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}
extractFile("C:\\Internal\\training-internal\\Template.pptx");
