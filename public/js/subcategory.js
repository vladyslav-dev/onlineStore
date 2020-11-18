// let bigData = []; // characteristics, data

// window.onload = function() {

// if (window.location.pathname == '/subcategory') {

//   let subcatId = document.querySelector('#subcategoryId-value').innerHTML; // req.query.id
  
//   async function getGoodsInfo() {

//     const url = '/get-goods-all';

//     let response = await fetch(url, {
//           method : 'POST',
//           body : JSON.stringify({ key : subcatId}),
//           headers : {
//               'Accept': 'application/json',
//               'Content-Type': 'application/json'
//           }
//     });

//     let data = await response.json();
//     // console.log(data);

//     function res(data) {
    
//       let arrCostMax = [];
//       let arrCostMin = [];
//       let loot = []; // return result
        
//       for (let key in data) {    
//           arrCostMax.push(data[key]['cost']);
//       }
//       for (let key in data) {    
//         arrCostMin.push(data[key]['cost']);
//       }
      
//       loot.push(Math.min(...arrCostMin)); 
//       loot.push(Math.max(...arrCostMax)); 

//       return loot;
//   }

//     // showFiltersData(data); // innerHTML values 

//     getSubcategoryInfo().then( k => {
//       showBasicFilters(k, data); // innerHTML titles of filters
//       pushData(k, data);
//     });

//     return res(data); // [number, number]

//   }

//   async function getSubcategoryInfo() {

//     const url = '/get-subcategory-all';

//     let response = await fetch(url, { 
//             method: 'POST',
//             body: JSON.stringify( {key : subcatId} ),
//             headers: {
//               Accept: 'application/json',
//               'Content-Type': 'application/json'
//             }
//     });
//     let data = await response.json();

//     let tempString;
//     let characteristics = [];

//     for (let key in data) {
//       tempString = data[key]['characteristics-titles'];
//     }

//     tempString.split(', ').forEach( item => {
//       characteristics.push(item);
//     });

//     return characteristics;

//   }

//   function showBasicFilters(characteristics, dataGoods) {

//     // console.log(dataGoods);

//     let tempString;
//     let values = [];
    
//     for (let key in dataGoods) {

//       tempString = dataGoods[key]['characteristics-data'];

//       if (dataGoods[key]['characteristics-data'] !== null) {
//           values.push(tempString.split(', '));
//       }
//     }

//     let newValues = new Array(characteristics.length).fill().map( () => {
//       return new Array(values.length).fill("");
//     });

//     for (let i = 0; i < characteristics.length; i++) {
//       for (let j = 0; j < values.length; j++) {
//         newValues[i][j] = values[j][i];
        
//       }
//     }


//       let basicFilters = document.querySelectorAll('.basic__filters')[0];
//       let content = ``;
//       let usedItems = []; 
      
//       for(let i = 0; i < characteristics.length; i++) {

//           content += `<div class="basic__filters-item">
//                       <div class="basic__filter-title">${characteristics[i]}</div>`;

//           for (let j = 0; j < newValues[i].length; j++) {
           
//             newValues[i].sort();

//             if (usedItems.includes(newValues[i][j])) { 
//               continue;   
//             } 
//             content += `<div class="filter__input-item">
//                           <input type="checkbox" onclick="getVal(this)" value="${newValues[i][j]}" class="checkboxes">
//                           <label for="${newValues[i][j]}">${newValues[i][j]}</label>
//                         </div>`;

//             usedItems.push(newValues[i][j]);
          
//           }
//           content += `</div>`;
//       }

//     basicFilters.innerHTML = content;
//   }

  
  
  

//   getGoodsInfo().then( v => {
//       let min = v[0];
//       let max = v[1];

//       setTimeout(init2slider('id66', 'id66b', 'id661', 'id662', 'id66i1', 'id66i2', min, max), 0);
      
//   });

//   // ===================================== Range =====================================

//   function init2slider(idX, btwX, btn1X, btn2X, input1, input2, min, max ) {

//       let slider = document.getElementById(idX);
//       let between = document.getElementById(btwX); 
//       let button1 = document.getElementById(btn1X);
//       let button2 = document.getElementById(btn2X);   
//       let inpt1 = document.getElementById(input1); 
//       let inpt2 = document.getElementById(input2); 
      
//       /*init*/
//       let sliderCoords = getCoords(slider);
//       button1.style.marginLeft = '0px';
//       button2.style.marginLeft = '213px';
//       between.style.width = '100%';

//       inpt1.value = min;
//       inpt2.value = max;


//       inpt1.onblur = function() {
//         if (inpt1.value == '') {
//           inpt1.value = min;
//           button1.style.marginLeft = '0px';
//           between.style.width = '100%';
//           between.style.marginLeft = '0px';

//         }
//       }

