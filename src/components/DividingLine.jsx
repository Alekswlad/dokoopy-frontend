export const DividingLine = ({ mainColor }) => {
   return (
      <div className={mainColor + " containerHeshteg"}>
         <ul className="contentHeshteg">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
         </ul>
      </div>
   );
};

// для використання цього компоненту необхідно при його вставці додати props -
// mainColor, який відповідає кольору компонента. Існує 2 класи:
// для білого блоку - "whiteContainer",
// для зеленого блоку - "greenContainer".
