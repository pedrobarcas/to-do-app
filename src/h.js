export function h(type, props, ...children) {
  // Se for um componente (função), chama ele
  if (typeof type === "function") {
    return type({ ...(props || {}), children });
  }

  // Caso contrário, cria elemento nativo
  const el = document.createElement(type);

  for (const key in props || {}) {
    if (key.startsWith("on") && typeof props[key] === "function") {
      el.addEventListener(key.slice(2).toLowerCase(), props[key]);
    } else if (key === "className") {
      el.setAttribute("class", props[key]); // compatibilidade com JSX
    } else {
      el[key] = props[key];
    }
  }

  children.flat().forEach((child) => {
    if (typeof child === "string" || typeof child === "number") {
      el.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      el.appendChild(child);
    }
  });

  return el;
}
