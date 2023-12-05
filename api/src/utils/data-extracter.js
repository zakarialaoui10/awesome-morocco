function extractData(document,ulIndex) {
    const uls = document.body.querySelectorAll("h3 + ul");
    const nodes = [...uls[ulIndex].querySelectorAll("li")];
  
    return nodes.map((n) => ({
      link: n.querySelector("a").href,
      text: n.querySelector("a").textContent,
      description: n.childNodes[2]?.textContent,
    }));
  }

const get_Blog = (node) => {
    return [...node.querySelectorAll("li")].map(n => ({
      link: n.querySelector("a").href,
      text: n.querySelector("a").textContent,
      description: n.childNodes[2]?.textContent
    }));
  };

const get_Blogs = (document) =>{
    const node=[...document.body.querySelectorAll("h3+ul")]
    return {
        org:get_Blog(node[0]),
        dev:get_Blog(node[1]),
    }
}

const get_open_source=(document)=>{
    const Open_Source_Headers = [...document.querySelectorAll("h4")];
    const Open_Source_Node = [...document.querySelectorAll("h4 + ul")];
    return Object.fromEntries(Open_Source_Node.map((node, i) => [
        Open_Source_Headers[i].textContent,
        [...node.querySelectorAll("li")].map(n => ({
          name: n.querySelectorAll("a")[0].textContent,
          link: n.querySelectorAll("a")[0].href,
          author: {
            name: n.querySelectorAll("a")[2]?.textContent,
            link: n.querySelectorAll("a")[2]?.href,
          },
        }),
      )]))
}

const get_data=(document)=>{
  return{
    Communities : extractData(document , 1),
    Events : extractData(document , 2),
    Podcasts : extractData(document , 4),
    Youtube : extractData(document , 5),
    Books : extractData(document , 6),
    Blogs : get_Blogs(document),
    Open_Source : get_open_source(document)
  }
}
export default get_data