//       inpt2.onblur = function() {
//         if (inpt2.value == '') {
//           inpt2.value = max;
//           button2.style.marginLeft = '230px';
//           between.style.width = '100%';
//           between.style.marginLeft = '0px';
//         }
//       }

//       inpt1.onkeypress= function(event){
//         event= event || window.event;
//         if (event.charCode && (event.charCode < 48 || event.charCode > 57)) {
//           event.preventDefault();
//         } 
           
//        }
        
//       inpt2.onkeypress= function(event){
//       event= event || window.event;
//       if (event.charCode && (event.charCode < 48 || event.charCode > 57)) {
//         event.preventDefault();
//       } 

//       };

//       inpt1.min = min;
//       inpt1.max = max;
//       inpt2.min = min;
//       inpt2.max = max;
      
//       inpt1.onchange= function(evt)
//       {
//         if (parseInt(inpt1.value) < min)
//           inpt1.value = min;
//         if (parseInt(inpt1.value) > max)
//           inpt1.value = max;
//         if (parseInt(inpt1.value) > parseInt(inpt2.value))
//         {
//           let temp = inpt1.value;
//           inpt1.value = inpt2.value;
//           inpt2.value = temp;
//         }
          
//           let sliderCoords = getCoords(slider);
//           let per1 = parseInt(inpt1.value-min)*100/(max-min);
//           let per2 = parseInt(inpt2.value-min)*100/(max-min);
//           let left1 = per1*(slider.offsetWidth-button1.offsetWidth)/100;
//           let left2 = per2*(slider.offsetWidth-button1.offsetWidth)/100;
          
//               button1.style.marginLeft = left1 + 'px'; 
//               button2.style.marginLeft = left2 + 'px';
              
//               if (left1 > left2)
//                 {
//                   between.style.width = (left1-left2) + 'px';
//                   between.style.marginLeft = left2 + 'px';
//                 }
//               else
//                 {
//                   between.style.width = (left2-left1) + 'px';
//                   between.style.marginLeft = left1 + 'px';  
//                 }
//       }
//       inpt2.onchange= function(evt)
//       {
//         if (parseInt(inpt2.value) < min)
//           inpt2.value = min;
//         if (parseInt(inpt2.value) > max)
//           inpt2.value = max;
//         if (parseInt(inpt1.value) > parseInt(inpt2.value))
//         {
//           let temp = inpt1.value;
//           inpt1.value = inpt2.value;
//           inpt2.value = temp;
//         }
        
//           let sliderCoords = getCoords(slider);
//           let per1 = parseInt(inpt1.value-min)*100/(max-min);
//           let per2 = parseInt(inpt2.value-min)*100/(max-min);
//           let left1 = per1*(slider.offsetWidth-button1.offsetWidth)/100;
//           let left2 = per2*(slider.offsetWidth-button1.offsetWidth)/100;
          
//               button1.style.marginLeft = left1 + 'px'; 
//               button2.style.marginLeft = left2 + 'px';
              
//               if (left1 > left2)
//                 {
//                   between.style.width = (left1-left2) + 'px';
//                   between.style.marginLeft = left2 + 'px';
//                 }
//               else
//                 {
//                   between.style.width = (left2-left1) + 'px';
//                   between.style.marginLeft = left1 + 'px';  
//                 }
//       }
    
//       /*mouse*/
//       button1.onmousedown = function(evt) {       
//           let sliderCoords = getCoords(slider);
//           let betweenCoords = getCoords(between); 
//           let buttonCoords1 = getCoords(button1);
//           let buttonCoords2 = getCoords(button2);
//           let shiftX2 = evt.pageX - buttonCoords2.left; 
//           let shiftX1 = evt.pageX - buttonCoords1.left;
        
//           document.onmousemove = function(evt) {
//               let left1 = evt.pageX - shiftX1 - sliderCoords.left;
//               let right1 = slider.offsetWidth - button1.offsetWidth;

              
//               if (left1 < 0) left1 = 0;
//               if (left1 > right1) left1 = right1;
//               button1.style.marginLeft = left1 + 'px';  
              
              
//               shiftX2 = evt.pageX - buttonCoords2.left; 
//               let left2 = evt.pageX - shiftX2 - sliderCoords.left;
//               let right2 = slider.offsetWidth - button2.offsetWidth;
//               if (left2 < 0) left2 = 0;
//               if (left2 > right2) left2 = right2;            
              
//                   let per_min = 0;
//                   let per_max = 0;
//               if (left1 > left2)
//                 {
//                   between.style.width = (left1-left2) + 'px';
//                   between.style.marginLeft = left2 + 'px';
                  
//                   per_min = left2*100/(slider.offsetWidth-button1.offsetWidth);
//                   per_max = left1*100/(slider.offsetWidth-button1.offsetWidth);
//                 }
//               else
//                 {
//                   between.style.width = (left2-left1) + 'px';
//                   between.style.marginLeft = left1 + 'px';                
                  
