import  { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: "8qmns65f",
  dataset: "production",
  apiVersion: "2021-07-01",
  useCdn: true,
  token:
    "skjoR9FVrctNM8eJg7Eat41foG3180C89uPMdEneA6y7pDGnWjg057ABqW61exGSKXo2JKa8qQwEYXUhgQot6K4mhDBO1IBXalW0xkRnhnUrAfDCeQXN4fgG2xMnG7xLyhxh5wvKDixV2z2VhbI8KC5Ig0Zq9nzRrMYSbyYdd7aIrKfcc54C",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    return builder.image(source);
}