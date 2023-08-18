export function handleOpenResource(title, description, path) {
  const context = window.top;
  context.mantle_setPerspective('opened.perspective');
  context.openURL(title, description, path);
}
