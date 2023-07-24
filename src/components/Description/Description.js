import './Description.css';
import React from "react";


// function Description({isDropdownVisible, toggleDropdown}) {
//   return (
//     <section className="description">
//         <div className="dropdown">
//           <button className="dropbtn" onClick={() => toggleDropdown(0)}>
//               Найдите себе нового друга!
//           </button>
//             {isDropdownVisible[0] && (
//               <div className="dropdown-content">
//                 <a href="#">Пункт 1</a>
//                 <a href="#">Пункт 2</a>
//                 <a href="#">Пункт 3</a>
//               </div>
//             )}
//         </div>
//         <div className="dropdown">
//         <button className="dropbtn" onClick={() => toggleDropdown(1)}>
//               Найдите себе нового друга!
//           </button>
//           {isDropdownVisible[1] && (
//               <div className="dropdown-content">
//                 <a href="#">Пункт 1</a>
//                 <a href="#">Пункт 2</a>
//                 <a href="#">Пункт 3</a>
//               </div>
//             )}
//         </div>
//         <div className="dropdown">
//         <button className="dropbtn" onClick={() => toggleDropdown(2)}>
//               Найдите себе нового друга!
//           </button>
//           {isDropdownVisible[2] && (
//               <div className="dropdown-content">
//                 <a href="#">Пункт 1</a>
//                 <a href="#">Пункт 2</a>
//                 <a href="#">Пункт 3</a>
//               </div>
//             )}
//         </div>


 
//     </section>
//   );
// };
  
// export default Description;


function Description() {
  return (
    <section class="description">
      <div class="dropdown">
        <input type="checkbox" id="dropdown1" class="dropdown-input" />
        <label for="dropdown1" class="dropbtn">
          Найдите себе нового друга!
        </label>
        <div class="dropdown-content">
          <a href="#">Пункт 1</a>
          <a href="#">Пункт 2</a>
          <a href="#">Пункт 3</a>
        </div>
      </div>
      <div class="dropdown">
        <input type="checkbox" id="dropdown2" class="dropdown-input" />
        <label for="dropdown2" class="dropbtn">
          Найдите себе нового друга!
        </label>
        <div class="dropdown-content">
          <a href="#">Пункт 1</a>
          <a href="#">Пункт 2</a>
          <a href="#">Пункт 3</a>
        </div>
      </div>
      <div class="dropdown">
        <input type="checkbox" id="dropdown3" class="dropdown-input" />
        <label for="dropdown3" class="dropbtn">
          Найдите себе нового друга!
        </label>
        <div class="dropdown-content">
          <a href="#">Пункт 1</a>
          <a href="#">Пункт 2</a>
          <a href="#">Пункт 3</a>
        </div>
      </div>
    </section>
  );
};
  
export default Description;