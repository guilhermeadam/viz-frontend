export function parseNotification(notification){
  return {
    'id' : notification[0],
    'title' :notification[1],
    'description' : notification[2],
    'roles' : notification[4],
    'type' : notification[7]
  };
}
