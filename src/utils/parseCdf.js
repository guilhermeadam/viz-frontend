export function parseCdf(responseData){
  const contexto =  responseData.split(';')[1]
    .split('=')[1]
    .replace(',\nstorage: {}','')
    .replace(/(\r\n|\n|\r)/gm,' ')
    .split('xt:')[1]
    .replace('} }', '}');
  return JSON.parse(contexto);
}