//                   per_min = left1*100/(slider.offsetWidth-button1.offsetWidth);
//                   per_max = left2*100/(slider.offsetWidth-button1.offsetWidth);
//                 }
//                   inpt1.value= (parseInt(min)+Math.round((max-min)*per_min/100));
//                   inpt2.value= (parseInt(min)+Math.round((max-min)*per_max/100));   
          
//           };
//           document.onmouseup = function() {
//               document.onmousemove = document.onmouseup = null;
//           };
//           return false;
//       };
      
//     button2.onmousedown = function(evt) {       
//           let sliderCoords = getCoords(slider);
//           let betweenCoords = getCoords(between); 
//           let buttonCoords1 = getCoords(button1);
//           let buttonCoords2 = getCoords(button2);
//           let shiftX2 = evt.pageX - buttonCoords2.left; 
//           let shiftX1 = evt.pageX - buttonCoords1.left;
        
//           document.onmousemove = function(evt) {
//               let left2 = evt.pageX - shiftX2 - sliderCoords.left;
//               let right2 = slider.offsetWidth - button2.offsetWidth;
//               if (left2 < 0) left2 = 0;
//               if (left2 > right2) left2 = right2;
//               button2.style.marginLeft = left2 + 'px';                      
            
//               shiftX1 = evt.pageX - buttonCoords1.left; 
//               let left1 = evt.pageX - shiftX1 - sliderCoords.left;
//               let right1 = slider.offsetWidth - button1.offsetWidth;  
//               if (left1 < 0) left1 = 0;
//               if (left1 > right1) left1 = right1;                      
              
//                   let per_min = 0;
//                   let per_max = 0;
                  
//               if (left1 > left2)
//                 {
//                   between.style.width = (left1-left2) + 'px';
//                   between.style.marginLeft = left2 + 'px';
//                   per_min = left2*100/(slider.offsetWidth-button1.offsetWidth);
//                   per_max = left1*100/(slider.offsetWidth-button1.offsetWidth);
//                 }
//               else
//                 {
//                   between.style.width = (left2-left1) + 'px';
//                   between.style.marginLeft = left1 + 'px';
//                   per_min = left1*100/(slider.offsetWidth-button1.offsetWidth);
//                   per_max = left2*100/(slider.offsetWidth-button1.offsetWidth);
//                 }
//                   inpt1.value= (parseInt(min)+Math.round((max-min)*per_min/100));
//                   inpt2.value= (parseInt(min)+Math.round((max-min)*per_max/100));           
              
//           };
//           document.onmouseup = function() {
//               document.onmousemove = document.onmouseup = null;
//           };
//           return false;
//       };
      
//       button1.ondragstart = function() {
//           return false;
//       };
//       button2.ondragstart = function() {
//           return false;
//       };

//       function getCoords(elem) {
//           let box = elem.getBoundingClientRect();
//           return {
//               top: box.top + pageYOffset,
//               left: box.left + pageXOffset
//           };
//       }   
    
//   }






//   };

// };



// // Filters

// // let filterValues = []; // filter name

// // function getVal(val) {

// //   // if (filterValues.length !== 0) {
// //   //   for (let i = 0; i < filterValues.length; i++) {

// //   //     if (filterValues[i] == val.value) {
// //   //       continue;
// //   //     } else {
// //   //       filterValues.push(val.value); // names

// //   //     }
  
// //   //   }
// //   // } else {
    
// //   //   console.log('first time');
// //   // }

  
// //   filterValues.push(val.value); // names
  

// //   console.log(filterValues);

  

// //   makeFilter();

  


// // }


// // function pushData(characteristics, data) {
// //   bigData.push(characteristics);
// //   bigData.push(data);
// // }


// // function makeFilter() {

// //   console.log(bigData);

// //   let charactData;
// //   let dataArr = [];
 
// //   for (let key in bigData[1]) {

// //     charactData = bigData[1][key]['characteristics-data'];
    

// //     if (bigData[1][key]['characteristics-data'] !== null) {  
      

// //       for (let i = 0; i < filterValues.length; i++) {
 

       
        
     
    
// //         if (charactData.includes(filterValues[i])) {
// //           console.log(key);
// //           let cart = document.querySelectorAll('.cart');

// //           for (let i = 0; i < cart.length; i++) {
      
// //             let z = cart[i].firstChild.attributes[0].nodeValue
// //               z = parseInt(z.replace(/[^\d]/g, ''));
      
// //             if (z == key) {
// //               cart[key].style.display = 'block';
// //             }
// //             if (z !== key)  {
// //               cart[key].style.display = 'none';
// //             }
// //           }


// //         }
// //       }
// //     }

    
     

// //   }

  

// //   // console.log('===========Filter values ========================')
// //   console.log(filterValues);
// //   // console.log('===========charact data ========================');
// //   // console.log(charactData);
  


// // }


// // setTimeout(function () {
// //   makeFilter();
// // }, 1000);

