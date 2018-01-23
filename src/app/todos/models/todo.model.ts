export class Todo {
  id: number;
  description: string;
  complete: boolean;

  constructor(obj: any) {
    this.id =                 obj && obj.id               || null;
    this.description =        obj && obj.description      || null;
    this.complete =           obj && obj.complete         || null;
  }
}
