export function h(type, props, ...children) {
  if (typeof type === "function") {
    return type({ ...(props || {}), children });
  }

  const el = document.createElement(type);

  for (const key in props || {}) {
    if (key.startsWith("on") && typeof props[key] === "function") {
      el.addEventListener(key.slice(2).toLowerCase(), props[key]);
    } else if (key === "className") {
      el.setAttribute("class", props[key]);
    } else if (key === "style" && typeof props[key] === "object") {
      Object.assign(el.style, props[key]); // suporte a style={{...}}
    } else if (key === "dataset" && typeof props[key] === "object") {
      for (const dataKey in props[key]) {
        el.dataset[dataKey] = props[key][dataKey]; // aqui sim
      }
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
