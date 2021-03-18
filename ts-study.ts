function creatArr<T>(length: number, value: T): T[] {
  return Array<T>(length).fill(value);
}

const arr = creatArr<string>(3, "good");
