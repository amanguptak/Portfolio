import React from "react";
import Image from "next/image";
const Skill = () => {
  return (
    <div>
      <ul className="grid lg:grid-cols-3 grid-cols-2 " >
      {list.map((skill, index) => {

        return (
        
            <li
              key={index}
            
              className="rounded-full  p-2  m-2 flex items-center justify-around  border-2 cursor-pointer border-amber-400 hover:bg-indigo-200"
            >
              <img
                src={skill.img}
                alt=""
                width={40}
                height={40}
                className="h-6 w-6 rounded-sm mx-2 lg:mx-0"
              />
              <span className="text-amber-400 lg:ml-1 text-xs lg:text-lg">
              {skill.name}
              </span>
             
            </li>
        
        );
      })}
      </ul>
    </div>
  );
};

const list = [
  {
    name: "Html",
    img: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
  },
  {
    name: "Css",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
  },
  {
    name: "Javascript",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
  },
 
  {
    name: "Gitlab",
    img: "https://cdn.icon-icons.com/icons2/2699/PNG/512/gitlab_tile_logo_icon_170092.png",
  },
  {
    name: "React",
    img: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
  },
  {
    name: "Next js",
    img: "https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png",
  },
  {
    name: "Node Js",
    img: "https://w7.pngwing.com/pngs/780/57/png-transparent-node-js-javascript-database-mongodb-native-miscellaneous-text-trademark.png"
  },
  {
    name: "Express js",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMljNHtufEhORorpm03zCLtzlnY2R_gvx4cZYwSh_auF0rSZvjFO5kALPmyDgj9axhleY&usqp=CAU",
  },
  {
    name: "GitHub",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn11Rru16VFClaKhYzoL9yGLIwOEaggMpa1Q&usqp=CAU",
  },
  {
    name: "Docker",
    img: "https://miro.medium.com/v2/resize:fit:601/1*e8u6teTHyalPejIBauj4Jw.png",
  },
  {
    name: "Redux",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxa54jELoPL5wy9CxwGFeyCx9yEKHtqf-j-eI3ljxM4hSvYr3fxkOaYTO9OZgnuEs49zI&usqp=CAU",
  },
  {
    name: "Tailwind Css",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKPw4CK4jcH7udsFHZdiB3iIOuI3fUCsxUZosXy4Y1yd25NA-dzCBPrSDIhg1BwObl3w&usqp=CAU",
  },
  {
    name: "Sass",
    img: "https://sass-lang.com/assets/img/styleguide/seal-color-reversed.png",
  },
  {
    name: "TypeScript",
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201'},
  {
    name: "Bootstrap",
    img: "https://w7.pngwing.com/pngs/976/131/png-transparent-bootstrap-framework-logo-dart-mobile-developer-programming-programming-language-interface-3d-icon-thumbnail.png",
  },
];

export default Skill;
