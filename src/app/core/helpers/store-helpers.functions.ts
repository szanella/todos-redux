export function arrayToEntities(array: { id: number, [ key: string ]: any }[]): { [ id: number ]: any } {
  return array.reduce(
    (entities: { [id: number]: any }, item: any) => {
      return {
        ...entities,
        [item.id]: item
      };
    }, {}
  );
}

export function entitiesToArray(entities: { [id: number]: any}): any[] {
  return Object.keys(entities).map(id => entities[+id]);
}
