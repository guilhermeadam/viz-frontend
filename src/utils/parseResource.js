export function parseResource(array){
  return {
    'type' : array[9],
    'name' : array[2],
    'description' : array[3],
    'status' : array[4],
    'path' : array[5],
    'module' : array[6],
    'cube' : array[7],
    'roles' : array[8],
    'id': array[0],
    'typeId': array[1],
    'icon': array[10],
    'cubeDescription': array[11],
    'moduleDescription': array[12]
  };
}
